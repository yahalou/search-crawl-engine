import { baiduSearch } from './searchEngines';

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
