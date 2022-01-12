import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Tag } from '../../element';

const Listfrom = props => {
  const { OnClick } = props;
  const { nickname, mbti, profileImg, roomId, intro, date } = props.data;

  return (
    <Grid list _onClick={OnClick} Btop="0px" gap="11px">
      <Image src={profileImg} round mbti={mbti} width="50px" margin="0px" />
      <Grid gap="12px" width="80%">
        <Grid row align="center" gap="6px">
          <Name>{nickname}</Name>{' '}
          <Tag mbti={mbti} _type="black">
            {mbti}
          </Tag>
          <Date>{date}</Date>
        </Grid>
        <div>
          <Text>{intro}</Text>
          {intro ? intro.length >= 30 ? <Dot>...</Dot> : '' : ''}
        </div>
      </Grid>
    </Grid>
  );
};
const Date = styled.p`
  margin: 0px 0px 0px auto;
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: #8a8a8a;
`;
const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: bold;
`;
const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.maxSmall};
  color: ${props => props.theme.colors.gray_2};
  height: ${props => props.theme.fontSizes.maxSmall};
  overflow: hidden;
  word-break: keep-all;
  word-wrap: break-word;
`;
const Dot = styled.div`
  height: 10px;
`;
export default Listfrom;
