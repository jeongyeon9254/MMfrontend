import React from 'react';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonStyle(props) {
  const { type } = props;
  switch (type) {
    case 'List':
      return (
        <Stack alignItems="center" direction="row" spacing={1} style={{ width: '100%' }}>
          <Skeleton variant="circular" width={52} height={52} animation="wave" />
          <Stack spacing={1} style={{ width: '70%' }}>
            <Skeleton variant="rectangular" width="100%" height={20} animation="wave" />
            <Skeleton variant="rectangular" width="100%" height={15} animation="wave" />
          </Stack>
        </Stack>
      );
    default:
      return <></>;
  }
}

export default SkeletonStyle;
