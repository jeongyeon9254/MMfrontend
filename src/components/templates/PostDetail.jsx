import React, { useState } from 'react';
import styled from 'styled-components';

// Component
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';
import PostModal from '../modules/Post/PostModal';
import AddComment from '../modules/Post/AddComment';
import MainComment from '../modules/Post/MainComment';
import { Grid } from '../element/index';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';
import { actionCreators as userAction } from '../../redux/modules/user';
import { history } from '../../redux/configureStore';

const PostDetail = props => {
  const dispatch = useDispatch();

  // 포스트 아이디를 가져옵니다.
  const pathName = props.location.pathname;
  const boardId = pathName.split('/');

  // 유저 정보
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  // 예외처리용 정보
  const detailInfo = useSelector(state => state.post.detail);
  const comment = detailInfo.commentList;

  // 디테일 페이지 정보를 받아옵니다.
  React.useEffect(() => {
    dispatch(postActions.getDetailDB(boardId[2]));
  }, []);

  // ???
  React.useEffect(() => {
    dispatch(userAction.getMyPostBoxDB());
  }, []);

  // 모달창 관리
  const [modal, setModal] = useState(false);
  const outModal = () => {
    setModal(false);
    setCommentState(false);
  };

  // 코멘트 관리
  const [commentState, setCommentState] = useState(false);
  const [commenttId, setCommenttId] = useState();
  const onCommentModal = () => {
    setModal(true);
    setCommentState(true);
  };

  // 좋아요 이벤트
  const addlike = () => {
    dispatch(postActions.addLikeDB(boardId[2]));
  };

  const GoPost = () => {
    history.push('/postMain');
  };

  return (
    <DetailBox>
      <Header Page default _onClick={GoPost} Name={data.nickname} name={detailInfo.nickname} detail>
        게시글 상세보기
      </Header>

      {/* 포스트 창 */}
      {detailInfo.length !== 0 ? <PostCard addlike={addlike} info={detailInfo} /> : null}

      {/* 댓글창 및 댓글 등록 */}
      <Grid padding="20px 30px" gap="12px" borderTop="1px solid #E8E8E8">
        {comment
          ? comment.map((x, idx) => {
              return (
                <Grid key={idx}>
                  <MainComment
                    set={setCommenttId}
                    info={x}
                    boardId={boardId[2]}
                    out={onCommentModal}
                  ></MainComment>
                </Grid>
              );
            })
          : null}
      </Grid>
      <AddComment boardId={boardId[2]}></AddComment>

      {/* 모달창 */}
      {modal ? (
        <PostModal
          commenttId={commenttId}
          commentState={commentState}
          boardId={boardId[2]}
          out={outModal}
        />
      ) : null}
    </DetailBox>
  );
};

const DetailBox = styled.div`
  height: calc(100% + 105px);
  overflow: scroll;
  padding-bottom: 78px;
  margin-top: -3px;
`;

export default PostDetail;
