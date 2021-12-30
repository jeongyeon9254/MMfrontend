import React from 'react';
import { Image, Grid, Box } from '../../element';

function UserPre(props) {
  const { mbti, nickname, profileImg } = props;
  return (
    <Grid row gap="7px">
      <Image round width="40px" margin="0px" mbti={mbti} src={profileImg} />
      <Box width="65%" padding="7px 11px">
        안녕하세요~! 잘부탁드립니다, {nickname}입니다!
      </Box>
    </Grid>
  );
}

export default UserPre;
