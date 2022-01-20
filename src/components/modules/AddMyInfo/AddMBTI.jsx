import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Tag, Button } from '../../element/index';
import AddInterest from './AddInterest';
import AddAdress from './AddAdress';

const AddMBTI = props => {
  const { file, data, show, Control } = props;

  const [Open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggle = name => {
    if (selected === name) {
      setSelected('');
    } else {
      setSelected(name);
    }
  };

  const PageControl = () => {
    setOpen(!Open);
  };

  const CheckMBTI = () => {
    window.open('https://www.16personalities.com/ko/');
  };

  return (
    <ShowPage className={show ? 'open' : ''}>
      <AddInterest file={file} data={data} mbti={selected} show={Open} Control={PageControl} />
      <Header Page point="relative" zIndex="0" _onClick={Control}>
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
        <Grid row gap="20px" margin="23px 0px 0px 0px" justify="space-between">
          {Bit.map((x, idx) => {
            return (
              <Tag
                small
                _type="Btn"
                key={idx}
                _src={x.image}
                color={x.color}
                _onClick={i => {
                  toggle(x.name);
                }}
                state={selected === x.name ? 'active' : false}
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
          _onClick={PageControl}
        >
          다음으로
        </Button>
      </Grid>
    </ShowPage>
  );
};

const MBTITitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
  color: #3f3f41;
`;

const MBTICommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: #4e4e4e;
`;
const ClickCommet = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
  text-decoration: underline;
  cursor: pointer;
`;
const ShowPage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: -100%;
  top: 0px;
  transition: all ease 0.3s;
  z-index: 99;
  background-color: #fff;
  &.open {
    left: 0px;
  }
`;

export default AddMBTI;
