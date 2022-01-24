import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../element/index.js';

const StartAlert = () => {
  return (
    <>
      <Grid padding="3px" align="center">
        <Title>Biz Chemy에 오신걸 환영해요!!</Title>
        <Content>
          새로 가입하신 분들을 위한 <Point>Biz Chemy 이용가이드</Point>를 제공하고 있어요.
        </Content>
        <br />
        <Content>
          확인 시 <Point>Biz Chemy 이용가이드</Point>로 이동합니다.
        </Content>
      </Grid>
    </>
  );
};

const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
  line-height: 3;
`;
const Content = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  word-break: keep-all;
`;

const Point = styled.span`
  font-weight: 800;
`;

export default StartAlert;
