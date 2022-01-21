import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import icon_location from '../../img/Icon/icon_location.svg';

// Redux
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as profileActions } from '../../redux/modules/profile.js';
import { actionCreators as matchingActions } from '../../redux/modules/matching.js';
import { getMatchingDB } from '../../api/modules/chemy';

// component
import { Image, Grid, Box, Tag, Alert } from '../element/index.js';
import Header from '../modules/layout/Header';
import ProfileBar from '../modules/Profile/ProfileModalBar';
import Spiner from '../../shared/Spiner';

const Profile = () => {
  const dispatch = useDispatch();

  // 주소에서 유저 ID를 받아옵니다
  const pathName = history.location.pathname;
  const name = pathName.split('/');

  // 빠른 매칭 스피너
  const [loading, setLoading] = useState(false);

  // 데이터 관리
  const profile = useSelector(state => state.profile.list);
  const status = useSelector(state => state.matching.status);
  const mbti = profile.interestList;

  // 렌더링시 주소에서 유저 ID를 받아오고 디테일 페이지를 받아옵니다.
  React.useEffect(() => {
    dispatch(profileActions.getProfileDB(name[name.length - 1]));
  }, [name[3]]);

  // 모달창 관리
  const [modal, setModal] = useState(false);
  const [connect, setConnect] = useState(false);
  const [Disconnect, setDisconnect] = useState(false);

  const exit = () => {
    setConnect(false);
    setDisconnect(false);
  };

  const next = () => {
    dispatch(matchingActions.postMatchingDB(profile.userId));
    setModal(true);
    exit();
  };

  const After = () => {
    setDisconnect(true);
    dispatch(matchingActions.deleteMatchingChatDB(profile.userId));
    setModal(false);
    exit();
  };

  // 빠른매칭 재시작 관리
  const reTry = async () => {
    setLoading(true);
    await getMatchingDB().then(res => {
      setTimeout(function () {
        history.replace(`/profile/fast/${res.data.userId}`);
        setLoading(false);
      }, 1500);
    });
  };

  const MadalOn = () => {
    setDisconnect(true);
  };

  const MadalSet = () => {
    setConnect(true);
  };

  const State = status ? status : '';

  return (
    <React.Fragment>
      {connect ? (
        <Alert MyBit isButton yes={next} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>매칭을 신청하시겠습니까?</Title>
            <Grid gap="4px">
              <Content>{profile.nickname}님께 매치을 신청할까요?</Content>
              <Content>나와 딱 맞는 친구일지 몰라요!</Content>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      {Disconnect ? (
        <Alert MyBit isButton yes={After} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>매칭 친구를 끊을까요?</Title>
            <Grid gap="4px">
              <Content>{profile.nickname} 님과의 매칭을 끊을까요?</Content>
              <Content>나와 딱 맞는 친구일지 몰라요!</Content>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      {modal ? <ProfileBar Bar type={State} nickname={profile.nickname} /> : null}
      <ProfileStyle>
        {name[2] === 'fast' ? (
          <Header _on fast _onClick={reTry}>
            프로필
          </Header>
        ) : (
          <Header>프로필</Header>
        )}
        <Grid margin="30px 0 0 0">
          <Image round width="50%" src={profile.profileImage} mbti={profile.mbti}></Image>
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
          <p className="location">
            {profile.location} {profile.locDetail}
          </p>
        </Grid>
        <Grid row width="auto" justify="center" gap="10px" margin="14px 0 0 0 ">
          {mbti
            ? mbti.map((x, idx) => {
                return (
                  <Tag size="12px" key={idx} mbti={profile ? profile.mbti : 'INFJ'}>
                    {mbti[idx]}
                  </Tag>
                );
              })
            : null}
        </Grid>
        <Box profile margin="25px 0 0 0">
          {profile.intro}
        </Box>

        {/* 모달창 및 스피너 관리 */}

        {!modal ? (
          <ProfileBar Btn _onClick={MadalSet} />
        ) : (
          <ProfileBar Btn type={State} _onClick={MadalOn} />
        )}
        {loading ? <Spiner /> : null}
      </ProfileStyle>
    </React.Fragment>
  );
};

const ProfileStyle = styled.div`
  padding: 30px;
  @media only screen and (max-width: 450px) {
    padding: 10px 30px;
    overflow: scroll;
    height: 97%;
  }
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

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const Content = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export default Profile;
