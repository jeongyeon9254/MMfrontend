import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import { Emoticons } from '../../../img/emoticon';
function ChatEmoticon(props) {
  const { Open, click, Emit, On, EmoticonSend } = props;
  const ClickEvent = data => {
    // if (On) {
    //   EmoticonSend();
    // } else {
    //   click(true);
    //   Emit(data);
    // }
  };
  return (
    <EmoticonBox className={Open ? 'open' : 'close'}>
      <Grid row justify="space-between" align="center">
        {Emoticons.map((x, idx) => {
          return (
            <ImgBox
              key={idx}
              onClick={() => {
                ClickEvent(x);
              }}
            >
              <img src={x.image} alt={x.number} />
            </ImgBox>
          );
        })}
      </Grid>
    </EmoticonBox>
  );
}
const EmoticonBox = styled.div`
  width: 100%;
  height: 0px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  transition: all ease-out 0.2s;
  padding: 0px;
  &.open {
    height: 270px;
    padding: 13px 19px;
  }
`;
const ImgBox = styled.div`
  padding: 10px 0;
  cursor: pointer;
  width: 33%;
  text-align: center;
`;
export default ChatEmoticon;
