import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';

function MyPartBox(props) {
  const { children, title } = props;
  return (
    <Grid gap="11px">
      <SubTxt>{title}</SubTxt>
      {children}
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
export default MyPartBox;
