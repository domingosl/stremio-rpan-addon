require('dotenv').config();

const { serveHTTP, publishToCentral } = require("stremio-addon-sdk");

const addonInterface = require("./addon");

if(process.env.ENVIRONMENT === 'PRODUCTION')
    publishToCentral('https://stremio-rpan.xyz:43000/manifest.json');

serveHTTP(addonInterface, { port: 7000 });