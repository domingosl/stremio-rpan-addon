const got = require('got');
const getAccessToken = require('./get-access-token');
const userAgent = require('random-useragent').getRandom();

const download = async () => {

    const response = await got('https://strapi.reddit.com/broadcasts', {
        headers: {
            authority: 'strapi.reddit.com',
            pragma: 'no-cache',
            'cache-control': 'no-cache',
            'user-agent': userAgent,
            'sec-fetch-dest': 'empty',
            'authorization': 'Bearer ' + await getAccessToken(),
            'content-type': 'application/x-www-form-urlencoded',
            accept: '*/*',
            origin: 'https://www.reddit.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            referer: 'https://www.reddit.com/',
            'accept-language': 'it,en;q=0.9,it-IT;q=0.8,en-US;q=0.7,es;q=0.6'
        }
    });

    return JSON.parse(response.body).data.map(broadcast => {
        return {
            id: broadcast.stream.stream_id,
            title: broadcast.post.title,
            thumbnail: broadcast.stream.thumbnail,
            url: broadcast.stream.hls_url
        };
    });

};

module.exports = download;