const https = require('https');
const fs = require('fs');

const urls = [
  "https://fpt.vn/v2/images/ngoai-hang-anh/bg-nha-header.jpg",
  "https://fpt.vn/v2/images/ngoai-hang-anh/nha_player_1.png",
  "https://fpt.vn/v2/images/ngoai-hang-anh/nha_player_2.png",
  "https://fpt.vn/v2/images/ngoai-hang-anh/tv_players.png"
];

urls.forEach(url => {
  const name = url.split('/').pop();
  const file = fs.createWriteStream("public/images/ngoai-hang-anh/" + name);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://fpt.vn/', 'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8' } }, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}`);
    });
  }).on('error', err => {
    fs.unlink("public/images/ngoai-hang-anh/" + name, () => {});
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
