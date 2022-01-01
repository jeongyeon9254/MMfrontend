import React from 'react';
import { Grid, Image, Tag } from '../../element/index';
import styled from 'styled-components';

const PostCard = () => {
  return (
    <>
      <Grid borderTop="1px solid #E8E8E8" row wrap="nowrap" padding="18px 0px 0px 0px">
        <Grid row wrap="nowrap" align="center">
          <Grid row align="center">
            <Image photoRound width="50px" />
          </Grid>
          <Grid gap="7px">
            <NameText>홍길동</NameText>
            <TimeText>3일전</TimeText>
          </Grid>
        </Grid>
        <Grid>
          <Tag mbti="INTJ" _type="black" icon>
            INTJ
          </Tag>
        </Grid>
        <Grid>
          <p></p>
        </Grid>
      </Grid>
    </>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.xl};
`;

const TimeText = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.base};
  color: #9b9b9b;
`;

export default PostCard;
