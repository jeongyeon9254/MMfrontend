import React, { useState, useRef } from 'react';
import Header from '../layout/Header';
import { Image, Grid, Input, Button, Select, Alert } from '../../element/index';
import AddAdress from './AddAdress';
import styled from 'styled-components';
import { Gender, Area } from './needData.js';
import { history } from '../../../redux/configureStore';
import { delCookie } from '../../../shared/Cookie';

const AddInfo = props => {
  const [Open, setOpen] = useState(false);
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  // 데이터
  const [nickname, setnickname] = useState(data.nickname);
  const [isarea, setArea] = useState(data.ageRange);
  const [gender, setgender] = useState(data.gender);
  const [profileImage, setProfileImage] = useState(data.profileImage);
  const [Preview, setPreview] = useState(data.profileImage);

  const file = {
    nickname: nickname,
    gender: gender,
    profileImage: profileImage,
    ageRange: isarea,
  };
  // 모달창
  const [Alt, setAlt] = useState(false);
  const fileRef = useRef();

  const MaxNickname = e => {
    if (e.target.value.length >= 4) {
      e.target.value = e.target.value.substr(0, 4);
      setAlt(true);
    }
    if (e.target.value.length < 4) {
      setAlt(false);
    }
  };

  const handleFileOnChange = e => {
    //파일 불러오기
    e.preventDefault();
    const file = e.target.files[0];
    // 파일이 프론트파일에 저장된 url를 읽어 오는 매소드
    const reader = new FileReader();
    // 파일를 datafrom으로 저장할 수 있는 매소드
    // 파이를 fromData에 img라는 key 값으로 저장한다.
    const arrfile = [file];

    setProfileImage(file);
    // 파일를 저장된 위치를 찾는다.
    reader.readAsDataURL(file);
    // 파일이 읽어 오면 useState에 저장한다.
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleFileUploadClick = e => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };
  const GetArea = area => {
    setArea(area.area);
  };

  const PageControl = () => {
    setOpen(!Open);
  };
  React.useEffect(() => {
    // if (data.signStatus) {
    //   history.push('/');
    // }
  }, []);
  return (
    <Body>
      <AddAdress file={file} Control={PageControl} Show={Open} />
      <Grid>
        <Header
          Page
          point="relative"
          zIndex="0"
          _onClick={() => {
            history.push('/login');
            delCookie('authorization');
            localStorage.clear();
          }}
        >
          추가정보 입력하기
        </Header>
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
            {Alt ? <CheckTxt>닉네임은 4자이내로만 작성가능합니다. </CheckTxt> : null}
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
            {data.ageRange !== '' ? (
              <Input _value={data.ageRange} _readOnly _borderColor="#E1E1E1" />
            ) : (
              <Select Data={Area} Emit={GetArea} Area height="182px" />
            )}
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
      <BtnBox>
        <Button
          state={nickname !== '' && gender !== '' ? false : 'Inactive'}
          width="315px"
          position="absolute"
          BtnBottom
          _onClick={PageControl}
        >
          다음으로
        </Button>
      </BtnBox>
    </Body>
  );
};

const Body = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`;
const AddText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0px 0px 7px 0px;
`;
const BtnBox = styled.div`
  padding: 0px 9%;
`;

const CheckTxt = styled.p`
  position: absolute;
  left: 77px;
  top: 2px;
  font-size: 12px;
  color: #d41321;
`;

export default AddInfo;
