import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

// component
import { Button, Grid, Alert } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Spiner from '../../shared/Spiner';
import SetKategori from '../modules/Post/SetKategori';
import SetText from '../modules/Post/SetText';

const PostEdit = props => {
  const dispatch = useDispatch();

  // 포스트 id를 가져옵니다
  const pathName = props.location.pathname;
  const boardId = pathName.split('/');

  // 유저 정보를 가져옵니다
  const info = useSelector(state => state.post.detail);
  const editText = info.content;

  // 알럿창 관리
  const [textAlt, setTextAlt] = useState(false);

  // 데이터 관리
  const loading = useSelector(state => state.post.loading);
  const contentData = info.length !== 0 ? info.content : '';
  const tagData = info.length !== 0 ? info.tag : null;

  // 전송용 데이터
  const [text, setTest] = useState('');
  const [tag, setTag] = useState('');

  // 렌더링시 디테일 페이지 정보를 가져오고 태그와 텍스트를 넣습니다.
  useEffect(() => {
    dispatch(postActions.getDetailDB(boardId[2]));
    setTag(tagData);
    setTest(contentData);
  }, [contentData, tagData]);

  // 텍스트와 태그 온체인지
  const changeText = e => {
    setTest(e.target.value);
  };
  const changeTag = e => {
    setTag(e.target.name);
  };

  // 수정!!
  const editPost = async () => {
    if (text === '') {
      setTextAlt(true);
      return;
    }

    const data = {
      tag: tag,
      content: text,
    };

    dispatch(postActions.editPostDB(boardId[2], data));
  };

  return (
    <React.Fragment>
      <Header>글 수정하기</Header>

      <PostBox>
        {/* 카테고리 선택 */}
        <SetKategori tag={tag} changeTag={changeTag} />

        {/* 글 작성 */}
        <SetText text={text} editText={editText} changeText={changeText} />

        {/* 수정하기 버튼 */}
        <Button _onClick={editPost} BtnBottom width="85%">
          게시글 수정하기
        </Button>
      </PostBox>

      {/* 모달창 관리 */}
      {loading ? <Spiner post /> : null}
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
              <p>글을 작성해 주세요.</p>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
    </React.Fragment>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export default PostEdit;
