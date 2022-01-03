import React from 'react';
import styled from 'styled-components';
import person from '../../../img/Icon/icon_person.svg';
import home from '../../../img/Icon/icon_home.svg';
import sns from '../../../img/Icon/icon_sms.svg';
import feed from '../../../img/Icon/icon_feed.svg';

// Component
import { Grid } from '../../element';

// JS
import { history } from '../../../redux/configureStore';
//수정
const Footer = props => {
  return (
    <FooterStyle>
      <Grid row>
        <FooterBtn
          onClick={() => {
            history.push('/');
          }}
        >
          <img alt="홈" src={home}></img>
          <p>홈</p>
        </FooterBtn>
        <FooterBtn
          onClick={() => {
            history.push('/PostMain');
          }}
        >
          <img alt="커뮤니티" src={feed}></img>
          <p>커뮤니티</p>
        </FooterBtn>
        <FooterBtn
          onClick={() => {
            history.push('/chat');
          }}
        >
          <img alt="채팅" src={sns}></img>
          <p>채팅</p>
        </FooterBtn>
        <FooterBtn
          onClick={() => {
            history.push('/myinfo');
          }}
        >
          <img alt="내정보" src={person}></img>
          <p>내정보</p>
        </FooterBtn>
      </Grid>
    </FooterStyle>
  );
};

const FooterStyle = styled.header`
  height: 89px;
  width: 100%;
  position: fixed;
  border-radius: 50px 50px 0 0;
  box-sizing: border-box;
  bottom: 0;
  background-color: ${props => props.theme.colors.gray_2};
  z-index: 3;
  padding: 20px 25px;
`;

const FooterBtn = styled.button`
  width: 21%;
  margin: 0 2%;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  p {
    font-size: ${props => props.theme.fontSizes.extraSmall};
  }
`;

export default Footer;
