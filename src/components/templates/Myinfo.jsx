import React from 'react';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';

import { MyinfoHead, MyBody, MySetting } from '../modules/Myinfo';
const Myinfo = () => {
  const [Open, SetOpen] = React.useState(false);
  const settingEvent = () => {
    SetOpen(!Open);
  };
  return (
    <>
      <Header bg="transparent" white myinfo _onClick={settingEvent}>
        내 정보
      </Header>
      <MyinfoHead></MyinfoHead>
      <MyBody></MyBody>
      <MySetting Open={Open} _onClick={settingEvent}></MySetting>
    </>
  );
};

export default Myinfo;
