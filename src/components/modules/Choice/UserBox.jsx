import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Box, Grid, Image, Tag } from '../../element';
import fmd_good from '../../../img/Icon/fmd_good.svg';
import Bit from '../Bit';

function UserBox(props) {
  const { ageRange, gender, interestList, intro, location, mbti, nickname, profileImage, userId } =
    props.data;
  const myMbti = Bit
    ? Bit.find(x => {
        return x.name === mbti;
      })
    : '';
  return (
    <Box black>
      <Grid gap="19px">
        <Grid row gap="14px">
          <Image
            round
            src={profileImage}
            mbti={mbti}
            _border="1px solid #555"
            width="60px"
            margin="0px"
          />
          <Grid width="72.5%" gap="7px">
            <Grid row gap="7px">
              <Name>{nickname}</Name>
              <Grid align="center" width="auto" row gap="2px">
                <img src={fmd_good} alt={location} />
                <Date>{location}</Date>
              </Grid>
              <Grid row gap="7px">
                <img
                  style={{ width: '16px', height: '16px' }}
                  src={myMbti.image}
                  alt={myMbti.name}
                />
                <p>{myMbti.title}</p>
                <p style={{ color: myMbti.color }}>{myMbti.name}</p>
              </Grid>
              <Grid row gap="4.5px">
                {interestList.map((x, idx) => {
                  return (
                    <Tag mbti={myMbti.name} key={idx} padding="3px 15px">
                      {x.interest}
                    </Tag>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box padding="5px 12px" fontColor="#000" fontSize="12px">
          {intro}
        </Box>
      </Grid>
    </Box>
  );
}
const Date = styled.p`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: #8a8a8a;
`;
const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
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
const Tx = styled.p`
  font-size: 14px;
`;
export default UserBox;
