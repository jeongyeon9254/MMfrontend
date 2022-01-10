import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
=======

>>>>>>> main
import Header from '../layout/Header';
import { Image, Grid, Input, Button, Select, Alert } from '../../element/index';
import AddAdress from './AddAdress';
import styled from 'styled-components';
import { Gender, Area } from './needData.js';
<<<<<<< HEAD
import { history } from '../../../redux/configureStore';
import { delCookie } from '../../../shared/Cookie';
=======
import { actionCreators as modalActions } from '../../../redux/modules/modal';
>>>>>>> main

const AddInfo = props => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  const [Open, setOpen] = useState(false);
=======
  const YesAlert = useSelector(state => state.modal.Alert);

  const [Address, setAddress] = useState(false);
>>>>>>> main
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  //닉네임{nickname} 연령대(ageRange)  성별(male)
  const [nickname, setnickname] = useState(data.nickname);
  const [isarea, setArea] = useState(data.ageRange);
  const [gender, setgender] = useState(data.gender);
  const [profileImage, setProfileImage] = useState(data.profileImage);
  const [Preview, setPreview] = useState(data.profileImage);
  const fileRef = useRef();

<<<<<<< HEAD
  React.useEffect(() => {
    // if (data.signStatus) {
    //   history.push('/');
    // }
  });
  const file = {
    nickname: nickname,
    gender: gender,
    profileImage: profileImage,
    ageRange: isarea,
  };
=======
  console.log(typeof profileImage);

  if (Address === true) {
    const file = {
      nickname: nickname,
      gender: gender,
      profileImage: profileImage,
      ageRange: isarea,
    };
    return (
      <>
        <AddAdress file={file} AddAdress={AddAdress} />
      </>
    );
  }
>>>>>>> main

  const MaxNickname = e => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.substr(0, 4);
      dispatch(modalActions.setAlert());
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
<<<<<<< HEAD
    setArea(area.area);
  };
  const PageControl = () => {
    setOpen(!Open);
=======
    setArea(area);
    console.log(area);
  };

  const exit = () => {
    dispatch(modalActions.ExitAlert());
>>>>>>> main
  };

  return (
    <Body>
<<<<<<< HEAD
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
=======
      <Grid>
        <Header>추가정보 입력하기</Header>
        {YesAlert ? (
          <Alert check yes={exit}>
            <Grid gap="15px" padding="16px 8px 8px 24px">
              <Title>닉네임은 4자이내로 작성해주세요</Title>
            </Grid>
          </Alert>
        ) : null}
>>>>>>> main
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
<<<<<<< HEAD
          _onClick={PageControl}
=======
          _onClick={() => {
            setAddress(true);
          }}
>>>>>>> main
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
<<<<<<< HEAD
const BtnBox = styled.div`
  padding: 0px 9%;
=======
const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const Content = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
>>>>>>> main
`;

export default AddInfo;
