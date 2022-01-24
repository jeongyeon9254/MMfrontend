export default function IPadress() {
  const env = process.env.NODE_ENV;
  const devTarget = env === 'development' ? 'https://sixzombies.shop' : 'https://sixzombies.shop';

  return devTarget;
}
