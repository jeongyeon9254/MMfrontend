import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';

function MyPartBox(props) {
  const { children, title, max, num, input, err } = props;
  return (
    <Grid gap="9px">
      <Grid row align="center" gap="14px">
        <SubTxt>{title}</SubTxt>
        {err ? <LimitTxt>{max}자 이하로 입력 부탁드립니다.</LimitTxt> : ''}
      </Grid>
      {children}
      {input ? <TextNum>{`${num}/${max}`}</TextNum> : ''}
    </Grid>
  );
}
MyPartBox.defaultProps = {
  title: '타이틀 없어요 ',
};
const SubTxt = styled.h4`
  font-size: 14px;
  font-weight: bold;
`;
const TextNum = styled.p`
  color: #909090;
  font-size: 12px;
  text-align: end;
  position: absolute;
  right: 0px;
  bottom: -14px;
`;

const LimitTxt = styled.div`
  font-size: 10px;
  color: #d41321;
`;
export default MyPartBox;
