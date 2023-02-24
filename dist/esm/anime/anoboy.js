import { Axios, Cheerio } from "../Utils.js";
import { AnoboyBaseUrl } from "../Constant.js";
async function latest() {
    try {
        const { data } = await Axios.get(AnoboyBaseUrl).catch((e) => e?.response);
        const $ = Cheerio(data);
        const _temp = [];
        $(".home_index > a[rel='bookmark']").each((i, e) => {
            const title = $(e).attr("title");
            const update = $(e).find(".jamup").text();
            const thumbnail = AnoboyBaseUrl +
                ($(e).find("amp-img").attr("src") || $(e).find("img").attr("src"));
            const url = $(e).attr("href");
            _temp.push({ title, update, thumbnail, url });
        });
        if (Array.isArray(_temp) && _temp.length) {
            return _temp;
        }
        else {
            throw new Error("_temp is not an Array");
        }
    }
    catch (e) {
        return {
            error: true,
            message: String(e),
        };
    }
}
async function search(query) {
    try {
        const { data } = await Axios.get(AnoboyBaseUrl, {
            params: {
                s: query,
            },
        }).catch((e) => e?.response);
        const $ = Cheerio(data);
        const _temp = [];
        $(".column-content > a[rel='bookmark']").each((i, e) => {
            const title = $(e).attr("title");
            const update = $(e).find(".jamup").text();
            const thumbnail = $(e).find("amp-img").attr("src") || $(e).find("img").attr("src");
            const url = $(e).attr("href");
            _temp.push({ title, update, thumbnail, url });
        });
        if (Array.isArray(_temp) && _temp.length) {
            return _temp;
        }
        else {
            throw new Error("_temp is not an Array");
        }
    }
    catch (e) {
        return {
            error: true,
            message: String(e),
        };
    }
}
async function detail(url) {
    try {
        const { data } = await Axios.get(url).catch((e) => e?.response);
        const $ = Cheerio(data);
        const title = $(".pagetitle > h1").text();
        const judi = $("#judi > a").attr("href");
        const urls = [];
        $(".download")
            .find("p > span")
            .each((i, e) => {
            const source = $(e).find("span").text();
            $(e)
                .find("a")
                .each((_i, _e) => {
                const url = $(_e).attr("href");
                const resolution = $(_e).text();
                urls.push({ source, url, resolution });
            });
        });
        return {
            title,
            judi,
            urls,
        };
    }
    catch (e) {
        return {
            error: true,
            message: String(e),
        };
    }
}
export { latest, search, detail };
