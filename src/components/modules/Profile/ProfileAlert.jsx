import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Alert } from '../../element';

function ProfileAlert(props) {
  const { After, exit, _type, next } = props;
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.list);

  switch (_type) {
    case 'connect':
      return (
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
      );
    case 'disconnect':
      return (
        <Alert MyBit isButton yes={After} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>매칭 친구를 끊을까요?</Title>
            <Grid gap="4px">
              <Content>{profile.nickname} 님과의 매칭을 끊을까요?</Content>
              <Content>나와 딱 맞는 친구일지 몰라요!</Content>
            </Grid>
          </Grid>
        </Alert>
      );
    default:
      return <></>;
  }
}

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
export default ProfileAlert;
