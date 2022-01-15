import React from 'react';
import styled from 'styled-components';

// Js
import null_img from '../img/Icon/null_img.svg';

const Null = props => {
  if (props.post) {
    return (
      <NullBox>
        <p className="null_title">지금 포스트가 없네요</p>
        <p className="null_text">다른 관심사로 선택해주세요!</p>
        <div className="img_box">
          <img src={null_img} alt="포스트가 없습니다"></img>
        </div>
      </NullBox>
    );
  }
  if (props.mypost) {
    return (
      <NullBox>
        <p className="null_title">지금 올리신 게시물이 없네요</p>
        <p className="null_title">게시물을 작성해주세요!</p>
        <div className="img_box">
          <img src={null_img} alt="포스트가 없습니다"></img>
        </div>
      </NullBox>
    );
  }

  return (
    <NullBox>
      <p className="null_title">여기에는 지금 친구가 없네요</p>
      <p className="null_text">다른 지역이나 관심사로 선택해주세요!</p>
      <div className="img_box">
        <img src={null_img} alt="회원이 없습니다"></img>
      </div>
    </NullBox>
  );
};

const NullBox = styled.div`
  text-align: center;
  padding-top: 40px;

  .null_title {
    font-size: 22px;
    font-weight: 700;
    color: #3f3f41;
  }

  .null_text {
    font-size: 16px;
    font-weight: 500;
    color: #787878;
    padding-top: 10px;
  }

  .img_box {
    margin: 40px auto 0 auto;
  }
`;

export default Null;
