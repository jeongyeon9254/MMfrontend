import React from 'react';
import Footer from '../modules/layout/Footer';
import { Grid, Container } from '../element';

import Header from '../modules/layout/Header';
import { Listfrom, ListHead } from '../modules/Choice';
import { useSelector } from 'react-redux';
const Choice = () => {
  const roomGet = useSelector(state => state.chat.roomGet);
  const roomPost = useSelector(state => state.chat.roomPost);
  const ClickEvent1 = id => {
    console.log('ssss');
  };
  return (
    <div>
      <Header>요청 목록</Header>

      <Grid height="100%">
        <ListHead Text="내가 받은 매칭 신청 목록 2개" />
        {roomGet.map((x, idx) => {
          return (
            <Listfrom
              OnClick={e => {
                console.log(x.roomId);
              }}
              data={x}
              key={idx}
            ></Listfrom>
          );
        })}
        <ListHead Text="내가 보낸 매칭 신청 목록 2개" />
        {roomPost.map((x, idx) => {
          return (
            <Listfrom
              OnClick={e => {
                console.log(x.roomId);
              }}
              data={x}
              key={idx}
            ></Listfrom>
          );
        })}
      </Grid>

      <Footer />
    </div>
  );
};

export default Choice;
