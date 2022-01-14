import React from 'react';
import styled from 'styled-components';
import { Button } from '../../element';
import { history } from '../../../redux/configureStore';
import arrow_right from '../../../img/Icon/arrow_right.svg';
import arrow_right_g from '../../../img/Icon/arrow_back_ios_g.svg';
import arrow_right_b from '../../../img/Icon/arrow_back_ios_b.svg';

function ProfileBar(props) {
  const { Btn, Bar, type, nickname, _onClick } = props;
  if (Bar) {
    switch (type) {
      case '신청이 완료되었습니다.':
        return (
          <MatchBox
            className="Completion"
            onClick={() => {
              history.push('/choice');
            }}
          >
            <p>
              {nickname}님과의 {type}
            </p>
            <img alt="화살표" src={arrow_right_b}></img>
          </MatchBox>
        );
      case '신청 대기 상태입니다.':
        return (
          <MatchBox
            className="Atmosphere"
            onClick={() => {
              history.push('/choice');
            }}
          >
            <p>
              {nickname}님과의 {type}
            </p>
            <img alt="화살표" src={arrow_right}></img>
          </MatchBox>
        );
      case '이미 채팅 중입니다.':
        return (
          <MatchBox
            className="Already"
            onClick={() => {
              history.push('/chat');
            }}
          >
            <p>
              {nickname}님과의 {type}
            </p>
            <img alt="화살표" src={arrow_right_g}></img>
          </MatchBox>
        );
      case '':
        return '';
      default:
        break;
    }
  }

  if (Btn) {
    switch (type) {
      case '신청이 완료되었습니다.':
        return (
          <Button
            BtnBottom
            width="85%"
            color="#646eec"
            _onClick={() => {
              history.push('/choice');
            }}
          >
            요청 페이지로 가기
          </Button>
        );
      case '신청 대기 상태입니다.':
        return (
          <Button
            BtnBottom
            width="85%"
            color="#ec6464"
            _onClick={() => {
              _onClick();
            }}
          >
            매칭 친구 끊기
          </Button>
        );
      case '대화 중인 상대입니다.':
        return (
          <Button
            BtnBottom
            width="85%"
            color="#6fe5a4"
            _onClick={() => {
              history.push('/chat');
            }}
          >
            채팅방으로 돌아 가기
          </Button>
        );
      case '':
        return '';
      default:
        return (
          <Button
            BtnBottom
            width="85%"
            _onClick={() => {
              _onClick();
            }}
          >
            매칭신청
          </Button>
        );
    }
  }
}
const MatchBox = styled.div`
  display: flex;
  position: relative;
  top: -2px;
  width: 100%;
  justify-content: space-between;
  padding: 23px 30px;
  cursor: pointer;
  animation: match-down 0.5s;
  @keyframes match-down {
    from {
      margin-top: -62px;
    }
    to {
      margin-top: 0;
    }
  }
  &.Completion {
    background-color: #d7ddf3;
    color: #646eec;
  }
  &.Atmosphere {
    background-color: #f3d7d7;
    color: #ec6464;
  }
  &.Already {
    background-color: #d7f3f0;
    color: #6fe5a4;
  }
`;

export default ProfileBar;
