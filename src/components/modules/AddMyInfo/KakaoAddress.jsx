import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const KakaoAddress = props => {
  const [Full, setFull] = React.useState('');
  const [LO, setLo] = React.useState('');
  const [De, setDe] = React.useState('');
  const [X, setX] = React.useState('');
  const [Y, setY] = React.useState('');

  // 도로명 주소 데이터를 부모 컴포넌트로 넘김
  React.useEffect(() => {
    props.setFull(Full);
  }, [Full]);

  React.useEffect(() => {
    props.setLo(LO);
  }, [LO]);

  React.useEffect(() => {
    props.setDe(De);
  }, [De]);

  React.useEffect(() => {
    props.setX(X);
  }, [X]);

  React.useEffect(() => {
    props.setY(Y);
  }, [Y]);

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // 주소 -> 좌표 변환
    const { kakao } = window;
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(fullAddress, function (results, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const addressName = results[0].address.address_name; // 전체 주소
        const location = results[0].address.region_1depth_name; // 시
        const locDetail = results[0].address.region_2depth_name;
        const ArrLocDetail = locDetail.split(' ');
        const ArrLocDetail_1 = ArrLocDetail[0]; // 도
        const x = results[0].address.x; // 경도
        const y = results[0].address.y; // 위도
        // 도로명 주소 데이터를 함수 밖으로 꺼냄
        setFull(addressName);
        setLo(location);
        setDe(ArrLocDetail_1);
        setX(x);
        setY(y);
        props.setKakaoadr(false);
      }
    });
  };
  return (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
};

export default KakaoAddress;
