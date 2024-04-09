// 必须要加后缀js
// 如果不加.js，由于设置了esm，编译后还是没有后缀，但是esm规定相对路径必须提供完整的扩展名，所以会找不到
// https://github.com/zhongsp/TypeScript/blob/dev/zh/release-notes/typescript-4.7.md#packagejson-%E9%87%8C%E7%9A%84-type-%E5%AD%97%E6%AE%B5%E5%92%8C%E6%96%B0%E7%9A%84%E6%96%87%E4%BB%B6%E6%89%A9%E5%B1%95%E5%90%8D
import { baiduSearch } from './searchEngines.js';

type SearchEngine = 'baidu' | 'google' | 'bing';
export type Result = {
  href: string | null;
  title: string | null;
  abstract: string | null;
};
async function searchEngineTool(query: string[], engine: SearchEngine) {
  let results: Result[] = [];
  switch (engine) {
    case 'baidu':
      for (const q of query) {
        const result = await baiduSearch(q);
        results = results.concat(result);
      }
      break;
    default:
      throw new Error('Invalid search engine specified.');
  }
  return results;
}

export default searchEngineTool;
