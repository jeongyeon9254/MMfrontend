export default function IPadress() {
  const env = process.env.NODE_ENV;
  const devTarget = env === 'development' ? 'https://sixzombies.shop' : 'https://sixzombies.shop';
  //  무중단 배포
  // const devTarget = env === 'development' ? 'http://13.125.248.25' : 'https://sixzombies.shop';

  return devTarget;
}
