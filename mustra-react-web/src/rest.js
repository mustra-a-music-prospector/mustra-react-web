import axios from "axios";

export const DOMAIN = "https://devstu.koreaelection.shop/mustra/";

export const CREATE_FEED = "feed/create";

export const FIND_ALL_FEED = "feed/findAll";

export const FIND_RANK = "find/rank";

export const GET = (url, data) => {
    console.log(DOMAIN + url);
    return axios({
        method: "get",
        url: DOMAIN + url,
        data,
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return null;
        });
};

export const POST = (url, data) => {
    console.log(DOMAIN + url);
    return axios({
        method: "post",
        url: DOMAIN + url,
        data,
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return null;
        });
};
