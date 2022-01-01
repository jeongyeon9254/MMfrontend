import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import arrow_left from '../../../img/Icon/arrow_left.svg';
import arrow_left_w from '../../../img/Icon/arrow_left_w.svg';
import icon_search from '../../../img/Icon/icon_search.svg';
import Phone_head from '../../../img/Icon/phone_head.png';
import Phone_head_w from '../../../img/Icon/phone_head_w.png';
// JS
import { history } from '../../../redux/configureStore';
import { useDispatch } from 'react-redux';
import { actionCreators as mainActions } from '../../../redux/modules/main';

const Header = props => {
  const { children, main, chat, post, point, _on, bg, white } = props;

  const dispatch = useDispatch();

  const styles = {
    main,
    point,
    bg,
    white,
  };

  const goBack = () => {
    history.goBack();
    dispatch(mainActions.reset());
  };

  return (
    <HeaderStyle {...styles} height="50px">
      <Grid>
        <img style={{ width: '100%' }} src={white ? Phone_head_w : Phone_head} alt="" />
      </Grid>
      <Grid row>
        {main ? null : (
          <div
            className="backBtn"
            onClick={() => {
              _on ? _on() : goBack();
            }}
          >
            <img alt="뒤로가기 버튼" src={white ? arrow_left_w : arrow_left}></img>
          </div>
        )}
        <TiTle {...styles}>{children}</TiTle>
        {chat ? <Search src={icon_search} /> : ''}
        {post ? <Exit>방 나가기</Exit> : chat ? '' : <Null></Null>}
      </Grid>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  max-width: 377px;
  position: ${props => (props.point ? props.point : 'fixed')};
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 23px 15px;
  border-radius: 30px 30px 0px 0px;
  border-bottom: ${props => (props.white ? '0px' : '1px solid #eee')};
  background-color: ${props => (props.bg ? props.bg : props.theme.colors.white)};
  z-index: 99;
  gap: 13px;
  .backBtn {
    height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
const TiTle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => (props.white ? '#fff' : props.theme.colors.gray_2)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Null = styled.div`
  height: 24px;
  width: 24px;
`;
const Exit = styled.div`
  font-size: 14px;
  color: #4e4e4e;
`;
const Search = styled.img`
  height: 24px;
  width: 24px;
`;
export default Header;
