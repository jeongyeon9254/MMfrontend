import React from 'react';
import styled from 'styled-components';

// Js
import icon_location from '../../img/Icon/icon_location.svg';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as profileActions } from '../../redux/modules/profile.js';

// component
import { Button, Image, Grid, Box, Tag } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

const Profile = props => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const pathName = history.location.pathname;
    const name = pathName.split('/');
    dispatch(profileActions.getProfileDB(name[2]));
  }, []);

  const profile = useSelector(state => state.profile.list);
  const mbti = profile.interestList;

  console.log(profile);

  return (
    <ProfileStyle>
      <Header>프로필</Header>
      <Grid margin="30px 0 0 0">
        <Image round width="50%" src={profile.profileImage}></Image>
        <div className="mbti">
          <Image round mbti={profile ? profile.mbti : 'INFJ'}></Image>
        </div>
      </Grid>
      <p className="name">{profile.nickname}</p>
      <Grid width="15%" margin="15px auto">
        <Tag mbti={profile ? profile.mbti : 'INFJ'} _type="black" size="14px">
          {profile.mbti}
        </Tag>
      </Grid>
      <Grid row width="auto" justify="center" gap="5px">
        <img className="icon" alt="주소" src={icon_location}></img>
        <p className="location">서울특별시 {profile.location}</p>
      </Grid>
      <Grid row width="auto" justify="center" gap="10px" margin="14px 0 0 0 ">
        {mbti ? (
          <>
            <Tag mbti={profile ? profile.mbti : 'INFJ'}>{profile ? mbti[0].interest : null}</Tag>
            <Tag mbti={profile ? profile.mbti : 'INFJ'}>{profile ? mbti[1].interest : null}</Tag>
          </>
        ) : null}
      </Grid>
      <Box profile margin="25px 0 0 0">
        {profile.intro}
      </Box>
      <Button BtnBottom width="90%">
        매칭신청
      </Button>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  padding: 20px;
  .name {
    margin-top: 28px;
    font-size: ${props => props.theme.fontSizes.xxxl};
    text-align: center;
    font-weight: 700;
    color: ${props => props.theme.colors.gray_2};
  }
  .mbti {
    position: absolute;
    width: 20%;
    bottom: -10%;
    left: 60%;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .icon {
    width: 18px;
  }
  .location {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.small};
    color: #9b9b9b;
    line-height: 1.3;
  }
`;

export default Profile;
