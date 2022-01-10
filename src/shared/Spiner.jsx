import React from 'react';
import styled from 'styled-components';

// Js
import spiner_img from '../img/Icon/spiner_img.svg';

const Spiner = props => {
  const post = props.post;

  if (post) {
    return (
      <SpinerBox>
        <p className="spiner_title">게시글을 작성중입니다!</p>
        <p className="spiner_text">잠시만 기다려주세요!</p>
        <div>
          <img className="rolling" alt="스피너" src={spiner_img}></img>
        </div>
      </SpinerBox>
    );
  }

  return (
    <SpinerBox>
      <p className="spiner_title">나와 궁합이 잘맞는 MBTI 친구를 찾고 있어요!</p>
      <p className="spiner_text">나와 궁합이 잘맞는 MBTI 친구를 찾고 있어요!</p>
      <div>
        <img className="rolling" alt="스피너" src={spiner_img}></img>
      </div>
    </SpinerBox>
  );
};

const SpinerBox = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
  .spiner_title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #3f3f41;
  }
  .spiner_text {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #4e4e4e;
  }
  .rolling {
    animation: rolling_spiner 10s linear;
    @keyframes rolling_spiner {
      from {
        margin-left: -30px;
      }
      to {
        margin-left: -1845px;
      }
    }
  }
`;

export default Spiner;
