const https = require('https');
const fs = require('fs');
const path = require('path');

const EXTRA_POSTERS = {
  avengerssecretwars: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=600&q=80',
  spiderman4: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
  blade: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
  armorwars: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', reject);
  });
};

async function main() {
  const posterDir = path.join(__dirname, 'assets', 'images', 'posters');
  for (const [key, url] of Object.entries(EXTRA_POSTERS)) {
    const dest = path.join(posterDir, `mcu_${key}.jpg`);
    if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
      await download(url, dest);
      console.log(`Saved mcu_${key}.jpg`);
    }
  }
}

main();
