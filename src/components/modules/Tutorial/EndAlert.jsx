import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../element/index.js';

const EndAlert = () => {
  return (
    <Grid align="center">
      <Title>Biz Chemy 이용 가이드를 종료할까요?</Title>
      <Content>확인 시 메인메뉴로 이동합니다.</Content>
    </Grid>
  );
};

const Title = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 3;
`;
const Content = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
`;

export default EndAlert;
