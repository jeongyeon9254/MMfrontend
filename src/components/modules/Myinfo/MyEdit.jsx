import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Input, Grid, Button, Alert } from '../../element';
import { MyPartBox, Mymbtibtn, Myinterests, MyBottom, MyImgFile } from './index';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../../../redux/modules/user';
import KakaoAddr from '../AddMyInfo/KakaoAddress';
import imageCompression from 'browser-image-compression';

function MyEdit(props) {
  const dispatch = useDispatch();
  const { Open, _onClick } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [err, Seterr] = React.useState(false);
  const [limt, Selimt] = React.useState(false);

  const [nickname, setNickname] = React.useState(userInfo.nickname);
  const [textarea, setTextarea] = React.useState(userInfo.intro);
  const [Mbti, SetMbti] = React.useState(userInfo.mbti);
  const [Int, SetInt] = React.useState([]);
  const [Img, SetImg] = React.useState(userInfo.profileImage);

  // 도로명 주소
  const [Kakaoadr, setKakaoadr] = React.useState(false);

  // 도로명 주소 데이터
  const [Full, setFull] = React.useState(userInfo.locFull); // 전체 주소
  const [LO, setLo] = React.useState(userInfo.location); // 시
  const [De, setDe] = React.useState(userInfo.locDetail); // 도
  const [X, setX] = React.useState(userInfo.longitude); // 경도
  const [Y, setY] = React.useState(userInfo.latitude); // 위도
  const [Alt, setAlt] = React.useState(false);

  const SetEmit = item => {
    SetMbti(item);
  };
  const Haddit = item => {
    SetInt(item);
  };
  const ImgCheck = item => {
    SetImg(item);
  };

  const AddInfo = {
    nickname: nickname,
    gender: userInfo.gender,
    ageRange: userInfo.ageRange,
    intro: textarea,
    location: LO,
    locDetail: De,
    longitude: X,
    latitude: Y,
    mbti: Mbti,
    locFull: Full,
    interestList: Int,
  };

  function isString(inputText) {
    if (typeof inputText === 'string' || inputText instanceof String) {
      return true;
    } else {
      return false;
    }
  }

  const ClickEvent = async () => {
    const jsonFile = datas => {
      return new Blob([JSON.stringify(datas)], { type: 'application/json' });
    };
    const formData = new FormData();
    const emptyFile = new File([''], 'empty');
    const Check = isString(Img);
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 370,
    };
    const reSizeFile = await imageCompression(Img, options);
    formData.append('multipartFile', Check ? emptyFile : reSizeFile);
    formData.append('data', jsonFile(AddInfo));
    dispatch(userAction.userInfoPut(formData));
  };

  const next = () => {
    ClickEvent();
  };

  const exit = () => {
    setAlt(false);
  };

  return (
    <Body className={Open ? 'Open' : 'Close'}>
      {Alt ? (
        <Alert MyBit isButton yes={next} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>내정보 수정을 완료할까요?</Title>
            <Grid gap="4px">
              <Commet>확인 시 메인화면으로 이동합니다.</Commet>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Header point="relative" Page _onClick={_onClick}>
        내 정보 수정하기
      </Header>
      <ScrollContainer>
        <Grid gap="20px">
          <MyImgFile Img={Img} mbti={userInfo.mbti} Emit={ImgCheck}></MyImgFile>
          <MyPartBox title="나의 이름" num={nickname.length} err={err} max="4" input>
            <Input
              _borderColor="#ECECEC"
              _bg="#ECECEC"
              _padding="8px 14px"
              _value={nickname}
              _onChange={e => {
                if (e.target.value.length <= 4) {
                  setNickname(e.target.value);
                } else {
                  Seterr(true);
                }
              }}
            />
          </MyPartBox>
          <MyPartBox title="나의 주소">
            <Grid wrap="nowrap" row gap="10px" align="flex-end">
              <Input _value={Full || ''} _readOnly _borderColor="#E1E1E1" />
              <Grid width="150px">
                <Button
                  BtnAdd
                  _onClick={() => {
                    setKakaoadr(true);
                  }}
                >
                  주소 찾기
                </Button>
              </Grid>
            </Grid>
            {Kakaoadr ? (
              <KakaoAdrBox>
                <KakaoAddr
                  setFull={setFull}
                  setLo={setLo}
                  setDe={setDe}
                  setX={setX}
                  setY={setY}
                  setKakaoadr={setKakaoadr}
                />
              </KakaoAdrBox>
            ) : null}
          </MyPartBox>
          <MyPartBox title="나의 MBTI">
            <Mymbtibtn mbti={userInfo.mbti} Emit={SetEmit}></Mymbtibtn>
          </MyPartBox>
          <MyPartBox title="관심사 설정">
            <Myinterests Emit={Haddit}></Myinterests>
          </MyPartBox>
          <MyPartBox title="한줄 소개" num={textarea.length} max="100" input err={limt}>
            <Input
              _type="textarea"
              _value={textarea}
              _onChange={e => {
                if (e.target.value.length <= 100) {
                  setTextarea(e.target.value);
                } else {
                  Selimt(true);
                }
              }}
            />
          </MyPartBox>
          <MyBottom
            _onClick={() => {
              setAlt(true);
            }}
          >
            수정 완료하기
          </MyBottom>
        </Grid>
      </ScrollContainer>
    </Body>
  );
}
const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: -100%;
  top: 0px;
  z-index: 999;
  opacity: 0;
  transition: all ease 0.3s;
  .swiper-container {
    padding: 0px 0px 6px;
  }
  &.Open {
    opacity: 1;
    left: 0px;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  height: 86%;
  padding: 18px 23px 18px 30px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: none;
    height: 8px;
    background-color: #999;
  }
  ::-webkit-scrollbar-corner {
    background-color: #fff;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxl};
`;

const Commet = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`;

const KakaoAdrBox = styled.div`
  position: absolute;
  left: 0px;
  top: 85px;
  z-index: 100;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`;
export default MyEdit;
