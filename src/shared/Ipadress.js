export default function IPadress() {
  const env = process.env.NODE_ENV;
  // 추후 백엔드 서버 https 설정 후 도메인으로 변경
  // 종욱
  // const devTarget = env === 'development' ? 'http://13.124.242.158' : 'http://13.124.242.158';
  // 영철
  const devTarget = env === 'development' ? 'http://13.209.76.178' : 'http://13.209.76.178';
  // // 무중단 배포
  // const devTarget = env === 'development' ? 'http://13.125.248.25' : 'http://13.125.248.25';

  console.log(devTarget);
  return devTarget;
}
