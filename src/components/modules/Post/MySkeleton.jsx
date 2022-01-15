import React from 'react';
import styled from 'styled-components';
import { Grid, Image } from '../../element/index';

const MySkeleton = props => {
  return (
    <Box>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
      <Grid row wrap="nowrap" gap="20px" color="#EEEEEE">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid justify="space-around">
          <Grid margin="6px 0px 0px 0px" width="90%" height="50%" color="#E3E3E3" />
          <Grid width="90%" height="20%" color="#E3E3E3" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default MySkeleton;
