import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../modules/layout/Footer';
import Header from '../modules/layout/Header';
import { Grid } from '../element';
import { Listfrom, ListHead, UserPage } from '../modules/Choice';
import { actionCreators as MatchingAction } from '../../redux/modules/matching';
import { actionCreators as profileAction } from '../../redux/modules/profile';
import { history } from '../../redux/configureStore';

const Choice = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(MatchingAction.getMatchingSendCheckDB());
  }, []);
  React.useEffect(() => {
    dispatch(MatchingAction.getMatchingReceiveCheckDB());
  }, []);
  const SendList = useSelector(state => state.matching.ListSend);
  const ReceiveList = useSelector(state => state.matching.ListReceive);

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [Paging, setPaging] = React.useState(false);
  const [Data, setData] = React.useState({});

  console.log(SendList, ReceiveList);

  const ListHeadClick = () => {
    setPaging(!Paging);
    setData({});
    dispatch(profileAction.resetAction());
  };
  return (
    <div>
      <Header>요청 목록</Header>
      <ScrollBox>
        <Grid height="auto">
          <ListHead
            Text={`내가 받은 매칭 신청 목록 ${ReceiveList ? ReceiveList.length : '0'}개`}
            OnClick={() => {
              setOpen(!open);
            }}
            boo={open}
          />
          <Boad className={open ? 'Open' : ''}>
            {ReceiveList.map((x, idx) => {
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
            Text={`내가 보낸 매칭 신청 목록 ${SendList ? SendList.length : '0'} 개`}
            OnClick={() => {
              setOpen2(!open2);
            }}
            boo={open2}
          />
          <Boad className={open2 ? 'Open' : ''}>
            {SendList
              ? SendList.map((x, idx) => {
                  return (
                    <Listfrom
                      OnClick={e => {
                        history.push(`/profile/${x.guestId}`);
                      }}
                      key={idx}
                      data={x}
                    ></Listfrom>
                  );
                })
              : ''}
          </Boad>
        </Grid>
      </ScrollBox>
      <UserPage Boo={Paging} data={Data !== {} ? Data : ''} _onClick={ListHeadClick}></UserPage>
      <Footer />
    </div>
  );
};
const Boad = styled.div`
  height: 0px;
  overflow: hidden;
  position: relative;
  top: -10px;
  left: 0px;
  z-index: 1;
  opacity: 0;
  transition: ease-out 0.2s;
  &.Open {
    height: inherit;
    overflow: auto;
    opacity: 1;
    top: 0px;
  }
`;
const ScrollBox = styled.div`
  overflow-y: scroll;
  height: 62vh;
  padding-bottom: 96px;
`;
export default Choice;
