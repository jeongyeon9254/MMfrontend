import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';

function MyPartBox(props) {
  const { children, title, max, num, input } = props;
  return (
    <Grid gap="9px">
      <SubTxt>{title}</SubTxt>
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
export default MyPartBox;
