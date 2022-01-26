import React, { useState } from 'react';
import styled from 'styled-components';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as mainActions } from '../../redux/modules/main';
import { history } from '../../redux/configureStore.js';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import SampleMapContainer from '../modules/main/SampleMapContainer';
import MapCategoryNav from '../modules/main/MapCategoryNav';
import SampleMapList from '../modules/main/SampleMapList';

const Sample = () => {
  const dispatch = useDispatch();

  // 샘플 정보를 받아옵니다
  React.useEffect(() => {
    dispatch(mainActions.getGuestListDB());
  }, []);

  // 샘플 정보를 가져옵니다
  const locationInfo = useSelector(state => state.main.sample);

  // 로그인 필요페이지 이동
  const needLogin = () => {
    history.push(`/LoginNeed`);
  };

  // 더미 mbti
  const userInfo = {
    mbti: 'INFJ',
  };

  const [modal, setModal] = useState(false);

  const outModal = () => {
    setModal(false);
  };
  const onModal = () => {
    setModal(true);
  };

  return (
    <React.Fragment>
      <div onClick={needLogin}>
        <Header main>둘러보기</Header>
        <LocationBox>
          <Button BtnTag _onClick={needLogin}>
            {locationInfo.location} {locationInfo.locDetail}
          </Button>
        </LocationBox>
        <MapCategoryNav sample userInfo={userInfo} />
      </div>
      <SampleMapContainer locationInfo={locationInfo} onModal={onModal} />
      <CenterBtn>
        <Button BtnRound width="87px" _onClick={needLogin}>
          자동매칭
        </Button>
      </CenterBtn>
      {modal ? <SampleMapList sample outModal={outModal} locationInfo={locationInfo} /> : null}
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
