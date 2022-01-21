import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Box } from '../../element';
import { returnTime } from '../../../shared/Time';
function PartyMe(props) {
  const { children, data } = props;

  return (
    <Grid row width="100%" gap="7px" justify="flex-end">
      <Grid width="80%" row gap="4px" align="end" justify="end">
        <Date>{data.date}</Date>
        <Box width="80%" padding="7px 10px" black>
          <Text dangerouslySetInnerHTML={{ __html: children }}></Text>
        </Box>
      </Grid>
    </Grid>
  );
}
const Date = styled.p`
  font-size: 9px;
  color: #9b9b9b;
`;
const Text = styled.p`
  a {
    line-height: 1.5;
    color: #b9ceff;
    font-weight: normal;
  }
`;
export default PartyMe;
