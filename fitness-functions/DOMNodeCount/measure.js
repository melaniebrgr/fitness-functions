import puppeteer from 'puppeteer';

export const measure = url => async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
  });
  const { Nodes } = await page.metrics();
  await browser.close();
  return Nodes;
};
