import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Footer from '../modules/layout/Footer';
import Header from '../modules/layout/Header';
import { Grid, Container } from '../element';
import { Listfrom, ListHead, PageShadow } from '../modules/Choice';
import { useHistory } from 'react-router-dom';

const Choice = () => {
  const history = useHistory();
  const roomGet = useSelector(state => state.chat.roomGet);
  const roomPost = useSelector(state => state.chat.roomPost);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [Paging, setPaging] = React.useState(false);

  const ClickEvent = () => {
    setOpen(!open);
  };
  const ClickEvent2 = () => {
    setOpen2(!open2);
  };
  return (
    <div>
      <Header>요청 목록</Header>
      <Grid height="100%">
        <ListHead Text="내가 받은 매칭 신청 목록 2개" OnClick={ClickEvent} boo={open} />
        <Boad className={open ? 'Open' : ''}>
          {roomGet.map((x, idx) => {
            return (
              <Listfrom
                OnClick={e => {
                  setPaging(!Paging);
                }}
                data={x}
                key={idx}
              ></Listfrom>
            );
          })}
        </Boad>
        <ListHead Text="내가 보낸 매칭 신청 목록 2개" OnClick={ClickEvent2} boo={open2} />
        <Boad className={open2 ? 'Open' : ''}>
          {roomPost.map((x, idx) => {
            return (
              <Listfrom
                OnClick={e => {
                  setPaging(!Paging);
                }}
                key={idx}
                data={x}
              ></Listfrom>
            );
          })}
        </Boad>
      </Grid>
      <PageShadow Boo={Paging} data></PageShadow>
      <Footer />
    </div>
  );
};
const Boad = styled.div`
  height: 0px;
  overflow: hidden;
  position: relative;
  top: -100px;
  left: 0px;
  z-index: 1;
  opacity: 0;
  transition: all ease 0.3s;
  &.Open {
    height: auto;
    overflow: auto;
    opacity: 1;
    top: 0px;
  }
`;

export default Choice;
