import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../element/index.js';

const StartAlert = () => {
  return (
    <>
      <Grid padding="3px" align="center">
        <Title>환영합니다! </Title>
        <Content>Biz chemy 튜토리얼를 이용하실래요?</Content>
      </Grid>
    </>
  );
};

const Title = styled.p`
  font-size: 25px;
  font-weight: 800;
  margin: 20px 0px;
`;
const Content = styled.p`
  font-size: 15px;
  word-break: keep-all;
  margin: 5px 0px;
`;

export default StartAlert;
