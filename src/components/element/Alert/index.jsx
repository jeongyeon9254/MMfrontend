import React from 'react';
import { Grid, Image } from '../index';
import styled from 'styled-components';
import { Yes, No } from '../../element/Alert/module.js';
import Bit from '../../modules/Bit';
import mergeBit from '../../../img/Icon/Logout_modal.svg';

const Alert = props => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const MyBit = Bit.find(x => {
    return x.name === userInfo.mbti;
  });
  const { children, isButton, bg, display, color, check, logout } = props;

  const styles = {
    display,
    bg,
    color,
  };

  if (isButton) {
    return (
      <>
        <AlertBox>
          <AlertInBox {...styles} style={{ backgroundImage: `url(${MyBit ? MyBit.image : ''})` }}>
            {children}
            <Grid
              row
              justify="flex-end"
              gap="16px"
              padding="0px 18px 0px 0px"
              align="center"
              height="36px"
            >
              <No
                onClick={() => {
                  props.no();
                }}
              >
                아니요
              </No>
              <Yes
                onClick={() => {
                  props.yes();
                }}
              >
                예
              </Yes>
            </Grid>
          </AlertInBox>
        </AlertBox>
      </>
    );
  }
  if (check) {
    return (
      <>
        <AlertBox>
          <AlertInBox {...styles} style={{ backgroundImage: `url(${MyBit ? MyBit.image : ''})` }}>
            {children}
            <Grid
              row
              justify="flex-end"
              gap="16px"
              padding="0px 18px 0px 0px"
              align="center"
              height="36px"
            >
              <Yes
                onClick={() => {
                  props.yes();
                }}
              >
                확인
              </Yes>
            </Grid>
          </AlertInBox>
        </AlertBox>
      </>
    );
  }
  if (logout) {
    return (
      <>
        <AlertBox>
          <AlertInBox {...styles}>
            {children}
            <Grid justify="center" width="259px" height="144px">
              <Image nobackground src={mergeBit}></Image>
            </Grid>
            <Grid
              row
              justify="flex-end"
              gap="16px"
              padding="0px 18px 0px 0px"
              align="center"
              height="36px"
            >
              <No
                onClick={() => {
                  props.no();
                }}
              >
                아니요
              </No>
              <Yes
                onClick={() => {
                  props.yes();
                }}
              >
                예
              </Yes>
            </Grid>
          </AlertInBox>
        </AlertBox>
      </>
    );
  }

  return (
    <>
      <AlertBox>
        <AlertInBox {...styles} style={{ backgroundImage: `url(${MyBit ? MyBit.image : ''})` }}>
          {children}
        </AlertInBox>
      </AlertBox>
    </>
  );
};
Alert.defaultProps = {
  color: '#262626',
};

const AlertBox = styled.div`
  height: 876px;
  width: 441px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(22, 22, 22, 0.69);
  z-index: 55;
  transition: all 0.2s;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -5%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 1050px) {
    height:100%;
`;

const AlertInBox = styled.div`
  display: ${props => props.display};
  width: 280px;
  max-width: 800px;
  position: relative;
  height: auto;
  left: 50%;
  top: 50%;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12),
    0px 8px 10px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 204px -42px;
  background-size: 100px 100px;
  border-radius: 4px;
`;

export default Alert;
