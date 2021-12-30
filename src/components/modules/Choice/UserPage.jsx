import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Button } from '../../element';
import { UserBox, UserPre, UserButton } from './index';
import { useSelector } from 'react-redux';

const UserPage = props => {
  const { Boo, _onClick } = props;
  const { userId, nickname, profileImg, mbti } = props.data;
  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" _on={_onClick}>
        {nickname}
      </Header>
      <Grid padding="18px 30px" gap="19px">
        <UserBox data={props.data} />
        <UserPre nickname={nickname} profileImg={profileImg} mbti={mbti} />
      </Grid>
      <UserButton userId={userId} />
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
  transition: all ease 0.3s;
  &.open {
    left: 0px;
  }
`;

export default UserPage;
