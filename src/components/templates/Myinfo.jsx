import React from 'react';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';

import { MyinfoHead, MyBody, MyBottom } from '../modules/Myinfo';
const Myinfo = () => {
  return (
    <>
      <Header bg="transparent" white>
        내 정보
      </Header>
      <MyinfoHead></MyinfoHead>
      <MyBody></MyBody>
      <MyBottom Edit>내 정보 수정하기</MyBottom>
    </>
  );
};

export default Myinfo;
