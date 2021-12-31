import React from 'react';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
import { Announcement } from '../modules/Chat';
import Bit from '../modules/Bit';
import { Grid, Image } from '../element';
import icon_location_w from '../../img/Icon/icon_location_w.svg';

const Myinfo = () => {
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  const location = '성동구';
  const mbti = 'ENTJ';
  const MyBit = Bit.find(x => {
    return x.name === mbti;
  });
  console.log(Info);
  return (
    <div>
      <Header bg="transparent" white>
        내 정보
      </Header>
      <NewHeader>
        <Announcement num="0"></Announcement>
        <ImgBit src={MyBit ? MyBit.image : ''} />
        <Point>
          <Grid row gap="23px">
            <Image round src={Info.profileImage} mbti={mbti} width="140px" margin="0" />
            <Grid width="auto" gap="13px" padding="21px 0px">
              <Mename>{Info.nickname}</Mename>
              <Local>
                <Grid row gap="6px">
                  <img src={icon_location_w} alt="" /> <span>{location}</span>
                </Grid>
              </Local>
            </Grid>
          </Grid>
        </Point>
        <div>
          <div>나의 MBTI</div>
          <div>MBTI</div>
        </div>
        <div>
          <div>나의 관심사</div>
          <div>관심사</div>
        </div>
        <div>
          <div>한줄 소개 </div>
          <div>MBTI</div>
        </div>
      </NewHeader>
    </div>
  );
};

const NewHeader = styled.div`
  background-color: #3f3f41;
  width: 100%;
  height: 330px;
  border-radius: 0px 0px 50px 0px;
  position: fixed;
  left: 0px;
  top: 0px;
  padding-top: 23%;
`;
const ImgBit = styled.img`
  position: absolute;
  right: -14%;
  top: -27%;
  opacity: 0.2;
  width: 285px;
`;
const Point = styled.div`
  position: absolute;
  left: 50%;
  bottom: -10%;
  width: 100%;
  transform: translateX(-50%);
  padding: 0px 30px;
`;

const Mename = styled.h2`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
`;

const Local = styled.div`
  font-size: 14px;
  color: #e0e0e0;
`;
export default Myinfo;
