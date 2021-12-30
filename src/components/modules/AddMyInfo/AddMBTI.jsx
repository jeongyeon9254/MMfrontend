import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Tag, Button } from '../../element/index';
import AddInterest from './AddInterest';
import AddAdress from './AddAdress';

const AddMBTI = () => {
  const [seleteInterest, setSeleteInterest] = useState(false);
  const [selected, setSelected] = useState('');
  const [Backaddress, setBackaddress] = useState(false);

  if (seleteInterest === true) {
    return (
      <>
        <AddInterest />
      </>
    );
  } else if (Backaddress === true) {
    return (
      <>
        <AddAdress />
      </>
    );
  }

  const CheckMBTI = () => {
    window.location.href = 'https://www.16personalities.com/ko/';
  };

  return (
    <>
      <Header
        _on={() => {
          setBackaddress(true);
        }}
      >
        MBTI 입력하기
      </Header>
      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <MBTITitle>
            <span style={{ fontWeight: '700' }}>나의 MBTI</span>를 선택해주세요!
          </MBTITitle>
          <Grid gap="5px">
            <MBTICommet>만약 내 MBTI가 어떤건지 모른다면? </MBTICommet>
            <ClickCommet onClick={CheckMBTI}>MBTI 확인 하러가기</ClickCommet>
          </Grid>
        </Grid>
        <Grid row gap="20px" margin="23px 0px 0px 0px">
          {Bit.map((x, idx) => {
            return (
              <Tag
                small
                _type="Btn"
                key={idx}
                _src={x.image}
                color={x.color}
                _onClick={i => {
                  setSelected(idx);
                }}
                state={selected === idx ? 'active' : false}
              >
                {x.name}
              </Tag>
            );
          })}
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          state={selected !== '' ? false : 'Inactive'}
          _onClick={() => {
            setSeleteInterest(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};

const MBTITitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const MBTICommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;
const ClickCommet = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
  text-decoration: underline;
  cursor: pointer;
`;

export default AddMBTI;
