import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import { Mybit } from '../../modules/Bit';
import { MymbtiTxt } from './index';

function MymbtiInfo(props) {
  const { mbti, Open, _onClick } = props;
  const Myinfo = Mybit(mbti);

  return (
    <ModalBg className={Open ? 'Open' : 'Close'}>
      <Point>
        <ImgPoint src={Myinfo ? Myinfo.image : ''} alt="" />
        <MbtiBox className={Open ? 'Open' : 'Close'}>
          <Grid row gap="35px">
            <Grid width="auto" gap="10px" padding="0px 0px 0px 94px">
              <MbtiTxt>{Myinfo.title}</MbtiTxt>
              <MbtiTxt style={{ color: Myinfo ? Myinfo.color : '' }}>{Myinfo.name}</MbtiTxt>
            </Grid>
            <MymbtiTxt mbti={Myinfo ? Myinfo.name : ''}></MymbtiTxt>
          </Grid>
        </MbtiBox>{' '}
      </Point>
      <Bg onClick={_onClick}></Bg>
    </ModalBg>
  );
}

const ModalBg = styled.div`
  position: fixed;
  left: -100%;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transition: all ease 0.3s;
  opacity: 0;
  overflow: hidden;
  &.Open {
    opacity: 1;
    left: 0px;
    overflow: auto;
  }
  &.Close {
    opacity: 0;
    overflow: hidden;
  }
`;
const Bg = styled.div`
  background-color: rgba(555, 555, 555, 0.4);
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;
const MbtiBox = styled.div`
  width: 314px;
  background-color: #3f3f41;
  border-radius: 7px;
  color: #fff;
  padding: 20px;
  height: 447px;
  overflow-y: hidden;
  transition: all ease 0.3s;
`;
const Point = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  transition: all ease 0.3s;
  z-index: 999;
`;
const ImgPoint = styled.img`
  width: 115px;
  position: absolute;
  left: -17px;
  top: -24px;
  transition: all ease 0.3s;
`;
const MbtiTxt = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  transition: all ease 0.3s;
`;

export default MymbtiInfo;
