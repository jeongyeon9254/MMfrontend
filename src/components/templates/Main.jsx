import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch } from 'react-redux';
import { gpsLsit } from '../modules/Main/gpsList.js';
import { actionCreators as mainActions } from '../../redux/modules/main';
import { getMatchingDB } from '../../api/modules/chemy';
import { history } from '../../redux/configureStore.js';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapList from '../modules/Main/MapList.jsx';
import MapContainer from '../modules/Main/MapContainer';
import MapKategorieNav from '../modules/Main/MapKategorieNav';
import Spiner from '../../shared/Spiner.jsx';

const Main = props => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [locationList, setLocationList] = useState(false);
  const [location, setLocation] = useState(userInfo.location);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [gpsId, setGpsId] = useState('');

  const dispatch = useDispatch();

  const onLocation = () => {
    if (locationList === false) setLocationList(true);
    if (locationList === true) setLocationList(false);
  };

  const outModal = () => {
    setModal(false);
  };

  const onModal = () => {
    setModal(true);
  };

  React.useEffect(() => {
    dispatch(mainActions.getListDB());
  }, []);

  return (
    <React.Fragment>
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
                console.log('맞는 유저가 없습니다.');
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
        <Modal>
          <div className="inner">
            {gpsLsit.map((list, idx) => {
              return (
                <Button
                  _onClick={() => {
                    setLocation(list.location);
                    setLocationList(false);
                    dispatch(mainActions.chemyListDB(idx + 1));
                    setGpsId(idx + 1);
                    //지역 get 요청
                  }}
                  key={idx}
                >
                  {list.location}
                </Button>
              );
            })}
          </div>
        </Modal>
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
  top: 158px;
  z-index: 1;
  @media only screen and (max-width: 450px) {
    top: 120px;
  }
`;

// 개선필요
const Modal = styled.div`
  position: absolute;
  width: 60%;
  height: 50%;
  left: 50%;
  margin-left: -30%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  top: 200px;
  padding: 10px 20px;
  z-index: 1;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -5%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  .inner {
    overflow: scroll;
    height: 100%;
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  button {
    padding: 14px;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.colors.gray_2};
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.lg};
  }
  @media only screen and (max-width: 450px) {
    top: 160px;
  }
`;

export default Main;
