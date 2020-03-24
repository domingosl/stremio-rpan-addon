const got = require('got');

let cachedData;
let cachedOn;

const maxCacheTime = 60000;

const download = async () => {

    try {

        if(cachedData && (new Date().getTime() - cachedOn) < maxCacheTime)
            return cachedData;

        const response = await got('https://www.reddit.com/rpan');


        const start = response.body.indexOf('accessToken');

        const realStart = response.body.indexOf(':', start) + 2;
        const realEnd = response.body.indexOf('"', realStart);


        const at = response.body.substring(realStart, realEnd);

        cachedOn = new Date().getTime();
        cachedData = at;

        return at;

    }
    catch (e) {

    }
};

module.exports = download;
