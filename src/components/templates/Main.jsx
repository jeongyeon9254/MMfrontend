import React, { useState } from 'react';
import styled from 'styled-components';

// Api
import { getMatchingDB } from '../../api/modules/chemy';

// Redux
import { useDispatch } from 'react-redux';
import { actionCreators as mainActions } from '../../redux/modules/main';
import { history } from '../../redux/configureStore.js';

// component
import { Button, Grid, Alert } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapList from '../modules/Main/MapList.jsx';
import MapContainer from '../modules/Main/MapContainer';
import MapKategorieNav from '../modules/Main/MapKategorieNav';
import Spiner from '../../shared/Spiner.jsx';
import MainModal from '../modules/Main/MainModal.jsx';

const Main = () => {
  const dispatch = useDispatch();

  // 로컬스토리지에서 내정보를 가져옵니다
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const [locationList, setLocationList] = useState(false); // ㅇㅇ
  const [loading, setLoading] = useState(false);

  // 로케이션 모달창 관리
  const onLocation = () => {
    if (locationList === false) setLocationList(true);
    if (locationList === true) setLocationList(false);
  };
  const outLocation = () => {
    setLocationList(false);
  };

  // 맵리스트 모달창 관리
  const [location, setLocation] = useState(userInfo.location);
  const [gpsId, setGpsId] = useState('');
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(true);
  };
  const outModal = () => {
    setModal(false);
  };

  // 렌더링시 지도 정보를 받아옵니다.
  React.useEffect(() => {
    dispatch(mainActions.getListDB());
  }, []);

  // 알럿창 관리
  const [Alt, setAlt] = useState(false);

  return (
    <React.Fragment>
      {Alt ? (
        <Alert
          MyBit
          check
          yes={() => {
            setAlt(false);
          }}
        >
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Grid gap="4px">
              <p>맞는 유저가 없습니다.</p>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Header main>메인화면</Header>
      <LocationBox>
        <Button BtnTag _onClick={onLocation}>
          서울 특별시 {location}
        </Button>
      </LocationBox>
      <MapKategorieNav userInfo={userInfo} gpsId={gpsId} />
      <MapContainer onModal={onModal} />
      <CenterBtn>
        <Button
          _onClick={async () => {
            getMatchingDB().then(res => {
              if (res.data.userId === -1) {
                setAlt(true);
              } else {
                setLoading(true);
                setTimeout(function () {
                  history.push(`/profile/fast/${res.data.userId}`);
                }, 1500);
              }
            });
          }}
          BtnRound
          width="87px"
        >
          자동매칭
        </Button>
      </CenterBtn>
      <MapList modal={modal} outModal={outModal} />
      <Footer />
      {locationList ? (
        <MainModal
          outLocation={outLocation}
          setLocation={setLocation}
          setGpsId={setGpsId}
        ></MainModal>
      ) : null}
      {loading ? <Spiner /> : null}
    </React.Fragment>
  );
};

const CenterBtn = styled.div`
  position: absolute;
  bottom: 112px;
  left: 50%;
  margin-left: -43.5px;
  z-index: 1;
`;

const LocationBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 20%;
  z-index: 1;
  @media only screen and (max-width: 1050px) {
    top: 120px;
  }
`;

export default Main;
