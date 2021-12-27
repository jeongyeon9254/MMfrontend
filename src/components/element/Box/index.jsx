import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';

import { MyChatBox, UserChatBox, ProfileBox, CommentBox, BlackBox } from './module';

const Box = props => {
  const {
    children,
    _onClick,
    // css props
    width,
    color,
    margin,
    padding,
    // 분기name
    myChat,
    userChat,
    profile,
    comment,
    black,
  } = props;

  const styles = {
    width,
    color,
    margin,
    padding,
  };

  if (black) {
    return (
      <BlackBox {...styles} onClick={_onClick}>
        {children}
      </BlackBox>
    );
  }

  if (myChat) {
    return (
      <Grid row>
        <MyChatBox {...styles} onClick={_onClick}>
          {children}
        </MyChatBox>
      </Grid>
    );
  }

  if (userChat) {
    return (
      <Grid justify="flex-end" row>
        <UserChatBox {...styles} onClick={_onClick}>
          {children}
        </UserChatBox>
      </Grid>
    );
  }

  if (profile) {
    return (
      <ProfileBox {...styles} onClick={_onClick}>
        {children}
      </ProfileBox>
    );
  }

  if (comment) {
    return (
      <Grid row>
        <CommentBox {...styles} onClick={_onClick}>
          {children}
        </CommentBox>
      </Grid>
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
  color: null,
  margin: '0',
  padding: '15px',
};

const BoxStyle = styled.div`
  width: ${props => props.width};
  box-sizing: border-box;
  padding: ${props => props.padding};
  background-color: ${props => props.theme.colors.gray_1};
  border-radius: 9px;
  margin: ${props => props.margin};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
  word-break: keep-all;
  word-wrap: break-word;
  font-weight: 400;
`;

export default Box;
