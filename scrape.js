const https = require('https');
const urls = [
  'https://play.google.com/store/apps/details?id=com.et.reader.activities',
  'https://play.google.com/store/apps/details?id=com.pathoconnect.phlebo',
  'https://apps.apple.com/us/app/innovation-champions-club/id1571404179',
  'https://play.google.com/store/apps/details?id=com.nayomi',
  'https://play.google.com/store/apps/details?id=com.mihyar',
  'https://play.google.com/store/apps/details?id=com.thebodyshop.uae',
  'https://apps.apple.com/sa/app/lego-saudi-arabia/id1571217081'
];

async function fetchIcon(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchIcon(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const ogMatch = data.match(/<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i);
        const appleMatch = data.match(/<meta\s+name="twitter:image"\s+content="([^"]+)"/i) || data.match(/<link\s+rel="apple-touch-icon"[^>]*href="([^"]+)"/i);
        
        if (ogMatch && ogMatch[1]) {
          resolve(ogMatch[1]);
        } else if (appleMatch && appleMatch[1]) {
          resolve(appleMatch[1]);
        } else {
          resolve('NOT FOUND');
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (let url of urls) {
    try {
      const iconUrl = await fetchIcon(url);
      console.log(url + ' => ' + iconUrl);
    } catch (e) {
      console.log(url + ' => ERROR');
    }
  }
}
run();
