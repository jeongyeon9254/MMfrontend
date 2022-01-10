import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

// component
import { Button, Grid, Input } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Spiner from '../../shared/Spiner';

const PostEdit = props => {
  const dispatch = useDispatch();

  // path
  const pathName = props.location.pathname;
  const boardId = pathName.split('/');

  const info = useSelector(state => state.post.detail);

  const contentData = info.length !== 0 ? info.content : '';
  const tagData = info.length !== 0 ? info.tag : null;
  const loading = useSelector(state => state.post.loading);

  // 전송용 데이터
  const [text, setTest] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    dispatch(postActions.getDetailDB(boardId[2]));
    console.log(contentData, tagData);
    setTag(tagData);
    setTest(contentData);
  }, [contentData, tagData]);

  // 버튼
  const InterestList = ['운동', '공부', '대화', '게임', '재테크', '기타'];

  const changeText = e => {
    setTest(e.target.value);
  };

  const changeTag = e => {
    setTag(e.target.name);
  };

  const editPost = async () => {
    const data = {
      tag: tag,
      content: text,
    };
    console.log(data);
    dispatch(postActions.editPostDB(boardId[2], data));
  };

  return (
    <>
      <Header>글 수정하기</Header>
      <PostBox>
        <Grid>
          <p className="title">카테고리 수정하기</p>
          <Grid row gap="8px">
            {InterestList.map((interest, idx) => {
              return (
                <Button
                  key={idx}
                  name={interest}
                  BtnTag
                  _onClick={changeTag}
                  state={interest === tag ? 'active' : null}
                >
                  {interest}
                </Button>
              );
            })}
          </Grid>
        </Grid>
        <Grid>
          <p className="title">내용 수정하기</p>
          <Input _onChange={changeText} _defaultValue={info.content} _type="posting"></Input>
          <div className="limit">
            <span className="recent">{text.length} </span>
            <span>/ 100</span>
          </div>
        </Grid>
        <Button _onClick={editPost} BtnBottom width="83%">
          게시글 수정하기
        </Button>
      </PostBox>
      {loading ? <Spiner post /> : null}
    </>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 80px;
  }
  .limit {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: ${props => props.theme.fontSizes.small};
  }
  .limit .recent {
    color: #aaa;
  }
  .photoBoxDelete {
    position: absolute;
    background: red;
    width: 30px;
    height: 30px;
  }
  .photoPreview {
    width: 100px;
  }
  .file-input {
    display: none;
  }
  label {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #fff;
    border: 1.5px solid #a7a7a7;
    box-sizing: border-box;
    cursor: pointer;
  }
  .plus {
    font-size: 45px;
    color: #c8c8c8;
  }
  .title {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export default PostEdit;
