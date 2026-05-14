const https = require('https');

// Check what CSS file the live site is serving RIGHT NOW
https.get('https://fptlapmang.id.vn', { headers: { 'Cache-Control': 'no-cache' } }, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find the CSS file reference
    const cssMatch = html.match(/href="([^"]+\.css)"/);
    console.log('CSS file on live site:', cssMatch ? cssMatch[1] : 'NOT FOUND');
    
    if (cssMatch) {
      const cssPath = cssMatch[1];
      // Now fetch the actual CSS and check for our fix
      https.get('https://fptlapmang.id.vn' + cssPath, { headers: { 'Cache-Control': 'no-cache' } }, (res2) => {
        let css = '';
        res2.on('data', chunk => css += chunk);
        res2.on('end', () => {
          console.log('\n--- CHECKING IF OUR FIXES ARE IN THE CSS ---');
          console.log('1. overflow-x:hidden exists?', css.includes('overflow-x:hidden'));
          console.log('2. webkit-text-size-adjust exists?', css.includes('-webkit-text-size-adjust'));
          console.log('3. overflow-wrap:break-word exists?', css.includes('overflow-wrap:break-word'));
          console.log('4. CSS file size:', css.length, 'bytes');
        });
      });
    }
  });
}).on('error', console.error);
