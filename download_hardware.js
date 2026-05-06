import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join('e:/fpt-2026/public/images/hardware');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2025-12-07/69353d34ac88e_1734947657_AX3000CV2%20%281%29.png', name: 'modem-wifi-6.webp' },
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2025-12-07/69353d36839cc_1738730831_ont1port.png', name: 'ont-1-port.webp' },
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2025-12-07/69353d38a24a1_1734374306_AccessPointAX1500C.png', name: 'access-point.webp' },
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2025-12-07/69353d5f35971_1734375849_FPTPlayBox650%20%281%29.png', name: 'fpt-play-box.webp' },
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2026-01-12/6964c2141dfad_G%C3%B3i-Premium.png', name: 'fpt-play-vvip.webp' },
  { url: 'https://hi-static.fpt.vn/sys/shop/prod/2025-12-07/69353d483f474_goi-the-thao-ngoai-hang-anh.png', name: 'ngoai-hang-anh.webp' },
];

const downloadImage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
};

async function processImages() {
  for (const img of images) {
    try {
      console.log(`Downloading ${img.url}...`);
      const buffer = await downloadImage(img.url);
      
      console.log(`Converting to ${img.name}...`);
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(path.join(outDir, img.name));
        
      console.log(`✅ Saved ${img.name}`);
    } catch (err) {
      console.error(`❌ Failed to process ${img.name}:`, err);
    }
  }
}

processImages();
