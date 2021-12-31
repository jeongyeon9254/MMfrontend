import React from 'react';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
const Myinfo = () => {
  return (
    <div>
      <Header bg="transparent" white>
        내 정보
      </Header>
      <NewHeader></NewHeader>
    </div>
  );
};

const NewHeader = styled.div`
  background-color: #3f3f41;
  width: 100%;
  height: 330px;
  border-radius: 0px 0px 50px 50px;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export default Myinfo;
