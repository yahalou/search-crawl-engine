type SearchEngine = 'baidu' | 'google' | 'bing';
export type Result = {
    href: string | null;
    title: string | null;
    abstract: string | null;
};
declare function searchEngineTool(query: string[], engine: SearchEngine): Promise<Result[]>;
export default searchEngineTool;
