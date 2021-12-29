import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import arrUp from '../../../img/Icon/arrow_up.svg';
const ListHead = props => {
  const { Text } = props;

  return (
    <Grid list>
      <ListText>{Text}</ListText>
      <img src={arrUp} alt="받은 매칭 2개" />
    </Grid>
  );
};
const ListText = styled.p`
  font-size: 10px;
  color: #9b9b9b;
`;
export default ListHead;
