import React from 'react';
import styled from 'styled-components';
import { history } from '../../../redux/configureStore';
import { Grid, Image, Box } from '../../element';

function PartyOther(props) {
  const { children, data } = props;
  const { senderImg, senderId } = props.data;
  return (
    <Grid
      row
      width="100%"
      gap="7px"
      _onClick={() => {
        history.push(`/profile/${senderId}`);
      }}
    >
      <Image round src={senderImg} width="40px" margin="0" />
      <Grid width="80%" row gap="4px" align="flex-end">
        <Box width="80%" padding="7px 10px">
          <Text dangerouslySetInnerHTML={{ __html: children }}></Text>
        </Box>
        <Date>{data.date}</Date>
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
    font-weight: normal;
  }
`;
export default PartyOther;
