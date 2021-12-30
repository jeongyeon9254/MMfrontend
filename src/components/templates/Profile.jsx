import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import icon_location from '../../img/Icon/icon_location.svg';

// component
import { Button, Image, Grid, Box, Tag } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

const Profile = props => {
  return (
    <ProfileStyle>
      <Header>프로필</Header>
      <Grid margin="30px 0 0 0">
        <Image
          round
          width="50%"
          src="https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png"
        ></Image>
        <div className="mbti">
          <Image round></Image>
        </div>
      </Grid>
      <p className="name">홍길동</p>
      <Grid justify="center" width="45px" margin="15px auto">
        <Tag mbti="INFJ" _type="black" size="14px">
          INFJ
        </Tag>
      </Grid>
      <Grid row width="auto" justify="center" gap="5px">
        <img className="icon" alt="주소" src={icon_location}></img>
        <p className="location">서울특별시 강서구</p>
      </Grid>
      <Grid row width="auto" justify="center" gap="10px" margin="14px 0 0 0 ">
        <Tag mbti="INFJ">운동</Tag>
        <Tag mbti="INFJ">공부</Tag>
        <Tag mbti="INFJ">제테크</Tag>
      </Grid>
      <Box profile margin="25px 0 0 0">
        안녕하세요 같이 재밌게 시간보낼 친구 찾습니다~
      </Box>
      <Button BtnBottom width="90%">
        매칭신청
      </Button>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  padding: 20px;
  .name {
    margin-top: 28px;
    font-size: ${props => props.theme.fontSizes.xxxl};
    text-align: center;
    font-weight: 700;
    color: ${props => props.theme.colors.gray_2};
  }
  .mbti {
    position: absolute;
    width: 20%;
    bottom: -10%;
    left: 60%;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .icon {
    width: 18px;
  }
  .location {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.small};
    color: #9b9b9b;
    line-height: 1.3;
  }
`;

export default Profile;
