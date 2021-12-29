import React from 'react';
import styled from 'styled-components';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapContainer from '../modules/main/MapContainer';
import MapKategorieNav from '../modules/main/MapKategorieNav';

const Main = props => {
  return (
    <React.Fragment>
      <Header main>메인화면</Header>
      <LocationBox>
        <Button BtnTag>서울 특별시 서대문구</Button>
      </LocationBox>
      <MapKategorieNav />
      <MapContainer />
      <CenterBtn>
        <Button BtnRound width="87px">
          자동매칭
        </Button>
      </CenterBtn>
      <Footer />
    </React.Fragment>
  );
};

const CenterBtn = styled.div`
  position: absolute;
  bottom: 22px;
  left: 50%;
  margin-left: -43.5px;
  z-index: 1;
`;

const LocationBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 78px;
  z-index: 1;
`;

export default Main;
