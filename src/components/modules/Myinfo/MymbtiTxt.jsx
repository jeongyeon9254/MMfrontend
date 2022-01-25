import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import { useSelector } from 'react-redux';
function MymbtiTxt(props) {
  const mbti = useSelector(state => state.user.mbti);

  return (
    <Scroll>
      <Grid gap="35px">
        <Grid gap="11px">
          <ContentsTi>{mbti.firstTitle}</ContentsTi>
          <ContentTxt>{mbti.firstContent}</ContentTxt>
        </Grid>
        <Grid gap="11px">
          <ContentsTi>{mbti.secondTitle}</ContentsTi>
          <ContentTxt>{mbti.secondContent}</ContentTxt>
        </Grid>
      </Grid>
    </Scroll>
  );
}
const ContentsTi = styled.h4`
  font-size: ${x => x.theme.fontSizes.small};
  word-break: break-all;
`;
const ContentTxt = styled.p`
  line-height: 1.4;
  font-size: ${x => x.theme.fontSizes.maxSmall};
  word-break: break-all;
`;

const Scroll = styled.div`
  height: 312px;
  width: 100%;
  overflow-y: scroll;
`;
export default MymbtiTxt;
