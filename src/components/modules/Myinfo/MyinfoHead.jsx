import React from 'react';
import styled from 'styled-components';
import Bit from '../Bit';
import { Grid, Image } from '../../element';
import { Announcement } from '../Chat';
import icon_location_w from '../../../img/Icon/icon_location_w.svg';
import edit from '../../../img/Icon/edit.svg';

function MyinfoHead(props) {
  const { OnEvent } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const MyBit = Bit.find(x => {
    return x.name === userInfo.mbti;
  });

  return (
    <NewHeader>
      <Announcement bg="#fff" fontcolor="#000" ws></Announcement>
      <ImgBit src={MyBit ? MyBit.image : ''} />
      <Point>
        <Grid row gap="23px">
          <Image round src={userInfo.profileImage} mbti={userInfo.mbti} width="140px" margin="0" />
          <Grid width="auto" gap="13px" padding="21px 0px">
            <Grid row gap="6px" align="center">
              <Mename>{userInfo.nickname}</Mename>
              <ImgIcon onClick={OnEvent} src={edit} alt="edit" />
            </Grid>
            <Local>
              <Grid row gap="6px" align="center">

                <img src={icon_location_w} alt="" />{' '}
                {userInfo ? (
                  <span>
                    {userInfo.location} {userInfo.locDetail}{' '}
                  </span>
                ) : (
                  ''
                )}
              </Grid>
            </Local>
          </Grid>
        </Grid>
      </Point>
    </NewHeader>
  );
}
const NewHeader = styled.div`
  background-color: #3f3f41;
  width: 100%;
  height: 300px;
  border-radius: 0px 0px 50px 0px;
  position: fixed;
  left: 0px;
  top: 0px;
  padding-top: 20%;
`;
const ImgIcon = styled.img`
  cursor: pointer;
  width: 24px;
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
  bottom: -7%;
  width: 100%;
  transform: translateX(-50%);
  padding: 0px 28px;
`;

const Mename = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

const Local = styled.div`
  font-size: 14px;
  color: #e0e0e0;
`;

export default MyinfoHead;
