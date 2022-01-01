import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '../../element';
import { Mybit } from '../../modules/Bit';
import PerfectScrollbar from 'react-perfect-scrollbar';
function MymbtiInfo(props) {
  const { mbti } = props;
  const Myinfo = Mybit(mbti);
  console.log(Myinfo);
  return (
    <ModalBg>
      <Point>
        <PerfectScrollbar>
          <Box width="316px" black>
            <Grid>
              <img src={Myinfo ? Myinfo.image : ''} alt="" />
              <div>{Myinfo.title}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
              <div>{Myinfo.name}</div>
            </Grid>
          </Box>{' '}
        </PerfectScrollbar>
      </Point>
    </ModalBg>
  );
}

const ModalBg = styled.div`
  background-color: rgba(555, 555, 555, 0.4);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
`;
const Point = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 447px;
  border-radius: 7px;
  overflow: hidden;
`;

export default MymbtiInfo;
