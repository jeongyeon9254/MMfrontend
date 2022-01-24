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
import MapCategoryNav from '../modules/Main/MapCategoryNav';
import Spiner from '../../shared/Spiner.jsx';
import MainModal from '../modules/Main/MainModal.jsx';

// Js
import { smallGpsList, bigGpsList } from '../modules/Main/gpsList';

const Main = () => {
  const dispatch = useDispatch();

  // 로컬스토리지에서 내정보를 가져옵니다
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userLocation = bigGpsList.findIndex(x => {
    return x === userInfo.location;
  });
  const userDetailLocation = smallGpsList.findIndex(x => {
    return x.gps === userInfo.locDetail;
  });

  // api용 id 값
  const [bigNum, setBigNum] = useState(userLocation + 1);
  const [smallNum, setSmallNum] = useState(userDetailLocation + 1);

  // 로케이션 모달창 관리
  const [bigLocationList, setBigLocationList] = useState(false); // 로케이션 모달창 관리
  const [locationList, setLocationList] = useState(false); // 로케이션 모달창 관리
  const [loading, setLoading] = useState(false); // 빠른매칭 스피너 로딩

  const onLocation = () => {
    if (locationList === false) setLocationList(true);
    if (locationList === true) setLocationList(false);
    setBigLocationList(false);
  };
  const outLocation = () => {
    setLocationList(false);
  };
  const onBigLocation = () => {
    if (bigLocationList === false) setBigLocationList(true);
    if (bigLocationList === true) setBigLocationList(false);
    setLocationList(false);
  };
  const outBigLocation = () => {
    setBigLocationList(false);
  };

  // 로케이션 정보
  const [bigLocation, setBigLocation] = useState('지역을 선택해주세요');
  const [location, setLocation] = useState('지역선택');

  // 맵리스트 모달창 관리
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(true);
  };
  const outModal = () => {
    setModal(false);
  };

  // 렌더링시 지도 정보를 받아옵니다.
  React.useEffect(() => {
    dispatch(mainActions.getMyListDB());
  }, []);

  // 내위치 클릭시 메인화면 초기화
  const setMyInfo = () => {
    setBigNum(userLocation + 1);
    setSmallNum(userDetailLocation + 1);
    setBigLocation('지역을 선택해주세요');
    setLocation('지역선택');
  };

  // 알럿창 관리
  const [Alt, setAlt] = useState(false);
  const [categoryAlt, setCategoryAlt] = useState(false);

  return (
    <React.Fragment>
      {categoryAlt ? (
        <Alert
          MyBit
          check
          yes={() => {
            setCategoryAlt(false);
          }}
        >
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Grid gap="4px">
              <p>나머지 지역을 선택해주세요.</p>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Header main setMyInfo={setMyInfo}>
        메인화면
      </Header>

      {/* 지역 선택 버튼 */}
      <LocationBox>
        <button onClick={onBigLocation}>{bigLocation}</button>
        {bigLocation !== '지역을 선택해주세요' ? (
          <button onClick={onLocation}>{location}</button>
        ) : null}
      </LocationBox>

      {/* 카테고리 선택 버튼 */}
      <MapCategoryNav
        userInfo={userInfo}
        bigNum={bigNum}
        smallNum={smallNum}
        location={location}
        setCategoryAlt={setCategoryAlt}
      />

      {/* 카카오 맵 컨테이너 */}
      <MapContainer onModal={onModal} bigLocation={bigLocation} location={location} />

      {/* 빠른 매칭 버튼 */}
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

      {/* 푸터 */}
      <Footer />

      {/* 유저 리스트 모달 */}
      {modal ? <MapList outModal={outModal} /> : null}

      {/* 지역 선택 모달 */}
      {bigLocationList ? (
        <MainModal
          big
          setBigNum={setBigNum}
          bigLocation={bigLocation}
          setLocation={setLocation}
          outBigLocation={outBigLocation}
          setBigLocation={setBigLocation}
        ></MainModal>
      ) : null}
      {locationList ? (
        <MainModal
          bigNum={bigNum}
          setSmallNum={setSmallNum}
          bigLocation={bigLocation}
          outLocation={outLocation}
          setLocation={setLocation}
        ></MainModal>
      ) : null}

      {/* 스피너 및  기타 모달창 관리 */}
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
  width: auto;
  justify-content: center;
  top: 17%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  padding: 8px 10px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  button {
    width: auto;
    border: none;
    background-color: #f9f9f9;
    font-weight: 700;
    color: ${props => props.theme.colors.gray_2};
    font-size: ${props => (props.size ? props.size : props.theme.fontSizes.small)};
    cursor: pointer;
  }
  @media only screen and (max-width: 1050px) {
    top: 120px;
  }
`;

export default Main;
