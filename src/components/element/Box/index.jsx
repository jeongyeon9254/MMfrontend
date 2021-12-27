import React from 'react';
import styled from 'styled-components';
import { ChatBox } from './module';

const Box = props => {
  const {
    width,
    height,
    children,
    _onClick,
    color,
    padding,
    margin,
    justify,
    align,
    gap,
    border,
    chat,
  } = props;

  const styles = {
    width,
    height,
    color,
    padding,
    margin,
    justify,
    align,
    gap,
    border,
  };

  if (chat) {
    return (
      <ChatBox {...styles} onClick={_onClick}>
        {children}
      </ChatBox>
    );
  }

  return (
    <BoxStyle {...styles} onClick={_onClick}>
      {children}
    </BoxStyle>
  );
};

Box.defaultProps = {
  width: '100%',
  height: 'auto',
  color: null,
  padding: '0',
  margin: '0',
  justify: null,
  align: null,
  gap: null,
  border: 'none',
};

const BoxStyle = styled.div`
  box-sizing: border-box;
  padding: 35px 30px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_1)};
  border-radius: 9px;
  margin: ${props => props.margin};
`;

export default Box;
