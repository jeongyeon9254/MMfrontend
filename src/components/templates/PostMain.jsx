import React from 'react';
import styled from 'styled-components';

// Component
import MapKategorieNav from '../modules/Main/MapKategorieNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';

// JS
import { history } from '../../redux/configureStore';
import icon_pen from '../../img/Icon/icon_pen.svg';
import icno_circle from '../../img/Icon/icno_circle.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postAcitions } from '../../redux/modules/post.js';

// component
import { Button, Grid } from '../element/index.js';
import MainComment from '../../components/modules/Post/MainComment';

const PostMain = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  React.useEffect(() => {
    dispatch(postAcitions.getPostDB());
  }, []);

  const postList = useSelector(state => state.post.postList);

  const list = [...postList];

  const arr =
    list !== []
      ? list.sort((a, b) => {
          return b.postId - a.postId;
        })
      : [];

  const kategorie = useSelector(state => state.main.kategorie);

  let filterLists;
  if (kategorie !== null) {
    filterLists = arr.filter(x => x.tag === kategorie);
  }
  if (kategorie === null || kategorie === '전체보기') {
    filterLists = arr;
  }

  return (
    <PostBox>
      <Header _on>커뮤니티</Header>
      <MapKategorieNav userInfo={userInfo} />
      {postList
        ? filterLists.map((x, idx) => {
            return (
              <div
                key={x.postId}
                onClick={() => {
                  history.push(`/postMain/${x.postId}`);
                }}
              >
                <PostCard info={x} />
                {x.commentList.length > 0 ? (
                  x.commentList.length > 1 ? (
                    <CommentBox>
                      <MainComment info={x.commentList[0]} />
                      <MainComment info={x.commentList[1]} />
                    </CommentBox>
                  ) : (
                    <CommentBox>
                      <MainComment info={x.commentList[0]} />
                    </CommentBox>
                  )
                ) : null}
                {x.commentList.length > 2 ? (
                  <Grid width="20px;" margin="0 auto 20px auto">
                    <img alt="더보기" src={icno_circle}></img>
                  </Grid>
                ) : null}
              </div>
            );
          })
        : null}
      <div className="postBtnBox">
        <Button
          BtnRound
          width="68px"
          _onClick={() => {
            history.push(`/postWrite`);
          }}
        >
          <img alt="글쓰기버튼" src={icon_pen}></img>
        </Button>
      </div>
    </PostBox>
  );
};

const PostBox = styled.div`
  overflow: scroll;
  height: calc(100% + 105px);
  padding: 0;
  position: relative;
  .postBtnBox {
    position: fixed;
    bottom: 25px;
    right: 30px;
    z-index: 2;
  }
`;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 20px 30px;
`;

export default PostMain;
