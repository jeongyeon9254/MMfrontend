import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Box } from '../../element';
import { returnTime } from '../../../shared/Time';
function PartyMe(props) {
  const { children, data } = props;
  const diffTime = returnTime(data.date);
  return (
    <Grid row width="100%" gap="7px" justify="flex-end">
      <Grid width="80%" row gap="4px" align="end" justify="end">
        <Date>{diffTime}</Date>
        <Box width="80%" padding="7px 10px" black>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
const Date = styled.p`
  font-size: 9px;
  color: #9b9b9b;
`;
export default PartyMe;
