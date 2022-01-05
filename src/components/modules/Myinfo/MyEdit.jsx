import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Input, Grid, Button } from '../../element';
import { MyPartBox, Mymbtibtn, Myinterests, MyBottom } from './index';
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

  const SetEmit = e => {
    SetMbti(e);
  };

  const Haddit = e => {
    SetInt(e);
  };

  const map = Int.map(x => {
    return { interest: x };
  });

  const AddInfo = {
    nickname: nickname,
    profileImage: userInfo.profileImage,
    gender: userInfo.gender,
    ageRange: userInfo.ageRange,
    intro: textarea,
    location: userInfo.location,
    mbti: Mbti,
    interestList: map,
  };

  const ClickEvent = () => {
    dispatch(userAction.userInfoPut(AddInfo));
  };
  return (
    <Body className={Open ? 'Open' : 'Close'}>
      {' '}
      <Header point="relative" _on={_onClick}>
        내 정보 수정하기
      </Header>
      <Grid padding="20px 30px" gap="20px">
        <MyPartBox title="나의 이름">
          <Input
            _borderColor="#ECECEC"
            _bg="#ECECEC"
            _padding="8px 14px"
            _value={nickname}
            _onChange={e => {
              if (e.target.value.length <= 4) {
                setNickname(e.target.value);
              } else {
                alert('4자 이하로 부탁드립니다.');
              }
            }}
          />
        </MyPartBox>
        <MyPartBox title="나의 MBTI">
          <Mymbtibtn mbti={userInfo.mbti} Emit={SetEmit}></Mymbtibtn>
        </MyPartBox>
        <MyPartBox title="관심사 설정">
          <Myinterests Emit={Haddit}></Myinterests>
        </MyPartBox>
        <MyPartBox title="한줄 소개">
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
      <MyBottom _onClick={ClickEvent}>내 정보 수정하기</MyBottom>
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
    padding: 2px;
  }
  &.Open {
    opacity: 1;
    left: 0px;
  }
`;
export default MyEdit;
