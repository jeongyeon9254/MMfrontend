import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Input, Button, Select } from '../../element/index';
import Alert from '../../element/Alert';
import AddInterest from './AddInterest';
import { history } from '../../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userAction } from '../../../redux/modules/user';
import { actionCreators as modalActions } from '../../../redux/modules/modal';
import axios from 'axios';
import { getCookie } from '../../../shared/Cookie';

const AddIntro = props => {
  const dispatch = useDispatch();
  const { file, local, mbti, duplicated, show, Control } = props;

  const [comment, setComment] = useState('');

  const YesAlert = useSelector(state => state.modal.Alert);

  const userInfo = {
    nickname: file.nickname,
    gender: file.gender,
    ageRange: file.ageRange,
    intro: comment,
    location: local.location,
    mbti: mbti,
    interestList: duplicated,
  };
  function isString(inputText) {
    if (typeof inputText === 'string' || inputText instanceof String) {
      return true;
    } else {
      return false;
    }
  }
  console.log(userInfo);
  const ClickEvent = () => {
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
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.substr(0, 100);
      alert('100자 이내로 작성부탁드립니다');
    }
  };

  const next = () => {
    ClickEvent();
  };

  const exit = () => {
    dispatch(modalActions.ExitAlert());
  };

  return (
    <ShowPage className={show ? 'open' : ''}>
      <Header Page point="relative" zIndex="0" _onClick={Control}>
        한줄 소개 작성하기
      </Header>
      {YesAlert ? (
        <Alert MyBit isButton yes={next} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <IntroTitle>추가입력 작성을 완료할까요?</IntroTitle>
            <Grid gap="4px">
              <IntroCommet>확인 시 메인하면으로 이동합니다.</IntroCommet>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
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
            dispatch(modalActions.setAlert());
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

export default AddIntro;
