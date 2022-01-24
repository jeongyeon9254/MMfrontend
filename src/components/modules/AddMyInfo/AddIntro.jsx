import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import Header from '../layout/Header';
import { Grid, Input, Button } from '../../element/index';
import Alert from '../../element/Alert';
import TutorialBox from '../Tutorial/TutorialBox';

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../../../redux/modules/user';
import imageCompression from 'browser-image-compression';
import { history } from '../../../redux/configureStore';

const AddIntro = props => {
  const dispatch = useDispatch();

  const { file, data, mbti, duplicated, show, Control } = props;

  const [comment, setComment] = useState('');

  // 모달창
  const [Alt, setAlt] = useState(false);
  const [Limit, setLimit] = useState(false);
  const [Guide, setGuide] = useState(false);

  const location = data.LO;
  const locDetail = data.De;
  const longitude = data.X;
  const latitude = data.Y;
  const fulladress = data.Full;

  const userInfo = {
    nickname: file.nickname,
    gender: file.gender,
    ageRange: file.ageRange,
    intro: comment,
    location: location,
    locDetail: locDetail,
    mbti: mbti,
    interestList: duplicated,
    longitude: longitude,
    latitude: latitude,
    locFull: fulladress,
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
    const emptyFile = new File([''], 'empty');

    const formData = new FormData();
    const Check = isString(file.profileImage);
    formData.append('multipartFile', Check ? emptyFile : file.profileImage);
    formData.append('data', jsonFile(userInfo));
    dispatch(userAction.userInfoPut(formData));
  };

  const MaxIntro = e => {
    if (e.target.value.length >= 100) {
      e.target.value = e.target.value.substr(0, 100);
      setLimit(true);
    } else {
      setLimit(false);
    }
  };

  // 확인시 버튼 함수
  const next = () => {
    ClickEvent();
    history.push('/Guide');

    setGuide(true);
  };
  // 취소 시 버튼 함수
  const exit = () => {
    setAlt(false);
  };

  return (
    <ShowPage className={show ? 'open' : ''}>
      <Header Page point="relative" zIndex="0" _onClick={Control}>
        한줄 소개 작성하기
      </Header>
      {Alt ? (
        <Alert MyBit isButton yes={next} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <AltTitle>추가입력 작성을 완료할까요?</AltTitle>
            <Grid gap="4px">
              <AltCommet>확인 시 메인화면으로 이동합니다.</AltCommet>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      {Guide ? <TutorialBox /> : null}

      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <IntroTitle>
            <span style={{ fontWeight: '700' }}>한줄 소개</span>를 작성해주세요!
          </IntroTitle>
          <Grid gap="5px">
            <IntroCommet>다른 사람들에게 저를 소개해보아요! </IntroCommet>
          </Grid>
        </Grid>
      </Grid>
      <Grid row gap="8px" padding="48px 31px 0px 28px">
        {Limit ? <CheckTxt>100자 이내로만 작성가능합니다!</CheckTxt> : null}
        <Input
          _onInput={MaxIntro}
          _type="textarea"
          _size="14px"
          _onChange={e => {
            setComment(e.target.value);
          }}
        ></Input>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          state={comment !== '' ? 'false' : 'Inactive'}
          width="315px"
          BtnBottom
          _onClick={() => {
            setAlt(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </ShowPage>
  );
};

const IntroTitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const IntroCommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;
const AltTitle = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.base};
`;

const AltCommet = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

const ShowPage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: -100%;
  top: 0px;
  transition: all ease 0.3s;
  z-index: 10;
  background-color: #fff;
  &.open {
    left: 0px;
  }
`;

const CheckTxt = styled.p`
  position: absolute;
  left: 35px;
  top: 27px;
  font-size: 12px;
  color: #d41321;
`;

export default AddIntro;
