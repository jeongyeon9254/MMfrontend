import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Grid, Image, Alert } from '../../element/index';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../../redux/modules/post';

const AddComment = props => {
  const dispatch = useDispatch();
  const [textAlt, setTextAlt] = useState(false);

  // 유저 정보
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);
  const postId = props.boardId;

  // 코멘트
  const textRef = useRef();
  const [comment, setComment] = useState('');

  const addComment = () => {
    if (comment === '') {
      setTextAlt(true);
      return false;
    }
    dispatch(postActions.addCommentsDB(postId, comment));
    setComment('');
  };

  const enterkey = () => {
    if (window.event.keyCode == 13) {
      addComment();
    }
  };

  return (
    <CommentBox>
      {textAlt ? (
        <Alert
          MyBit
          check
          yes={() => {
            setTextAlt(false);
          }}
        >
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Grid gap="4px">
              <p>댓글을 작성해 주세요.</p>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Grid row width="100%" gap="10px">
        <Image src={data.profileImage} round width="37px" margin="0"></Image>
        <input
          ref={textRef}
          onChange={e => {
            setComment(e.target.value);
          }}
          value={comment || ''}
          placeholder="댓글을 달아보세요!"
          onKeyUp={enterkey}
        ></input>
        <button onClick={addComment}>등록</button>
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
    width: calc(100% - 94px);
    border-radius: 30px;
    outline: none;
    border: none;
    background: #f4f4f4;
    padding: 5px 20px 5px 20px;
    box-sizing: border-box;
    resize: none;
    height: 37px;
    line-height: 1.6;
  }
  button {
    width: 37px;
    border: none;
    box-sizing: border-box;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 500;
    color: #777;
  }
`;

export default AddComment;
