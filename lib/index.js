var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { baiduSearch } from "./searchEngines";
function searchEngineTool(query, engine) {
    return __awaiter(this, void 0, void 0, function* () {
        let results = [];
        switch (engine) {
            case "baidu":
                for (const q of query) {
                    const result = yield baiduSearch(q);
                    results = results.concat(result);
                }
                break;
            default:
                throw new Error("Invalid search engine specified.");
        }
        return results;
    });
}
export default searchEngineTool;
