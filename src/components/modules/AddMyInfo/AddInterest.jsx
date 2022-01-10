import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Button, Alert } from '../../element/index';
import AddIntro from './AddIntro';
import AddMBTI from './AddMBTI';
import { actionCreators as modalActions } from '../../../redux/modules/modal';
import { useSelector, useDispatch } from 'react-redux';

const AddInterest = props => {
  const dispatch = useDispatch();

  const { file, local, mbti } = props;
  const InterestList = ['운동', '공부', '대화', '게임', '기타', '재테크'];

  const YesAlert = useSelector(state => state.modal.Alert);

  const [Intro, setIntro] = useState(false);
  const [BackMBTI, setBackMBTI] = useState(false);
  const [duplicated, setDuplicated] = useState([]);
  if (Intro === true) {
    return (
      <>
        <AddIntro file={file} local={local} mbti={mbti} duplicated={duplicated} />
      </>
    );
  } else if (BackMBTI === true) {
    return (
      <>
        <AddMBTI />
      </>
    );
  }

  const handleDuplicated = e => {
    const val = e.target.name;

    const isIncludes = duplicated.find(el => el === val);

    if (duplicated.length >= 2) {
      dispatch(modalActions.setAlert());
      setDuplicated(duplicated.splice(0, 1));
      return;
    }

    if (isIncludes) {
      setDuplicated(duplicated.filter(el => el !== val));
    } else if (0 < duplicated.length < 3) {
      setDuplicated([...duplicated, val]);
    }
  };

  const exit = () => {
    dispatch(modalActions.ExitAlert());
  };
  return (
    <>
      <Header
        point="absolute"
        _on={() => {
          setBackMBTI(true);
        }}
      >
        관심사 설정하기
      </Header>
      {YesAlert ? (
        <Alert check yes={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>관심사는 최대 2개까지 중복선택이 가능합니다!</Title>
            <Grid gap="4px">
              <Content>다시 선택해주세요.</Content>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <InterestTitle>
            <span style={{ fontWeight: '700' }}>관심사</span>를 선택해주세요!
          </InterestTitle>
          <Grid gap="5px">
            <InterestCommet>관심사는 최대 2개까지 중복선택이 가능합니다! </InterestCommet>
          </Grid>
        </Grid>
        <Grid row gap="8px" margin="48px 0px 0px 0px">
          {InterestList.map((interest, idx) => {
            return (
              <Button
                key={idx}
                name={interest}
                BtnTag
                state={duplicated.find(element => element === interest) ? 'active' : false}
                _onClick={handleDuplicated}
              >
                {interest}
              </Button>
            );
          })}
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          state={duplicated.length === 1 || duplicated.length === 2 ? false : 'Inactive'}
          _onClick={() => {
            setIntro(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};

const InterestTitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const InterestCommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const Content = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export default AddInterest;
