const https = require('https');

const titles = [
  'The_Fantastic_Four:_First_Steps',
  'Avengers:_Doomsday',
  'Avengers:_Secret_Wars',
  'Spider-Man_4'
];

titles.forEach(t => {
  https.get(`https://en.wikipedia.org/wiki/${t}`, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
      const match = html.match(/class="infobox[^"]*"[\s\S]*?<img[^>]*src="([^">]+)"/);
      console.log(t, match ? match[1] : 'No match');
    });
  });
});
