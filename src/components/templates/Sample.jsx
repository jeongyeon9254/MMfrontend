import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as mainActions } from '../../redux/modules/main';
import { history } from '../../redux/configureStore.js';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapList from '../modules/Main/MapList.jsx';
import SampleMapContainer from '../modules/Main/SampleMapContainer';
import MapKategorieNav from '../modules/Main/MapKategorieNav';

const Sample = () => {
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
      <Header main>둘러보기</Header>
      <LocationBox>
        <Button BtnTag _onClick={needLogin}>
          서울 특별시 {locationInfo.gps}
        </Button>
      </LocationBox>
      <div onClick={needLogin}>
        <MapKategorieNav sample userInfo={userInfo} />
      </div>
      <SampleMapContainer locationInfo={locationInfo} onModal={onModal} />
      <CenterBtn>
        <Button BtnRound width="87px" _onClick={needLogin}>
          자동매칭
        </Button>
      </CenterBtn>
      <MapList sample modal={modal} outModal={outModal} />
      <div onClick={needLogin}>
        <Footer />
      </div>
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
  top: 160px;
  z-index: 1;
  @media only screen and (max-width: 1050px) {
    top: 120px;
  }
`;

export default Sample;
