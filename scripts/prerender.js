/**
 * Pre-render script — Chạy sau vite build để sinh HTML tĩnh cho mỗi route.
 * 
 * Flow:
 *   1. vite build          → dist/ (client bundle)
 *   2. vite build --ssr    → dist/server/ (server bundle)
 *   3. node prerender.js   → Ghi HTML tĩnh vào dist/
 * 
 * Không cần thêm package nào — chỉ dùng Node.js built-in.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SERVER_ENTRY = path.join(DIST, 'server', 'entry-server.js');

/**
 * Trích xuất Helmet tags từ rendered HTML.
 * Helmet render title/meta/link/script inline trong component tree.
 * Ta extract ra → chuyển vào <head>, xóa khỏi body.
 * 
 * Cách nhận biết: Helmet tags nằm ngay đầu rendered HTML,
 * trước <div class="app-container"> (vì Helmet render trước tree).
 */
function extractAndClean(html) {
  // Tìm vị trí bắt đầu nội dung thực (đầu component tree)
  const appStart = html.indexOf('<div class="app-container">');
  if (appStart === -1) {
    return { cleanHtml: html, headTags: '' };
  }

  // Phần đầu = Helmet rendered tags
  const helmetSection = html.substring(0, appStart);
  // Phần sau = nội dung trang thực
  const cleanHtml = html.substring(appStart);

  // Extract title từ helmet section
  let title = '';
  const titleMatch = helmetSection.match(/<title[^>]*>(.*?)<\/title>/);
  if (titleMatch) {
    title = titleMatch[1];
  }

  // Extract tất cả meta tags
  const metas = [];
  const metaRegex = /<meta[^>]*\/?>/gi;
  let m;
  while ((m = metaRegex.exec(helmetSection)) !== null) {
    metas.push(m[0]);
  }

  // Extract link tags (canonical, preload)
  const links = [];
  const linkRegex = /<link[^>]*\/?>/gi;
  while ((m = linkRegex.exec(helmetSection)) !== null) {
    links.push(m[0]);
  }

  // Extract JSON-LD scripts
  const scripts = [];
  const scriptRegex = /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi;
  while ((m = scriptRegex.exec(helmetSection)) !== null) {
    scripts.push(m[0]);
  }

  // Build head injection string
  const headParts = [];
  if (metas.length > 0) headParts.push(...metas);
  if (links.length > 0) headParts.push(...links);
  if (scripts.length > 0) headParts.push(...scripts);

  return {
    cleanHtml,
    title,
    headTags: headParts.join('\n    '),
  };
}

async function prerender() {
  console.log('\n🚀 Pre-rendering bắt đầu...\n');

  // 1. Import server bundle (dùng pathToFileURL cho Windows)
  const { render, getRoutes } = await import(pathToFileURL(SERVER_ENTRY).href);

  // 2. Đọc template HTML từ client build
  const templatePath = path.join(DIST, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 3. Thu thập tất cả routes
  const routes = getRoutes();
  console.log(`📋 Tổng cộng ${routes.length} routes cần pre-render:\n`);

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      // 4. Render route thành HTML
      const { html } = render(route);

      // 5. Extract Helmet tags + clean body
      const { cleanHtml, title, headTags } = extractAndClean(html);

      // 6. Build final page
      let page = template;

      // Inject clean HTML vào <div id="root">
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${cleanHtml}</div>`
      );

      // Inject Helmet title (thay thế title gốc)
      if (title) {
        page = page.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
      }

      // Inject Helmet meta/link/script vào <head>
      if (headTags) {
        // Xóa meta tags cũ từ template (sẽ được thay thế bởi Helmet tags)
        page = page.replace(/<meta name="description"[^>]*>/, '');
        page = page.replace(/<meta name="keywords"[^>]*>/, '');
        page = page.replace(/<meta name="robots"[^>]*>/, '');
        page = page.replace('</head>', `    ${headTags}\n  </head>`);
      }

      // 7. Tạo thư mục và ghi file
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(DIST, routePath, 'index.html');
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, page);

      success++;
      console.log(`  ✅ ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ❌ ${route} — ${err.message}`);
    }
  }

  // 8. Cleanup — xóa server bundle (không cần deploy)
  fs.rmSync(path.join(DIST, 'server'), { recursive: true, force: true });

  console.log(`\n🏁 Pre-render hoàn tất: ${success} thành công, ${failed} lỗi.\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

prerender().catch(err => {
  console.error('💥 Pre-render thất bại:', err);
  process.exit(1);
});
