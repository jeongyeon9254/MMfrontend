function IPadress() {
  const env = process.env.NODE_ENV;
  // const devTarget = env === 'development' ? 'http://13.209.76.178' : 'https://sixzombies.shop';
  const devTarget = env === 'development' ? 'https://sixzombies.shop' : 'https://sixzombies.shop';

  return devTarget;
}

function WeIpdress() {
  const env = process.env.NODE_ENV;
  const devTarget = env === 'development' ? 'http://localhost:3000' : 'https://www.bizchemy.com';
  // const devTarget = env === 'development' ? 'https://sixzombies.shop' : 'https://sixzombies.shop';

  return devTarget;
}
export { IPadress, WeIpdress };
