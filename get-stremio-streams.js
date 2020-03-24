const getBroadcasts = require('./get-broadcasts');

module.exports = async () => {

  const broadcasts = await getBroadcasts();

  const response = {};

  broadcasts.map(b => response['sr-' + b.id] = { name: b.title, type: 'tv', url: b.url, thumbnail: b.thumbnail } );

  return response;

};