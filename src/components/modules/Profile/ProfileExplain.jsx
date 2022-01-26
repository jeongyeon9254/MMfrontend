import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../../redux/modules/user';

import { MymbtiInfo } from '../Myinfo/index';
import { Grid, Tag } from '../../element';
import { Mybit } from '../Bit';

function ProfileExplain() {
  const [Open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.list);
  const Bit = profile.mbti ? Mybit(profile.mbti) : '';
  const Characteristics = Bit.Characteristics;

  const OpenClick = () => {
    setOpen(!Open);
    dispatch(userActions.AddMyinfoDB());
  };

  return (
    <ProfileExplainBox>
      <Grid row width="100%" align="center" gap="40px">
        <Grid row justify="space-between">
          <Title>{profile.affinity}</Title> <BlackIcon src={Bit.ImageWhite} />
        </Grid>
        <Grid gap="14px">
          <Grid row gap="6px">
            <Tag bg="#fff" size="12px" padding="6px 16px" mbti={profile.mbti} black shadow>
              <Grid row align="center" gap="4px">
                <MbtiIcon src={Bit.ImageBlack} /> <Mbtitext>{profile.mbti}</Mbtitext>
              </Grid>
            </Tag>
            {Characteristics
              ? Characteristics.map((x, idx) => {
                  return (
                    <div key={idx}>
                      <Tag
                        bg="#fff"
                        size="12px"
                        padding="6px 16px"
                        mbti={profile.mbti}
                        black
                        shadow
                      >
                        <Mbtitext>{x}</Mbtitext>
                      </Tag>
                    </div>
                  );
                })
              : ''}
          </Grid>
          <Contants>{profile.detail}</Contants>
          <ClickTxt onClick={OpenClick}>
            <p>나랑 왜 잘맞을까? MBTI 설명 보러 가기</p>
          </ClickTxt>
          <MymbtiInfo mbti={profile.mbti} Open={Open} _onClick={OpenClick}></MymbtiInfo>
        </Grid>
      </Grid>
    </ProfileExplainBox>
  );
}
const ProfileExplainBox = styled.div`
  padding: 26px 30px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 142px;
`;

const Hide = styled.div`
  width: 100%;
  height: 17px;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  overflow: hidden;
`;

const MbtiIcon = styled.img`
  height: 14px;
`;

const Mbtitext = styled.span`
  font-size: 12px;
  color: #3f3f41;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

const Title = styled.h3`
  width: 50%;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  word-break: keep-all;
`;

const Contants = styled.div`
  font-size: 14px;
  color: #fff;
  word-break: keep-all;
  line-height: 1.3;
`;

const ClickTxt = styled.div`
  font-size: 14px;
  color: #c0c0c0;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
  position: relative;
`;

const BlackIcon = styled.img`
  height: 60px;
`;
export default ProfileExplain;
