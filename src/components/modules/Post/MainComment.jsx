import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Box, Tag } from '../../element/index';

const MainComment = () => {
  return (
    <>
      <Grid row wrap="nowrap">
        <Grid width="37px" height="37px">
          <Image photoRound></Image>
        </Grid>
        <Grid padding="0px 0px 0px 13px" width="261px">
          <Box comment>
            <Grid align="center" row gap="4px">
              <NameText>윤석준</NameText>
              <Tag mbti="INTJ" _type="black" wrap="nowrap">
                INTJ
              </Tag>
              <TimeText>1시간 전</TimeText>
              안녕하세요 저는 윤석준이라고 합니다
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
const NameText = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.small};
`;

const TimeText = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.base};
  color: #9b9b9b;
  margin: 0px 0px 0px 6px;
`;

export default MainComment;
