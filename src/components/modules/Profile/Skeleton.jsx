import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import Skeleton from '@mui/material/Skeleton';

function SkeletonFile(props) {
  const { type } = props;
  switch (type) {
    case 'photo':
      return (
        <Grid width="100%" gap="20px">
          <List>
            <Grid row gap="20px" align="center" justify="space-between">
              <Skeleton variant="circular" width="90px" height="90px" animation="wave" />
              <Skeleton variant="rectangular" width="60%" height={100} animation="wave" />
            </Grid>
          </List>
          <List>
            <Skeleton variant="rectangular" width="100%" height={100} animation="wave" />
          </List>
        </Grid>
      );

    case 'head':
      return (
        <Grid gap="10px">
          <Grid row gap="10px" align="center" justify="space-between">
            <Skeleton variant="rectangular" width="65%" height={80} animation="wave" />
            <Skeleton variant="circular" width={70} height={70} animation="wave" />
          </Grid>
          <Grid row gap="10px" align="center">
            <Skeleton variant="rectangular" width="60px" height={30} animation="wave" />
            <Skeleton variant="rectangular" width="70px" height={30} animation="wave" />
            <Skeleton variant="rectangular" width="80px" height={30} animation="wave" />
          </Grid>
          <Skeleton variant="rectangular" width="100%" height={100} animation="wave" />
        </Grid>
      );
    default:
      return <></>;
  }
}
const List = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0 auto;
`;

export default SkeletonFile;
