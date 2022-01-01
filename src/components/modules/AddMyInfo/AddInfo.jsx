import React, { useState } from 'react';
import Header from '../layout/Header';
import { Image, Grid, Input, Button } from '../../element/index';
import AddAdress from './AddAdress';
import icon_photo from '../../../img/Icon/icon_photo.svg';
import styled from 'styled-components';

const AddInfo = props => {
  const [Address, setAddress] = useState(false);
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);
  console.log(data);

  //닉네임{nickname} 연령대(ageRange)  성별(male)
  const [nickname, setnickname] = useState(data.nickname);
  const [gender, setgender] = useState(data.gender);
  const [profileImage, setProfileImage] = useState(data.profileImage);

  if (Address === true) {
    const file = {
      nickname: nickname,
      gender: gender,
      profileImage: profileImage,
      ageRange: data.ageRange,
    };
    return (
      <>
        <AddAdress file={file} />
      </>
    );
  }

  const Gender = [
    { en: 'male', ko: '남자' },
    { en: 'female', ko: '여자' },
  ];
  return (
    <>
      <Grid>
        <Header>추가정보 입력하기</Header>
        <Grid margin="47px 0px 17px 0px">
          <Image src={data.profileImage} photoRound width="188px" height="188px"></Image>
        </Grid>
        <Grid row gap="20px">
          <Grid margin="0px 30px">
            <AddText>닉네임 설정</AddText>
            <Input
              _value={nickname}
              _onChange={e => {
                setnickname(e.target.value);
              }}
              _borderColor="#E1E1E1"
            />
          </Grid>
          <Grid margin="0px 30px">
            <AddText>연령대</AddText>
            <Input _value={data.ageRange} _readOnly _borderColor="#E1E1E1" />
          </Grid>
          <Grid margin="0px 25px">
            <AddText>성별</AddText>
            <Grid row gap="17px" justify="center">
              {Gender.map((x, idx) => {
                return (
                  <Button
                    key={idx}
                    BtnAdd
                    state={gender !== '' ? (gender === x.en ? false : 'active') : 'active'}
                    _disabled={gender !== '' ? true : false}
                    _onClick={() => {
                      setgender(x.en);
                    }}
                    width="149px"
                  >
                    {x.ko}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          state={nickname !== '' && gender !== '' ? false : 'Inactive'}
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
