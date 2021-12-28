import React, { useState } from 'react';
import Header from '../modules/layout/Header';
import { Image, Grid, Input, Button } from '../element/index';
import AddAdress from '../modules/AddAdress';
import icon_photo from '../../img/Icon/icon_photo.svg';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AddMyinfo = props => {
  const [Address, setAddress] = useState(false);

  if (Address === true) {
    return (
      <>
        <AddAdress />
      </>
    );
  }

  return (
    <Grid>
      <Header>추가정보 입력하기</Header>
      <Grid margin="47px 0px 17px 0px">
        <Image round src={icon_photo} width="188px" height="188px"></Image>
      </Grid>
      <Grid row gap="20px">
        <Grid margin=" 0px 30px">
          <Addinfo>이름</Addinfo>
          <Input />
        </Grid>
        <Grid margin="0px 30px">
          <Addinfo>연령대</Addinfo>
          <Input />
        </Grid>
        <Grid margin="0px 30px">
          <Addinfo>닉네임 설정</Addinfo>
          <Input />
        </Grid>
        <Grid margin="0px 25px">
          <Addinfo>성별</Addinfo>
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
      <Grid width="315px" margin="51px 30px 44px 30px">
        <Button
          BtnBottom
          _onClick={() => {
            setAddress(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </Grid>
  );
};
const Addinfo = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 7px 0px;
`;

export default AddMyinfo;
