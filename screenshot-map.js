const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Listen for console messages
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  page.on('pageerror', error => console.log('ERROR:', error.message));

  await page.goto('http://localhost:3000/destinations');
  await page.waitForTimeout(3000);

  // Click the map button (the second button in the view toggle)
  await page.click('button:has(svg.lucide-map)');
  console.log('Clicked map button, waiting for map to load...');
  await page.waitForTimeout(5000);

  await page.screenshot({ path: '/tmp/destinations-map.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved to /tmp/destinations-map.png');
})();
