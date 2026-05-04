/**
 * Script resize ảnh WebP — ghi ra file mới rồi copy đè (tránh EBUSY lock trên Windows).
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images_resized');

const BANNER_PREFIX = '69e041bf8f173';
const MAX_WIDTH = 624;
const MAX_HEIGHT = 468;
const BANNER_WIDTH = 1200;
const BANNER_HEIGHT = 448;

// Create output dir
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function resizeImage(filePath) {
  const filename = path.basename(filePath);
  const outputPath = path.join(OUTPUT_DIR, filename);
  
  try {
    const metadata = await sharp(filePath).metadata();
    
    let targetWidth, targetHeight;
    
    if (filename.includes(BANNER_PREFIX)) {
      targetWidth = BANNER_WIDTH;
      targetHeight = BANNER_HEIGHT;
    } else {
      targetWidth = MAX_WIDTH;
      targetHeight = MAX_HEIGHT;
    }
    
    if (metadata.width <= targetWidth && metadata.height <= targetHeight) {
      // Copy as-is
      fs.copyFileSync(filePath, outputPath);
      console.log(`[SKIP] ${filename} (${metadata.width}x${metadata.height})`);
      return 0;
    }
    
    const originalSize = fs.statSync(filePath).size;
    
    await sharp(filePath)
      .resize(targetWidth, targetHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: 78 })
      .toFile(outputPath);
    
    const newSize = fs.statSync(outputPath).size;
    const saved = originalSize - newSize;
    console.log(`[RESIZED] ${filename}: ${metadata.width}x${metadata.height} → fit ${targetWidth}x${targetHeight} (saved ${(saved/1024).toFixed(1)} KiB)`);
    return saved;
    
  } catch (err) {
    console.error(`[ERROR] ${filename}:`, err.message);
    // Copy original on error
    try { fs.copyFileSync(filePath, outputPath); } catch(e) {}
    return 0;
  }
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.webp'));
  console.log(`Found ${files.length} WebP images to resize...\n`);
  
  let totalSaved = 0;
  
  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    totalSaved += await resizeImage(filePath);
  }
  
  console.log(`\n✅ Resize complete! Total saved: ${(totalSaved / 1024).toFixed(1)} KiB`);
  console.log(`\nResized images are in: public/images_resized/`);
  console.log(`\nTo apply: Close VS Code/dev server, then run:`);
  console.log(`  Remove-Item public\\images\\*.webp`);
  console.log(`  Copy-Item public\\images_resized\\* public\\images\\`);
  console.log(`  Remove-Item -Recurse public\\images_resized`);
}

main();
