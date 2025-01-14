const redis = require('redis');

function createClient(url) {
  const client = redis.createClient({url, enable_offline_queue: false});
  client.on('error', function (err) {
    console.error('Redis error', err);
  });

  client.on('ready', () => {
    console.info('Redis client is ready ' + url);
  });

  return client;
}

module.exports = {
  createClient
};
