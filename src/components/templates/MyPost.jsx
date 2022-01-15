import React from 'react';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as MypostActions } from '../../redux/modules/user';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
import MyPostCard from '../modules/Post/MyPostCard';
import { Grid } from '../element/index';
import Null from '../../shared/Null';

const MyPost = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.user.MypostList);
  const page = useSelector(state => state.user.page);

  React.useEffect(() => {
    dispatch(MypostActions.getMyPostDB(page));
  }, []);

  return (
    <MyPostBox>
      <Header>내가 올린 게시물</Header>
      {postList.length > 0 ? (
        postList.map((x, idx) => {
          return (
            <Grid
              gap="10px"
              padding="15px 29px 0px 30px"
              key={x.postId}
              _onClick={() => {
                history.push(`/postMain/${x.postId}`);
              }}
            >
              <MyPostCard postList={x} />
            </Grid>
          );
        })
      ) : (
        <Grid padding="40px 0 0 0">
          <Null mypost></Null>
        </Grid>
      )}
    </MyPostBox>
  );
};

const MyPostBox = styled.div`
  overflow: scroll;
  height: calc(100% + 105px);

  position: relative;
`;

export default MyPost;
