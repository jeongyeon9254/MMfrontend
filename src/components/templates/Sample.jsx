import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch, useSelector } from 'react-redux';
import { gpsLsit } from '../modules/Main/gpsList.js';
import { actionCreators as mainActions } from '../../redux/modules/main';
import { getMatchingDB } from '../../api/modules/chemy';
import { history } from '../../redux/configureStore.js';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapList from '../modules/Main/MapList.jsx';
import SampleMapContainer from '../modules/Main/SampleMapContainer';
import MapKategorieNav from '../modules/Main/MapKategorieNav';

const Sample = props => {
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [locationList, setLocationList] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const needLogin = () => {
    history.push(`/LoginNeed`);
  };

  const outModal = () => {
    setModal(false);
  };

  const onModal = () => {
    setModal(true);
  };

  React.useEffect(() => {
    dispatch(mainActions.getGuestListDB());
  }, []);

  const locationInfo = useSelector(state => state.main.list);

  const userInfo = {
    mbti: 'INFJ',
  };

  return (
    <React.Fragment>
      <Header main>메인화면</Header>
      <LocationBox>
        <Button BtnTag _onClick={needLogin}>
          서울 특별시 {locationInfo.gps}
        </Button>
      </LocationBox>
      <MapKategorieNav sample userInfo={userInfo} />
      <SampleMapContainer locationInfo={locationInfo} onModal={onModal} />
      <CenterBtn>
        <Button BtnRound width="87px" _onClick={needLogin}>
          자동매칭
        </Button>
      </CenterBtn>
      <MapList modal={modal} outModal={outModal} />
      <Footer />
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

export default Sample;
