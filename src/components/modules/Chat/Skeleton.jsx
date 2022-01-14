import React from 'react';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonChat(props) {
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

export default SkeletonChat;
