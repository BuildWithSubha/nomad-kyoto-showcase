const https = require('https');
const fs = require('fs');
const path = require('path');

const UPCOMING_WIKI_TITLES = {
  fantasticfour: 'The_Fantastic_Four:_First_Steps',
  avengersdoomsday: 'Avengers:_Doomsday',
  avengerssecretwars: 'Avengers:_Secret_Wars',
  blade: 'Blade_(upcoming_film)'
};

const USER_AGENT = 'MCUArchiveBot/5.0 (contact: buildwithsubha.github.io)';
const sleep = ms => new Promise(r => setTimeout(r, ms));

const getPosterFromWiki = (title) => {
  return new Promise((resolve, reject) => {
    const url = `https://en.wikipedia.org/wiki/${title}`;
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, res => {
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => {
        const infoboxIndex = html.indexOf('class="infobox');
        if (infoboxIndex === -1) return resolve(null);
        const infoboxHtml = html.substring(infoboxIndex, infoboxIndex + 4000);
        const match = infoboxHtml.match(/src="([^">]+)"/);
        if (match && match[1]) {
          let src = match[1].replace(/&amp;/g, '&');
          if (src.startsWith('//')) src = 'https:' + src;
          resolve(src);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const posterDir = path.join(__dirname, 'assets', 'images', 'posters');
  for (const [key, title] of Object.entries(UPCOMING_WIKI_TITLES)) {
    const dest = path.join(posterDir, `mcu_${key}.jpg`);
    try {
      await sleep(1000);
      const url = await getPosterFromWiki(title);
      if (url) {
        await sleep(500);
        await downloadFile(url, dest);
        console.log(`[✓] ${key}: Saved mcu_${key}.jpg (${fs.statSync(dest).size} bytes)`);
      } else {
        console.log(`[✗] ${key}: No wiki poster found`);
      }
    } catch (e) {
      console.log(`[✗] ${key}: ${e.message}`);
    }
  }
}

main();
