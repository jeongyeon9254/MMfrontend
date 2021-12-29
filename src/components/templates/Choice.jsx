import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Footer from '../modules/layout/Footer';
import Header from '../modules/layout/Header';
import { Grid, Container } from '../element';
import { Listfrom, ListHead, UserPage } from '../modules/Choice';
import { history } from '../../redux/configureStore';
const Choice = () => {
  const roomGet = useSelector(state => state.chat.roomGet);
  const roomPost = useSelector(state => state.chat.roomPost);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [Paging, setPaging] = React.useState(false);
  const [Data, setData] = React.useState({});

  React.useEffect(() => {}, [Data]);

  return (
    <div>
      <Header>요청 목록</Header>
      <Grid height="100%">
        <ListHead
          Text="내가 받은 매칭 신청 목록 2개"
          OnClick={() => {
            setOpen(!open);
          }}
          boo={open}
        />
        <Boad className={open ? 'Open' : ''}>
          {roomGet.map((x, idx) => {
            return (
              <Listfrom
                OnClick={e => {
                  //api 요청 보내면서 유저 정보를 가지고 온다. redux에 저장 해서 userBox에서 가지고 온다.
                  setPaging(!Paging);
                  setData(x);
                }}
                data={x}
                key={idx}
              ></Listfrom>
            );
          })}
        </Boad>
        <ListHead
          Text="내가 보낸 매칭 신청 목록 2개"
          OnClick={() => {
            setOpen2(!open2);
          }}
          boo={open2}
        />
        <Boad className={open2 ? 'Open' : ''}>
          {roomPost.map((x, idx) => {
            return (
              <Listfrom
                OnClick={e => {
                  history.push('/');
                }}
                key={idx}
                data={x}
              ></Listfrom>
            );
          })}
        </Boad>
      </Grid>
      <UserPage
        Boo={Paging}
        data={Data}
        _onClick={() => {
          setPaging(!Paging);
        }}
      ></UserPage>
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
