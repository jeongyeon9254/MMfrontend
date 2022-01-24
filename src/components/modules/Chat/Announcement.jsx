import React from 'react';
import styled from 'styled-components';
import arrow_back_ios from '../../../img/Icon/arrow_back_ios_new.svg';
import arrow_back from '../../../img/Icon/arrow_back.svg';
import { history } from '../../../redux/configureStore';
import { Grid, Box, Button } from '../../element';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as MatAction } from '../../../redux/modules/matching';

function Announcement(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(MatAction.getMatchingListCheckDB());
    return () => {
      dispatch(MatAction.resetAction());
    };
  }, []);

  const { bg, fontcolor, ws } = props;
  const styles = { fontcolor };
  const Send = useSelector(state => state.matching.ListSend);
  const Receive = useSelector(state => state.matching.ListReceive);
  const num = Send && Receive ? Send.length + Receive.length : 0;

  return (
    <Grid padding="15px 30px 7px" Zindex="9999">
      <Button
        radius="40px"
        padding="13px 16px"
        color={bg ? bg : '#F3D7D7'}
        radius="7px"
        border="0px"
        opacity="0.6"
        _onClick={() => {
          history.push('/choice');
        }}
      >
        <Grid row justify="space-between" align="center">
          <Text {...styles}>현재 {num}건의 오고 간 매칭 신청이 있습니다.</Text>
          <img src={ws ? arrow_back : arrow_back_ios} alt="" />
        </Grid>
      </Button>
    </Grid>
  );
}

const Text = styled.span`
  color: ${props => (props.fontcolor ? props.fontcolor : '#ec6464')};
  font-size: 15px;
`;
const AlertBar = styled.div`
  z-index: 999;
`;
export default Announcement;
