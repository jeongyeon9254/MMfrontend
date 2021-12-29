import React from 'react';
import { BtnAddStyle, BtnBottomStyle, BtnRoundStyle, BtnTagStyle, ButtonStyle } from './module';
import { getCookie } from '../../../shared/Cookie.js';
import Bit from '../../modules/Bit';

const Button = props => {
  // const userInfo = getCookie('');
  const userInfo = { mbti: 'ENTJ' };
  const myMbti = Bit.find(x => {
    return x.name === userInfo.mbti;
  });
  const {
    fontcolor,
    height,
    width,
    children,
    _onClick,
    _value,
    color,
    padding,
    margin,
    size,
    BtnBottom,
    BtnRound,
    BtnTag,
    BtnAdd,
    state,
    main,
  } = props;

  const styles = {
    width,
    color,
    padding,
    margin,
    size,
    height,
    fontcolor,
  };

  if (BtnAdd) {
    switch (state) {
      case 'active':
        return (
          <BtnAddStyle
            style={{ backgroundColor: '#fff', color: '#000' }}
            {...styles}
            onClick={_onClick}
          >
            {children}
          </BtnAddStyle>
        );

      default:
        return (
          <BtnAddStyle {...styles} onClick={_onClick}>
            {children}
          </BtnAddStyle>
        );
    }
  }

  if (BtnBottom) {
    switch (state) {
      case 'Inactive':
        return (
          <BtnBottomStyle
            style={{ backgroundColor: '#A7A7A7' }}
            {...styles}
            onClick={() => {
              alert('아직 사용하지 못합니다.');
            }}
          >
            {children}
          </BtnBottomStyle>
        );
      case 'Wait':
        return (
          <BtnBottomStyle style={{ backgroundColor: '#EC6464' }} {...styles} onClick={_onClick}>
            {children}
          </BtnBottomStyle>
        );
      default:
        return (
          <BtnBottomStyle {...styles} onClick={_onClick}>
            {children}
          </BtnBottomStyle>
        );
    }
  }

  if (BtnRound) {
    return (
      <BtnRoundStyle {...styles} onClick={_onClick}>
        {children}
      </BtnRoundStyle>
    );
  }

  if (BtnTag) {
    switch (state) {
      case 'active':
        return (
          <BtnTagStyle value={_value} {...styles} onClick={_onClick}>
            {children}
          </BtnTagStyle>
        );
      case 'In':
        return (
          <BtnTagStyle value={_value} {...styles} onClick={_onClick}>
            <img style={{ width: '15px', marginRight: '12px' }} src={myMbti.image} alt="" />
            {children}
          </BtnTagStyle>
        );
      default:
        return (
          <BtnTagStyle
            value={_value}
            style={{ backgroundColor: '#F9F9F9', color: '#313131' }}
            {...styles}
            onClick={_onClick}
          >
            {children}
          </BtnTagStyle>
        );
    }
  }

  return (
    <ButtonStyle {...styles} onClick={_onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: null,
  color: null,
  padding: null,
};

export default Button;
