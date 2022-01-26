import React from 'react';
import styled from 'styled-components';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as mainActions } from '../../redux/modules/main';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import SampleMapContainer from '../modules/main/SampleMapContainer';
import MapCategoryNav from '../modules/main/MapCategoryNav';
import TutorialBox from '../modules/Tutorial/TutorialBox';

const Sample = () => {
  const dispatch = useDispatch();

  // 샘플 정보를 받아옵니다
  React.useEffect(() => {
    dispatch(mainActions.getGuestListDB());
  }, []);

  // 샘플 정보를 가져옵니다
  const locationInfo = useSelector(state => state.main.list);

  // 더미 mbti
  const userInfo = {
    mbti: 'INFJ',
  };

  return (
    <React.Fragment>
      <TutorialBox />
      <div>
        <Header main>메인화면</Header>
        <LocationBox>
          <Button BtnTag>서울 종로구</Button>
        </LocationBox>
        <MapCategoryNav sample userInfo={userInfo} />
        <SampleMapContainer locationInfo={locationInfo} />
        <CenterBtn>
          <Button BtnRound width="87px">
            자동매칭
          </Button>
        </CenterBtn>
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
