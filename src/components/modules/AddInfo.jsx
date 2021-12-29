import React, { useState } from 'react';
import Header from './layout/Header';
import { Image, Grid, Input, Button } from '../element/index';
import AddAdress from './AddAdress';
import icon_photo from '../../img/Icon/icon_photo.svg';
import styled from 'styled-components';

const AddInfo = props => {
  return (
    <Grid>
      <Header>추가정보 입력하기</Header>
      <Grid margin="47px 0px 17px 0px">
        <Image round src={icon_photo} width="188px" height="188px"></Image>
      </Grid>
      <Grid row gap="20px">
        <Grid margin=" 0px 30px">
          <AddText>이름</AddText>
          <Input />
        </Grid>
        <Grid margin="0px 30px">
          <AddText>연령대</AddText>
          <Input />
        </Grid>
        <Grid margin="0px 30px">
          <AddText>닉네임 설정</AddText>
          <Input />
        </Grid>
        <Grid margin="0px 25px">
          <AddText>성별</AddText>
          <Grid row gap="17px" justify="center">
            <Button BtnAdd fontcolor="black" width="149px">
              남성
            </Button>
            <Button BtnAdd fontcolor="black" width="149px">
              여성
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const AddText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 7px 0px;
`;

export default AddInfo;
