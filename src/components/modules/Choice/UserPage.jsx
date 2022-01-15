import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Button } from '../../element';
import { UserBox, UserPre, UserButton } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as profileAction } from '../../../redux/modules/profile';

const UserPage = props => {
  const dispatch = useDispatch();
  const { Boo, _onClick } = props;
  const { hostId, guestId } = props.data;
  const hostInfo = useSelector(state => state.profile.list);

  React.useEffect(() => {
    if (hostId) {
      dispatch(profileAction.getProfileDB(hostId));
    }
  }, [hostId]);

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" Page _onClick={_onClick}>
        {hostInfo.nickname}
      </Header>
      <Grid padding="18px 30px" gap="19px">
        <UserBox data={hostInfo} />
        <UserPre
          nickname={hostInfo.nickname}
          profileImg={hostInfo.profileImage}
          mbti={hostInfo.mbti}
        />
      </Grid>
      <UserButton guestId={guestId} hostInfo={hostInfo} />
    </PageShadows>
  );
};

const PageShadows = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: -100%;
  top: 0px;
  z-index: 99;
  padding-top: 85px;
  transition: ease-out 0.2s;
  &.open {
    left: 0px;
  }
`;

export default UserPage;
