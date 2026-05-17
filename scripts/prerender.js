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
      const { html, helmet } = render(route);

      // 5. Inject vào template
      let page = template;

      // Inject rendered HTML vào <div id="root">
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject helmet title
      if (helmet?.title) {
        const titleStr = helmet.title.toString();
        page = page.replace(/<title>.*?<\/title>/, titleStr);
      }

      // Inject helmet meta tags (description, OG, twitter, etc.)
      if (helmet?.meta) {
        const metaStr = helmet.meta.toString();
        if (metaStr) {
          // Xóa meta description/keywords cũ từ template rồi thêm mới
          page = page.replace(/<meta name="description"[^>]*>/, '');
          page = page.replace(/<meta name="keywords"[^>]*>/, '');
          page = page.replace(/<meta name="robots"[^>]*>/, '');
          page = page.replace('</head>', `${metaStr}\n</head>`);
        }
      }

      // Inject helmet link tags (canonical)
      if (helmet?.link) {
        const linkStr = helmet.link.toString();
        if (linkStr) {
          page = page.replace('</head>', `${linkStr}\n</head>`);
        }
      }

      // Inject JSON-LD scripts
      if (helmet?.script) {
        const scriptStr = helmet.script.toString();
        if (scriptStr) {
          page = page.replace('</head>', `${scriptStr}\n</head>`);
        }
      }

      // 6. Tạo thư mục và ghi file
      // /trang-chu → dist/trang-chu/index.html
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

  // 7. Cleanup — xóa server bundle (không cần deploy)
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
