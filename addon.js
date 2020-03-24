const { addonBuilder }  = require("stremio-addon-sdk");
const getBroadcasts     = require('./get-broadcasts');

const manifest = {
    "id": "org.lupo.stremiorpan",
    "version": "1.0.0",
    "name": "Reddit public access network (unofficial)",
    "description": "See redittors streaming live directly from Stremio!",
    "resources": [
        "catalog",
        "stream",
        "meta"
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

    const dataset = await getBroadcasts();

    const found = dataset.find(el => el.id === args.id);

    if(!found)
        return Promise.resolve({streams: []});

    return Promise.resolve({ streams: [{ title: found.name, url: found.streamUrl }] });

});

const generateMetaPreview = function(broadcast) {

    return {
        id: broadcast.id,
        type: 'tv',
        name: broadcast.title,
        description: 'Live stream from Reddit Public Access Network',
        poster: broadcast.thumbnail,
        posterShape: 'regular',
        background: broadcast.thumbnail,
        website: broadcast.website,
        year: new Date().getFullYear()
    };
};

builder.defineCatalogHandler(async function(args, cb) {

    const dataset = await getBroadcasts();

    const metas = dataset.filter(el => el.type === args.type)
        .map(el => generateMetaPreview(el));

    return Promise.resolve({ metas:  metas });

});


builder.defineMetaHandler(async function(args) {

    const dataset = await getBroadcasts();

    const found = dataset.find(el => el.id === args.id );

    if(!found)
        return Promise.reject();

    console.log(generateMetaPreview(found));

    return Promise.resolve({ meta: generateMetaPreview(found) });

});

module.exports = builder.getInterface();