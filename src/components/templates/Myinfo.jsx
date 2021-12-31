import React from 'react';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
const Myinfo = () => {
  return (
    <div>
      <Header>내 정보</Header>
      <NewHeader></NewHeader>
    </div>
  );
};

const NewHeader = styled.div`
  background-color: #000;
  width: 100%;
  height: 50px;
`;

export default Myinfo;
