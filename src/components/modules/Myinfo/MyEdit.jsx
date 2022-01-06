import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Input, Grid, Button, Image } from '../../element';
import { MyPartBox, Mymbtibtn, Myinterests, MyBottom, MyLocation, MyImgFile } from './index';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../../../redux/modules/user';
function MyEdit(props) {
  const dispatch = useDispatch();
  const { Open, _onClick } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [nickname, setNickname] = React.useState(userInfo.nickname);
  const [textarea, setTextarea] = React.useState(userInfo.intro);
  const [Mbti, SetMbti] = React.useState(userInfo.mbti);
  const [Int, SetInt] = React.useState([]);
  const [Img, SetImg] = React.useState(userInfo.profileImage);
  const [Location, SetLocation] = React.useState(userInfo.location);

  const SetEmit = item => {
    SetMbti(item);
  };

  const Haddit = item => {
    console.log(item);
    SetInt(item);
  };
  const ImgCheck = item => {
    console.log(item);
    SetImg(item);
  };
  const ActiveLocal = item => {
    SetLocation(item);
    console.log(Location);
  };

  const map = Int.map(x => {
    return { interest: x };
  });

  console.log(Img);

  const AddInfo = {
    nickname: nickname,
    gender: userInfo.gender,
    ageRange: userInfo.ageRange,
    intro: textarea,
    location: Location.location,
    mbti: Mbti,
    interestList: map,
  };
  function isString(inputText) {
    if (typeof inputText === 'string' || inputText instanceof String) {
      return true;
    } else {
      return false;
    }
  }

  const ClickEvent = () => {
    console.log(AddInfo);
    const jsonFile = datas => {
      return new Blob([JSON.stringify(datas)], { type: 'application/json' });
    };
    const formData = new FormData();
    const emptyFile = new File([''], 'empty');
    const Check = isString(Img);
    console.log(`${Check} : ${Img} 는 ${typeof Img}`);
    formData.append('multipartFile', Check ? emptyFile : Img);
    formData.append('data', jsonFile(AddInfo));
    for (let value of formData.values()) {
      console.log(value);
    }
    dispatch(userAction.userInfoPut(formData));
  };
  return (
    <Body className={Open ? 'Open' : 'Close'}>
      {' '}
      <Header point="relative" Page _onClick={_onClick}>
        내 정보 수정하기
      </Header>
      <Grid padding="18px 30px" gap="20px">
        <MyImgFile Img={Img} mbti={userInfo.mbti} Emit={ImgCheck}></MyImgFile>
        <MyPartBox title="나의 이름" num={nickname.length} max="7" input>
          <Input
            _borderColor="#ECECEC"
            _bg="#ECECEC"
            _padding="8px 14px"
            _value={nickname}
            _onChange={e => {
              if (e.target.value.length <= 7) {
                setNickname(e.target.value);
              } else {
                alert('4자 이하로 부탁드립니다.');
              }
            }}
          />
        </MyPartBox>
        <MyPartBox title="나의 주소">
          <MyLocation Location={Location} Emit={ActiveLocal}></MyLocation>
        </MyPartBox>
        <MyPartBox title="나의 MBTI">
          <Mymbtibtn mbti={userInfo.mbti} Emit={SetEmit}></Mymbtibtn>
        </MyPartBox>
        <MyPartBox title="관심사 설정">
          <Myinterests Emit={Haddit}></Myinterests>
        </MyPartBox>
        <MyPartBox title="한줄 소개" num={textarea.length} max="100" input>
          <Input
            _type="textarea"
            _value={textarea}
            _onChange={e => {
              if (e.target.value.length <= 100) {
                setTextarea(e.target.value);
              } else {
                alert('100자 이하로 부탁드립니다.');
              }
            }}
          />
        </MyPartBox>
      </Grid>
      <MyBottom _onClick={ClickEvent}>수정 완료하기</MyBottom>
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
export default MyEdit;
