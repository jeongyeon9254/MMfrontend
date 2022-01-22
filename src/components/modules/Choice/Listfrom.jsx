import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Tag } from '../../element';
import { useSelector } from 'react-redux';
import { Skeleton } from './index';

const Listfrom = props => {
  const { OnClick } = props;
  const { partnerNick, partnerMbti, partnerImg, roomId, partnerIntro, date } = props.data;
  const Loading = useSelector(state => state.matching.loading);
  if (Loading) {
    return (
      <Grid list _onClick={OnClick} Btop="0px" gap="11px">
        <Image src={partnerImg} round mbti={partnerMbti} width="50px" margin="0px" />
        <Grid gap="12px" width="80%">
          <Grid row align="center" gap="6px">
            <Name>{partnerNick}</Name>{' '}
            <Tag mbti={partnerMbti} _type="black">
              {partnerMbti}
            </Tag>
            <Date>{date}</Date>
          </Grid>
          <div>
            <Text>{partnerIntro}</Text>
            {partnerIntro ? partnerIntro.length >= 30 ? <Dot>...</Dot> : '' : ''}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Skeleton type="List"></Skeleton>
        <Skeleton type="List"></Skeleton>
        <Skeleton type="List"></Skeleton>
      </>
    );
  }
};
const Date = styled.div`
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
