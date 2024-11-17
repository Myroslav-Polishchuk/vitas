const axios = require('axios');

// const host = 'http://localhost:8080';
const host = 'http://testback.fun';

const mainAxios = axios.create({
    baseURL: `${host}`
});

const authorsAxios = axios.create({
    baseURL: `${host}/authors`
});

const recomendationsAxios = axios.create({
    baseURL: `${host}/recomendations`
});

const categoriesAxios = axios.create({
    baseURL: `${host}/categories`
});

const videoAxios = axios.create({
    baseURL: `${host}/videos`
});

const newsAxios = axios.create({
    baseURL: `${host}/news`
});

const articlesAxios = axios.create({
    baseURL: `${host}/articles`
});

const adminAxios = axios.create({
    baseURL: `${host}/admin`
});

const activitiesAxios = axios.create({
    baseURL: `${host}/events`
});

const organizationsAxios = axios.create({
    baseURL: `${host}/organizations`
});

const recomendationAxios = axios.create({
    baseURL: `${host}/recomendations`
});

const journalAxios = axios.create({
    baseURL: `${host}/external`
})

const imgAxios = axios.create({
    baseURL: `${host}/images`
})

const fileAxios = axios.create({
    baseURL: `${host}/files`
});

const advertisingAxios = axios.create({
    baseURL: `${host}/advertising`
});

const orderAxios = axios.create({
    baseURL: `${host}/order`
});

const articleReferenceAxios = axios.create({
    baseURL: `${host}/articlereference`
});

const advertisingPlaceAxios = axios.create({
    baseURL: `${host}/advertisingplace`
});

export {
    imgAxios,
    journalAxios,
    mainAxios,
    authorsAxios,
    recomendationsAxios,
    recomendationAxios,
    categoriesAxios,
    videoAxios,
    newsAxios,
    articlesAxios,
    adminAxios,
    activitiesAxios,
    organizationsAxios,
    fileAxios,
    advertisingAxios,
    orderAxios,
    articleReferenceAxios,
    advertisingPlaceAxios
};

export default {
    journalAxios,
    mainAxios,
    authorsAxios,
    recomendationsAxios,
    recomendationAxios,
    categoriesAxios,
    videoAxios,
    newsAxios,
    articlesAxios,
    adminAxios,
    activitiesAxios,
    organizationsAxios,
    fileAxios,
    imgAxios,
    advertisingAxios,
    orderAxios,
    articleReferenceAxios,
    advertisingPlaceAxios
};