import React from 'react';
import styled from 'styled-components';

// img
import icon_location from '../../../img/Icon/icon_location.svg';

import { useSelector } from 'react-redux';
import { Image, Grid, Box, Tag } from '../../element';

import ProfileBar from './ProfileModalBar';

function ProfileBootoms(props) {
  const { modal, MadalSet, MadalOn } = props;
  const profile = useSelector(state => state.profile.list);
  const status = useSelector(state => state.matching.status);
  const State = status ? status : '';
  const interrest = profile.interestList;

  return (
    <ProfileBottom>
      <Grid row width="auto" gap="17px" align="center">
        <Image
          round
          width="116.38px"
          src={profile.profileImage}
          mbti={profile.mbti}
          margin="0px"
        ></Image>
        <Grid align="flex-start" width="auto" gap="10px">
          <Name className="name">{profile.nickname}</Name>
          <Grid row width="auto">
            <LocationIcon className="icon" alt="주소" src={icon_location}></LocationIcon>
            <Location className="location">
              {profile.location} {profile.locDetail}
            </Location>
          </Grid>
          <Grid row justify="space-between" margin="5px 0 0" gap="10px">
            {interrest
              ? interrest.map((x, idx) => {
                  return (
                    <Tag size="12px" key={idx} mbti={profile.mbti} black>
                      {x}
                    </Tag>
                  );
                })
              : null}
          </Grid>
        </Grid>
        <Box margin="6px 0 34px">{profile.intro}</Box>
        {!modal ? (
          <ProfileBar Btn _onClick={MadalSet} />
        ) : (
          <ProfileBar Btn type={State} _onClick={MadalOn} />
        )}
      </Grid>
    </ProfileBottom>
  );
}
const ProfileBottom = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 37px 32px;
  background-color: #fff;
  border-radius: 50px 50px 0 0;
`;

const LocationIcon = styled.img`
  width: 18px;
`;

const Location = styled.div`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  color: #9b9b9b;
  line-height: 1.3;
`;

const Name = styled.div`
  font-size: ${props => props.theme.fontSizes.xxxl};
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.gray_2};
`;

export default ProfileBootoms;
