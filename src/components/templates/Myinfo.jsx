import React from 'react';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';

import { MyinfoHead, MyBody, MySetting, MyEdit } from '../modules/Myinfo';
const Myinfo = () => {
  const [Open, SetOpen] = React.useState(false);
  const settingEvent = () => {
    SetOpen(!Open);
  };
  const [On, setOn] = React.useState('');
  const OnEvent = e => {
    setOn(!On);
  };

  return (
    <>
      <Header bg="transparent" white myinfo _onClick={settingEvent}>
        내 정보
      </Header>
      <MyinfoHead OnEvent={OnEvent}></MyinfoHead>
      <MyBody></MyBody>
      <MySetting Open={Open} _onClick={settingEvent}></MySetting>
      <MyEdit Open={On} _onClick={OnEvent}></MyEdit>
    </>
  );
};

export default Myinfo;
