import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { ProfileModalBar, ProfileExplain } from './index';

function ProfileHead(props) {
  const { name, reTry, State, nickname, modal } = props;

  return (
    <ProfileHeadBox>
      {' '}
      {name[2] === 'fast' ? (
        <Header white point="relative" bg="#3f3f41" _on fast _onClick={reTry}>
          프로필
        </Header>
      ) : (
        <Header _on white point="relative" bg="#3f3f41">
          프로필
        </Header>
      )}
      <ProfileExplain />
      {modal ? <ProfileModalBar Bar type={State} nickname={nickname} /> : null}
    </ProfileHeadBox>
  );
}
const ProfileHeadBox = styled.div`
  background-color: #3f3f41;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export default ProfileHead;
