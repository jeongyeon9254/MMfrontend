import React, { useState } from 'react';
import Header from './layout/Header';
import Bit from './Bit';
import { Grid, Tag } from '../element/index';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddMBTI = () => {
  const CheckMBTI = () => {
    window.location.href = 'https://www.16personalities.com/ko/';
  };

  return (
    <>
      <Header>MBTI 입력하기</Header>
      <Grid gap="10px" margin="0px 0px 0px 30px">
        <MBTITitle>
          <span style={{ fontWeight: '700' }}>나의 MBTI</span>를 선택 해주세요!
        </MBTITitle>
        <Grid gap="5px">
          <MBTICommet>만약 내 MBTI가 어떤건지 모른다면? </MBTICommet>

          <MBTICommet>MBTI 확인 하러가기 </MBTICommet>
        </Grid>
      </Grid>
      <Grid row gap="20px">
        {Bit.map((x, idx) => {
          return (
            <Tag small _type="Btn" key={idx} _src={x.image} color={x.color}>
              {x.name}
            </Tag>
          );
        })}
      </Grid>
    </>
  );
};

const MBTITitle = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const MBTICommet = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

export default AddMBTI;
