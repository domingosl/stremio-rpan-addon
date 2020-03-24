const { addonBuilder } = require("stremio-addon-sdk");
const magnet = require("magnet-uri");
const getStremioStreams = require('./get-stremio-streams');

const manifest = {
    "id": "org.lupo.stremiorpan",
    "version": "1.0.0",
    "name": "Reddit public access network (unofficial)",
    "description": "See redittors streaming live directly from Stremio!",
    "resources": [
        "catalog",
        "stream"
    ],
    "types": ["tv"],
    "catalogs": [
        {
            type: 'tv',
            id: 'stremiospantv'
        }
    ],
    "idPrefixes": [ "sr" ]
};


const builder = new addonBuilder(manifest);


builder.defineStreamHandler(async function(args) {

    const dataset = await getStremioStreams();

    if (dataset[args.id]) {
        return Promise.resolve({ streams: [dataset[args.id]] });
    } else {
        return Promise.resolve({ streams: [] });
    }
});

const generateMetaPreview = function(stream, key) {

    return {
        id: key,
        type: stream.type,
        name: stream.name,
        poster: stream.thumbnail,
        banner: stream.thumbnail,
        posterShape: 'regular',
        year: new Date().getFullYear()
    };
};

builder.defineCatalogHandler(async function(args, cb) {

    const metas = Object.entries(await getStremioStreams())
        .filter(([_, value]) => value.type === args.type)
        .map(([key, value]) => generateMetaPreview(value, key));

    return Promise.resolve({ metas:  metas });

});

module.exports = builder.getInterface();