import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Button } from '../../element';
import { UserBox, UserPre } from './index';
import { useSelector } from 'react-redux';

const UserPage = props => {
  const { Boo, _onClick } = props;
  const user = useSelector(state => state.user.user);

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" _on={_onClick}>
        {user.nickname}
      </Header>
      <Grid padding="18px 30px" gap="19px">
        <UserBox data={user}></UserBox>
        <UserPre data={user}></UserPre>
      </Grid>
      <Fiexd>
        <Button BtnAdd>수락하기</Button>
        <Button BtnAdd>거절하기</Button>
      </Fiexd>
    </PageShadows>
  );
};

const PageShadows = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: -100%;
  top: 0px;
  z-index: 99;
  padding-top: 55px;
  padding-bottom: 90px;
  transition: all ease 0.3s;
  &.open {
    left: 0px;
  }
`;
const Fiexd = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 0px 30px 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default UserPage;
