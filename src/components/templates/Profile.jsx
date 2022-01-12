import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import icon_location from '../../img/Icon/icon_location.svg';
import arrow_right from '../../img/Icon/arrow_right.svg';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as profileActions } from '../../redux/modules/profile.js';
import { actionCreators as chatActions } from '../../redux/modules/chat';
import { getMatchingDB } from '../../api/modules/chemy';

// component
import { Button, Image, Grid, Box, Tag, Alert } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import Spiner from '../../shared/Spiner';

const Profile = props => {
  const dispatch = useDispatch();
  const pathName = history.location.pathname;
  const name = pathName.split('/');

  React.useEffect(() => {
    const pathName = history.location.pathname;
    const name = pathName.split('/');
    console.log(name);
    dispatch(profileActions.getProfileDB(name[name.length - 1]));
  }, []);

  const [loading, setLoading] = useState(false);
  const profile = useSelector(state => state.profile.list);
  const mbti = profile.interestList;

  const [modal, setModal] = useState(false);
  const [connect, setConnect] = useState(false);
  const [Disconnect, setDisconnect] = useState(false);

  const exit = () => {
    setConnect(false);
    setDisconnect(false);
  };
  const guestInfo = {
    guestId: profile.username,
    guestMbti: profile.mbti,
    guestNick: profile.nickname,
    guestImg: profile.profileImage,
  };

  const next = () => {
    dispatch(chatActions.postChatRoomListDB(guestInfo));
    setModal(true);
    exit();
  };

  const After = () => {
    setDisconnect(true);
    setModal(false);
    exit();
  };

  const reTry = async () => {
    setLoading(true);
    await getMatchingDB().then(res => {
      setTimeout(function () {
        history.replace(`/profile/fast/${res.data.userId}`);
        setLoading(false);
      }, 1500);
    });
  };

  return (
    <>
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

      {modal ? (
        <MatchBox
          onClick={() => {
            history.push('/choice');
          }}
        >
          <p>이미 {profile.nickname}님께 신청을 보냈어요</p>
          <img alt="화살표" src={arrow_right}></img>
        </MatchBox>
      ) : null}
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
          <p className="location">서울특별시 {profile.location}</p>
        </Grid>
        <Grid row width="auto" justify="center" gap="10px" margin="14px 0 0 0 ">
          {mbti
            ? mbti.map((x, idx) => {
                return (
                  <Tag key={idx} mbti={profile ? profile.mbti : 'INFJ'}>
                    {profile ? mbti[idx].interest : null}
                  </Tag>
                );
              })
            : null}
        </Grid>
        <Box profile margin="25px 0 0 0">
          {profile.intro}
        </Box>
        {!modal ? (
          <Button
            BtnBottom
            width="85%"
            _onClick={() => {
              setConnect(true);
            }}
          >
            매칭신청
          </Button>
        ) : (
          <Button
            BtnBottom
            width="85%"
            color="#EC6464"
            _onClick={() => {
              // const userId = { userId: profile.userId };
              // dispatch(chatActions.postChatRoomListDB(userId));
              setDisconnect(true);
            }}
          >
            매칭 친구 끊기
          </Button>
        )}
      </ProfileStyle>
      {loading ? <Spiner /> : null}
    </>
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

const MatchBox = styled.div`
  display: flex;
  position: relative;
  top: -2px;
  width: 100%;
  justify-content: space-between;
  background: #f3d7d7;
  color: #ec6464;
  padding: 23px 30px;
  cursor: pointer;
  animation: match-down 0.5s;
  @keyframes match-down {
    from {
      margin-top: -62px;
    }
    to {
      margin-top: 0;
    }
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
