var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from "puppeteer";
function baiduSearch(query) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        try {
            const browser = yield puppeteer.launch();
            const page = yield browser.newPage();
            yield page.goto(`https://www.baidu.com/s?wd=${query}`);
            result = yield page.evaluate(() => {
                const resultNodeArr = Array.from(document.querySelectorAll('[srcid="1599"]'));
                return resultNodeArr.map((node) => {
                    var _a, _b, _c;
                    const href = (_a = node.querySelector("h3 a")) === null || _a === void 0 ? void 0 : _a.getAttribute("href");
                    const title = (_b = node.querySelector("h3 a")) === null || _b === void 0 ? void 0 : _b.innerHTML;
                    const abstract = (_c = node.querySelectorAll(".c-span9 span")[1]) === null || _c === void 0 ? void 0 : _c.innerHTML;
                    return { href, title, abstract };
                });
            });
            yield browser.close();
        }
        catch (error) {
            console.error(error);
        }
        return result;
    });
}
export { baiduSearch };
