import React from 'react';
import styled from 'styled-components';
import arrow_left from '../../../img/Icon/arrow_left.svg';
import icon_search from '../../../img/Icon/icon_search.svg';
// JS
import { history } from '../../../redux/configureStore';

const Header = props => {
  const { children, main, chat, post } = props;

  const styles = {
    main,
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <HeaderStyle {...styles} height="50px">
      {main ? null : (
        <div className="backBtn" onClick={goBack}>
          <img alt="뒤로가기 버튼" src={arrow_left}></img>
        </div>
      )}
      <TiTle>{children}</TiTle>
      {chat ? <Search src={icon_search} /> : ''}
      {post ? <Exit>방 나가기</Exit> : chat ? '' : <Null></Null>}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  max-width: 375px;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  padding: 15px 23px;
  border-bottom: 1px solid #eee;
  background-color: ${props => props.theme.colors.white};
  .backBtn {
    height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
const TiTle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.gray_2};
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
