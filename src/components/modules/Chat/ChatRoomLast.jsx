import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';

const ChatRoomLast = props => {
  const { type, ms, date } = props;

  switch (type) {
    case 'TALK':
      return (
        <div>
          <Grid row justify="space-between" align="center">
            <Text>{ms ? ms : ''}</Text>
            <Date>{date}</Date>
          </Grid>
          {ms ? ms.length >= 30 ? <Dot>...</Dot> : '' : ''}
        </div>
      );
    case 'QUIT':
      return (
        <div>
          <Grid row justify="space-between" align="center">
            <Text>{ms ? ms : ''}</Text>
            <Date>{date}</Date>
          </Grid>
          {ms ? ms.length >= 30 ? <Dot>...</Dot> : '' : ''}
        </div>
      );
    case 'EMO':
      return (
        <Grid row justify="space-between" align="center">
          <Emoticon src={ms} />
          <Date>{date}</Date>
        </Grid>
      );
    default:
      return '';
  }
};
ChatRoomLast.defaultProps = {
  type: '',
  ms: '',
  date: '',
};
const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.maxSmall};
  color: ${props => props.theme.colors.gray_2};
  height: ${props => props.theme.fontSizes.maxSmall};
  overflow: hidden;
  word-break: keep-all;
  word-wrap: break-word;
  width: 85%;
`;
const Date = styled.div`
  font-size: 12px;
  color: #999;
`;
const Emoticon = styled.img`
  height: 26px;
`;
const Dot = styled.div`
  height: 10px;
`;
export default ChatRoomLast;
