import React from 'react';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';

import { MyinfoHead, MyBody, MyBottom, MyEdit } from '../modules/Myinfo';
const Myinfo = () => {
  const [Open, setOpen] = React.useState('');
  const ClickEvent = e => {
    setOpen(!Open);
  };
  return (
    <>
      <Header bg="transparent" white myinfo>
        내 정보
      </Header>
      <MyinfoHead></MyinfoHead>
      <MyBody></MyBody>
      <MyEdit Open={Open} _onClick={ClickEvent}></MyEdit>
      <MyBottom Edit _onClick={ClickEvent}>
        내 정보 수정하기
      </MyBottom>
    </>
  );
};

export default Myinfo;
