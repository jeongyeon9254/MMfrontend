import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import icon_location from '../../img/Icon/icon_location.svg';

// Redux
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as profileActions } from '../../redux/modules/profile.js';
import { actionCreators as matchingActions } from '../../redux/modules/matching.js';
import { actionCreators as ChatAction } from '../../redux/modules/chat';
import { getMatchingDB } from '../../api/modules/chemy';

// component
import { Image, Grid, Box, Tag, Alert } from '../element/index.js';
import Header from '../modules/layout/Header';
import ProfileBar from '../modules/Profile/ProfileModalBar';
import Spiner from '../../shared/Spiner';

const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // 주소에서 유저 ID를 받아옵니다
  const pathName = history.location.pathname;
  const name = pathName.split('/');

  React.useEffect(() => {
    dispatch(profileActions.getProfileDB(name[name.length - 1]));
    dispatch(matchingActions.getMatchingListCheckDB());
    dispatch(ChatAction.getChatRoomListDB());
    return () => {
      dispatch(matchingActions.resetAction());
      dispatch(profileActions.resetAction());
      dispatch(ChatAction.resetList());
    };
  }, [name[3]]);

  // 빠른 매칭 스피너
  const [loading, setLoading] = useState(false);

  // 데이터 관리
  const profile = useSelector(state => state.profile.list);
  const status = useSelector(state => state.matching.status);
  const MatchingLists = useSelector(state => state.matching.matchingLists);

  const FindId = () => {
    // console.log(profile.userId);
    return MatchingLists.includes(profile.userId);
  };
  const RoomListNum = useSelector(state => state.chat.RoomNumbers);
  const mbti = profile.interestList;

  const exit = () => {
    setConnect(false);
    setDisconnect(false);
  };

  const next = profileId => {
    dispatch(matchingActions.postMatchingDB(profileId));
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

  // 모달창 관리
  const [modal, setModal] = useState(false);
  const [connect, setConnect] = useState(false);
  const [Disconnect, setDisconnect] = useState(false);
  const [Classification, setClassification] = useState(false);
  const [roomList, setroomList] = useState(false);

  // 요청 받은 리스트의 patnerId 값에 지금 profile에 userId이 있는지 확인 한다.
  React.useEffect(() => {
    setClassification(MatchingLists.includes(profile.userId));
    return () => {
      setClassification(false);
    };
  }, [MatchingLists, profile]);

  React.useEffect(() => {
    setroomList(RoomListNum.includes(profile.userId));
    return () => {
      setroomList(false);
    };
  }, [RoomListNum, profile]);

  React.useEffect(() => {
    if (profile.userId) {
      if (Classification) {
        next(profile.userId);
      }
      if (roomList) {
        next(profile.userId);
      }
    }
  }, [Classification, roomList, profile.userId]);

  return (
    <React.Fragment>
      {connect ? (
        <Alert
          MyBit
          isButton
          yes={() => {
            next(profile.userId);
          }}
          no={exit}
        >
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>매칭을 신청하시겠습니까?</Title>
            <Grid gap="4px">
              <Content>{profile.nickname}님께 매칭을 신청할까요?</Content>
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
          <MbtiIcon className="mbti">
            <Image round mbti={profile ? profile.mbti : 'INFJ'}></Image>
          </MbtiIcon>
        </Grid>

        <Grid row width="auto" justify="center" gap="10px" align="center">
          <Name className="name">{profile.nickname}</Name>
          <Grid width="100%" margin="0px 0 0px" row justify="center">
            <Tag mbti={profile ? profile.mbti : 'INFJ'} _type="black" size="14px">
              {profile.mbti}
            </Tag>
            {/* <p>{profile.affinity}</p> */}
          </Grid>
          <Grid row justify="center">
            <LocationIcon className="icon" alt="주소" src={icon_location}></LocationIcon>
            <Location className="location">
              {profile.location} {profile.locDetail}
            </Location>
          </Grid>
          <Grid row justify="center" margin="10px 0 0" gap="10px">
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
  padding: 0px 30px 30px;
  @media only screen and (max-width: 450px) {
    padding: 10px 30px;
    overflow: scroll;
    height: 97%;
  }
`;

const MbtiIcon = styled.div`
  position: absolute;
  width: 20%;
  bottom: -10%;
  left: 60%;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const LocationIcon = styled.img`
  width: 18px;
`;
const Location = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  color: #9b9b9b;
  line-height: 1.3;
`;
const Name = styled.p`
  margin-top: 28px;
  font-size: ${props => props.theme.fontSizes.xxxl};
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.gray_2};
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
