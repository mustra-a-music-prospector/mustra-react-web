import axios from "axios";

export const DOMAIN = "https://devstu.koreaelection.shop/mustra/";
export const GOOGLE_DOMAIN = "https://www.google.com/search?q=";
export const NAVER_DOMAIN = "https://www.google.com/search?q=";

export const NAVER_GET = (data) => {
    console.log(NAVER_DOMAIN + data);
    return axios({
        method: "get",
        url: NAVER_DOMAIN + data,
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return null;
        });
};

export const GOOGLE_GET = (data) => {
    console.log(GOOGLE_DOMAIN + data);
    return axios({
        method: "get",
        url: GOOGLE_DOMAIN + data,
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return null;
        });
};

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
