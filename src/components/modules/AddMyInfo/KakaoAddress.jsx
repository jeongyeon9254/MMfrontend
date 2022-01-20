import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Grid } from '../../element';

const KakaoAddress = props => {
  const [Full, setFull] = React.useState('');
  const [LO, setLo] = React.useState('');
  const [De, setDe] = React.useState('');
  const [X, setX] = React.useState('');
  const [Y, setY] = React.useState('');

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

    const { kakao } = window;
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(fullAddress, function (results, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const addressName = results[0].address.address_name;
        const location = results[0].address.region_1depth_name;
        const locDetail = results[0].address.region_2depth_name;
        const x = results[0].address.x;
        const y = results[0].address.y;
        setFull(addressName);
        setLo(location);
        setDe(locDetail);
        setX(x);
        setY(y);
        props.setKakaoadr(false);
      }
    });
  };
  const modalStyle = {
    position: 'absolute',
    top: 50,
    left: '0px',
    zIndex: '100',
    border: '1px solid #d4c8c8',
    overflow: 'hidden',
    height: '450px',
  };

  return (
    <div style={{ width: '100%' }}>
      <DaumPostcode style={modalStyle} onComplete={handleComplete} />;
    </div>
  );
};

export default KakaoAddress;
