import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Box, Input } from '../../element/index';

const AddComment = () => {
  return (
    <CommentBox>
      <Grid row gap="10px">
        <Image round width="37px" margin="0"></Image>
        <input placeholder="댓글을 달아보세요!"></input>
        <button>등록</button>
      </Grid>
    </CommentBox>
  );
};
const CommentBox = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 51;
  border-top: 1px solid #eee;
  padding: 16px 28px;
  input {
    width: 220px;
    border-radius: 30px;
    outline: none;
    border: none;
    background: #f4f4f4;
    padding: 0 20px;
    box-sizing: border-box;
  }
  button {
    border: none;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 500;
  }
`;

export default AddComment;
