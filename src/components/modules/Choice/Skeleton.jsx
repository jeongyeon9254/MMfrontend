import React from 'react';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonStyle(props) {
  const { type } = props;
  switch (type) {
    case 'List':
      return (
        <List>
          <Stack alignItems="center" direction="row" spacing={1} style={{ width: '100%' }}>
            <Skeleton variant="circular" width={52} height={52} animation="wave" />
            <Stack spacing={1} style={{ width: '80%' }}>
              <Skeleton variant="rectangular" width="50%" height={20} animation="wave" />
              <Skeleton variant="rectangular" width="100%" height={15} animation="wave" />
            </Stack>
          </Stack>
        </List>
      );
    case 'box':
      return (
        <Box>
          <Stack spacing={3}>
            <Stack alignItems="center" direction="row" spacing={1} style={{ width: '100%' }}>
              <Skeleton variant="circular" width={52} height={52} animation="wave" />
              <Stack spacing={1} style={{ width: '80%' }}>
                <Skeleton variant="rectangular" width="70%" height={20} animation="wave" />
                <Skeleton variant="rectangular" width="70%" height={15} animation="wave" />
                <Skeleton variant="rectangular" width="30%" height={15} animation="wave" />
              </Stack>
            </Stack>
            <Skeleton variant="rectangular" width="100%" height={30} animation="wave" />
          </Stack>
        </Box>
      );
    case 'chat':
      return (
        <Stack alignItems="center" direction="row" spacing={1} style={{ width: '100%' }}>
          <Skeleton variant="circular" width={52} height={52} animation="wave" />
          <Skeleton variant="rectangular" width="50%" height={50} animation="wave" />
        </Stack>
      );
    default:
      return <></>;
  }
}
const List = styled.div`
  padding: 16px 30px;
  width: 100%;
`;

const Box = styled.div`
  padding: 15px;
  width: 100%;
  background-color: #eee;
  border-radius: 6px;
`;

export default SkeletonStyle;
