import React from 'react';
import { Grid, Button } from '../index';
import styled from 'styled-components';

const Alert = props => {
  const { children, isButton, bg, display } = props;

  const styles = {
    display,
    bg,
  };

  if (isButton) {
    return (
      <>
        <AlertBox>
          <AlertInBox {...styles}>{children}</AlertInBox>
        </AlertBox>
      </>
    );
  }
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
`;

const AlertInBox = styled.div`
  display: ${props => props.display};
  width: 280px;
  max-width: 800px;
  position: relative;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.bg};
  box-shadow: 0px 0px 1px 2px #eee;
`;

export default Alert;
