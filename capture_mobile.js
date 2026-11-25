const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.join(__dirname, 'public', 'images', 'portfolio-mobile');

const targets = [
  { id: 'anvil', url: 'https://www.anviltechnoforge.co.in' },
  { id: 'shynex', url: 'https://shynex.vercel.app/' },
  { id: 'groovy-cafe', url: 'https://groovycafe.in/' },
  { id: 'bsr', url: 'https://www.bsrworldwide.in/' },
  { id: 'ravi-prakash', url: 'https://www.raviprakashindustries.in/' }
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  for (const t of targets) {
    try {
      console.log('Capturing:', t.id, t.url);
      const page = await browser.newPage();
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
      await page.goto(t.url, { waitUntil: 'load', timeout: 25000 });
      
      // Wait for animations and preloader to dismiss
      await new Promise(resolve => setTimeout(resolve, 6000));

      // Scroll slightly and back to trigger lazy-loaded sections and dismiss overlays
      await page.evaluate(() => {
        window.scrollBy(0, 100);
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Dismiss any preloader overlay if still stuck in DOM
      await page.evaluate(() => {
        const selectors = [
          '#preloader', '.preloader',
          '#loader', '.loader',
          '.loading-screen', '#loading-screen',
          '.page-loader', '#page-loader'
        ];
        selectors.forEach(sel => {
          document.querySelectorAll(sel).forEach(el => {
            el.remove();
          });
        });
      });

      const outPath = path.join(outDir, `${t.id}.png`);
      await page.screenshot({ path: outPath, type: 'png' });
      const stats = fs.statSync(outPath);
      console.log('Successfully saved:', t.id, `${stats.size} bytes`);
      await page.close();
    } catch (err) {
      console.error('Failed on', t.id, err.message);
    }
  }

  await browser.close();
  console.log('Capture script finished.');
})();
