import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { gpsLsit } from '../modules/main/gpsList.js';

// component
import { Button } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Footer from '../../components/modules/layout/Footer';
import MapList from '../modules/main/MapList.jsx';
import MapContainer from '../modules/main/MapContainer';
import MapKategorieNav from '../modules/main/MapKategorieNav';

const Main = props => {
  const [modal, setModal] = useState(false);

  const onModal = () => {
    if (modal === false) setModal(true);
    if (modal === true) setModal(false);
  };

  return (
    <React.Fragment>
      <Header main>메인화면</Header>
      <LocationBox>
        <Button BtnTag _onClick={onModal}>
          서울 특별시 서대문구
        </Button>
      </LocationBox>
      <MapKategorieNav />
      <MapContainer />
      <CenterBtn>
        <Button BtnRound width="87px">
          자동매칭
        </Button>
      </CenterBtn>
      <MapList></MapList>
      <Footer />
      {modal ? (
        <Modal>
          <div className="inner">
            {gpsLsit.map((list, idx) => {
              return <Button key={idx}>{list.location}</Button>;
            })}
          </div>
        </Modal>
      ) : null}
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
  top: 128px;
  z-index: 1;
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
  top: 120px;
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
`;

export default Main;
