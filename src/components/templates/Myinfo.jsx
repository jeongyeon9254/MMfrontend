import React from 'react';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';

import { MyinfoHead, MyBody, MyBottom, MyEdit } from '../modules/Myinfo';
const Myinfo = () => {
  const [Open, setOpen] = React.useState('');
  return (
    <>
      <Header bg="transparent" white>
        내 정보
      </Header>
      <MyinfoHead></MyinfoHead>
      <MyBody></MyBody>
      <MyEdit></MyEdit>
      <MyBottom Edit>내 정보 수정하기</MyBottom>
    </>
  );
};

export default Myinfo;
