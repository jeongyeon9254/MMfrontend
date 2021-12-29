import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import arrUp from '../../../img/Icon/arrow_up.svg';
const ListHead = props => {
  const { Text, OnClick, boo } = props;

  return (
    <Grid list _onClick={OnClick}>
      <ListText>{Text}</ListText>
      <Arr className={boo ? 'Open' : ''} src={arrUp} alt="보낸 매칭 2개" />
    </Grid>
  );
};
const ListText = styled.p`
  font-size: 10px;
  color: #9b9b9b;
  z-index: 2;
  background-color: ${props => props.theme.colors.white};
  transition: all ease 0.3s;
`;
const Arr = styled.img`
  transition: all ease 0.3s;
  &.Open {
    transform: rotate(180deg);
  }
`;
export default ListHead;
