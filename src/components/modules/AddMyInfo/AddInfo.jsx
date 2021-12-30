import React, { useState } from 'react';
import Header from '../layout/Header';
import { Image, Grid, Input, Button } from '../../element/index';
import AddAdress from './AddAdress';
import icon_photo from '../../../img/Icon/icon_photo.svg';
import styled from 'styled-components';

const AddInfo = props => {
  const [Address, setAddress] = useState(false);
  const [selectgender, setSelectgender] = useState(false);

  if (Address === true) {
    return (
      <>
        <AddAdress />
      </>
    );
  }
  const Gender = ['남자', '여자'];
  return (
    <>
      <Grid>
        <Header>추가정보 입력하기</Header>
        <Grid margin="47px 0px 17px 0px">
          <Image photoRound width="188px" height="188px"></Image>
        </Grid>
        <Grid row gap="20px">
          <Grid margin=" 0px 30px">
            <AddText>이름</AddText>
            <Input _borderColor="#E1E1E1" />
          </Grid>
          <Grid margin="0px 30px">
            <AddText>연령대</AddText>
            <Input _borderColor="#E1E1E1" />
          </Grid>
          <Grid margin="0px 30px">
            <AddText>닉네임 설정</AddText>
            <Input _borderColor="#E1E1E1" />
          </Grid>
          <Grid margin="0px 25px">
            <AddText>성별</AddText>
            <Grid row gap="17px" justify="center">
              {Gender.map((gender, idx) => {
                return (
                  <Button
                    key={idx}
                    BtnAdd
                    state={selectgender === idx ? false : 'active'}
                    _onClick={() => {
                      setSelectgender(idx);
                    }}
                    width="149px"
                  >
                    {gender}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          _onClick={() => {
            setAddress(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};
const AddText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 7px 0px;
`;

export default AddInfo;
