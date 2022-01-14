import React from 'react';
import styled from 'styled-components';

function ChatEmoticon(props) {
  const { Open } = props;

  return <EmoticonBox className={Open ? 'open' : 'close'}></EmoticonBox>;
}
const EmoticonBox = styled.div`
  width: 100%;
  height: 0px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  transition: all ease-out 0.2s;
  &.open {
    height: 270px;
  }
`;
export default ChatEmoticon;
