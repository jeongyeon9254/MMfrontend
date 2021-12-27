import React from 'react';
import styled from 'styled-components';
import arrow_left from '../../../img/Icon/arrow_left.svg';

// JS
import { history } from '../../../redux/configureStore';

const Header = props => {
  const { children, main } = props;

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
      <h2>{children}</h2>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  padding: 15px 25px;
  height: 49px;
  border-bottom: 1px solid #eee;
  h2 {
    font-size: ${props => props.theme.fontSizes.xxl};
    color: ${props => props.theme.colors.gray_2};
    display: block;
    margin: ${props => (props.main ? 'null' : '0 auto')};
  }
  .backBtn {
    height: 24px;
    position: absolute;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

export default Header;
