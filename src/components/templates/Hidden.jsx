import React from 'react';
import { Input, Grid } from '../element';
import { Box, Image } from '../element/index';
const Hidden = () => {
  return (
    <div>
      <Grid border="1px solid #000" width="768px" height="100%" padding="30px" margin="0 auto">
        <p>Default Box</p>
        <Box margin="0 0 10px 0">기본 박스입니다.</Box>
        <p>Black Box</p>
        <Box black margin="0 0 10px 0">
          블랙 박스입니다.
        </Box>
        <p>MyChat Box</p>
        <Box myChat margin="0 0 10px 0">
          안녕?
        </Box>
        <Box myChat margin="0 0 10px 0">
          반가워 나의 MBTI가 뭔지 알려줄까?
        </Box>
        <p>UserChat Box</p>
        <Box userChat margin="0 0 10px 0">
          안녕?
        </Box>
        <Box userChat margin="0 0 10px 0">
          반가워 나의 MBTI가 뭔지 알려줄까?
        </Box>
        <p>Profile Box</p>
        <Box profile margin="20px 0 10px 0">
          나의 프로필 인사말을 적어주세요!
        </Box>
        <p>Comment Box</p>
        <Box comment margin="0 0 50px 10px">
          댓글을 적어주세요!
        </Box>
        <p>Default Image</p>
        <Image margin="0 0 10px 0"></Image>
        <p>Round Image</p>
        <Image round margin="0 0 10px 0"></Image>
        <p>Border Image</p>
        <Image border margin="0 0 10px 0"></Image>
      </Grid>
    </div>
  );
};

export default Hidden;
