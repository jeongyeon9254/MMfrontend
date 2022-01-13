import React from 'react';
import styled from 'styled-components';

// Component
import { Grid, Image, Tag } from '../components/element/index';

const Skeleton = () => {
  // 페이지 네이션 사용

  return (
    <SkeletonBox>
      <Grid borderTop="1px solid #E8E8E8">
        <Grid width="100%" padding="18px 30px" row gap="20px">
          <div style={{ overflow: 'hidden', borderRadius: '50%' }}>
            <Image width="52px" margin="0"></Image>
          </div>
          <Grid width="70%" gap="10px" justify="center">
            <Grid width="50%" height="15px" color="#e3e3e3"></Grid>
            <Grid width="30%" height="15px" color="#e3e3e3"></Grid>
          </Grid>
        </Grid>
        <Image></Image>
        <Grid width="100%" gap="10px" justify="center" padding="18px 30px">
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
        </Grid>
      </Grid>
      <Grid borderTop="1px solid #E8E8E8">
        <Grid width="100%" padding="18px 30px" row gap="20px">
          <div style={{ overflow: 'hidden', borderRadius: '50%' }}>
            <Image width="52px" margin="0"></Image>
          </div>
          <Grid width="70%" gap="10px" justify="center">
            <Grid width="50%" height="15px" color="#e3e3e3"></Grid>
            <Grid width="30%" height="15px" color="#e3e3e3"></Grid>
          </Grid>
        </Grid>
        <Image></Image>
        <Grid width="100%" gap="10px" justify="center" padding="18px 30px">
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
          <Grid width="100%" height="15px" color="#e3e3e3"></Grid>
        </Grid>
      </Grid>
    </SkeletonBox>
  );
};

const SkeletonBox = styled.div`
  width: 100%;
  z-index: 99;
  height: 100vh;
  position: fixed;
  background: #fff;
`;

export default Skeleton;
