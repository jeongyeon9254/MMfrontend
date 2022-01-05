import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../layout/Header';
import { Image, Grid, Input, Button } from '../../element/index';
import AddAdress from './AddAdress';
import icon_photo from '../../../img/Icon/icon_photo.svg';
import styled from 'styled-components';

const AddInfo = props => {
  const dispatch = useDispatch();

  const [Address, setAddress] = useState(false);
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);
  console.log(data);

  //닉네임{nickname} 연령대(ageRange)  성별(male)
  const [nickname, setnickname] = useState(data.nickname);
  const [gender, setgender] = useState(data.gender);
  const [profileImage, setProfileImage] = useState('');
  const [Preview, setPreview] = useState(data.profileImage);
  const fileRef = useRef();

  console.log(profileImage);

  if (Address === true) {
    const file = {
      nickname: nickname,
      gender: gender,
      profileImage: profileImage,
      ageRange: data.ageRange,
    };
    return (
      <>
        <AddAdress file={file} AddAdress={AddAdress} />
      </>
    );
  }
  const Info2 = {
    nickname: '',
    profileImage: 'https://.png',
    gender: gender,
    ageRange: '30대',
    intro: '',
    location: '',
    longitude: '',
    latitude: '',
    mbti: '',
    Interest: '',
    signStatus: false,
  };

  const Gender = [
    { en: 'male', ko: '남자' },
    { en: 'female', ko: '여자' },
  ];

  const MaxNickname = e => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.substr(0, 4);
      alert('4자 이내로 작성부탁드립니다');
    }
  };

  const handleFileOnChange = e => {
    //파일 불러오기
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
      setProfileImage(e.target.files[0]);
    };
  };

  const handleFileUploadClick = e => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  return (
    <Body>
      <Grid>
        <Header>추가정보 입력하기</Header>
        <Grid margin="47px 0px 17px 0px">
          <Image
            src={Preview}
            photoRound
            width="188px"
            height="188px"
            _onClick={handleFileUploadClick}
          ></Image>
          <input
            ref={fileRef}
            hidden={true}
            id="file"
            type="file"
            onChange={handleFileOnChange}
            accept="image/*"
          />
        </Grid>
        <Grid row gap="20px">
          <Grid margin="0px 30px">
            <AddText>닉네임 설정</AddText>
            <Input
              _onInput={MaxNickname}
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
    </Body>
  );
};

const Body = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
`;
const AddText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 7px 0px;
`;

export default AddInfo;
