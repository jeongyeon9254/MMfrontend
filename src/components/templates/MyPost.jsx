import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as MypostActions } from '../../redux/modules/user';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
import MyPostCard from '../modules/Post/MyPostCard';
import { Grid } from '../element/index';

const MyPost = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.user.MypostList);
  const page = useSelector(state => state.user.page);

  const Mylist = [...postList];

  React.useEffect(() => {
    dispatch(MypostActions.getMyPostDB(page));
  }, []);

  return (
    <MyPostBox>
      <Header>내가 올린 게시물</Header>
      <Grid gap="10px" padding="14px 29px 15px 30px">
        <MyPostCard Mylist={Mylist} />
      </Grid>
    </MyPostBox>
  );
};

const MyPostBox = styled.div`
  overflow: scroll;
  height: calc(100% + 105px);

  position: relative;
`;

export default MyPost;
