const robots = {
  image: require('./image.js'),
};

async function start() {
  await robots.image();
}

start();
