import puppeteer from 'puppeteer';
import type { Result } from './index';

async function baiduSearch(query: string): Promise<Result[]> {
  let result: Result[] = [];
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.baidu.com/s?wd=${query}`);

    result = await page.evaluate(() => {
      const resultNodeArr = Array.from(document.querySelectorAll('[srcid="1599"]'));
      return resultNodeArr.map((node) => {
        const href = node.querySelector('h3 a')?.getAttribute('href');
        const title = node.querySelector('h3 a')?.innerHTML;
        const abstract = node.querySelectorAll('.c-span9 span')[1]?.innerHTML;
        return { href, title, abstract };
      });
    });
    await browser.close();
  } catch (error) {
    console.error(error);
  }
  return result;
}

export { baiduSearch };
