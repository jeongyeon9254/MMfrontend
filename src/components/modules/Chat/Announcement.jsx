import React from 'react';
import styled from 'styled-components';
import arrow_back_ios from '../../../img/Icon/arrow_back_ios_new.svg';
import { history } from '../../../redux/configureStore';
import { Grid, Box, Button } from '../../element';
function Announcement(props) {
  const { num } = props;
  return (
    <Grid padding="15px 30px 7px">
      <Button
        radius="40px"
        padding="13px 16px"
        bg="#F3D7D7"
        color="#F3D7D7"
        radius="7px"
        border="0px"
        _onClick={() => {
          history.push('/choice');
        }}
      >
        <Grid row justify="space-between" align="center">
          <Text>현재 {num ? num : 0}건의 오고 간 매칭 신청이 있습니다.</Text>
          <img src={arrow_back_ios} alt="" />
        </Grid>
      </Button>
    </Grid>
  );
}

const Text = styled.span`
  color: #ec6464;
  font-size: 15px;
`;
export default Announcement;
