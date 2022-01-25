import React from 'react';
import styled from 'styled-components';
import { BtnAddStyle, BtnBottomStyle, BtnRoundStyle, BtnTagStyle, ButtonStyle } from './module';
import { getCookie } from '../../../shared/Cookie.js';
import Bit from '../../modules/Bit';
import { Grid, Alert } from '../index';

const Button = props => {
  // const userInfo = getCookie('');
  const userInfo = { mbti: 'ENTJ' };
  const myMbti = Bit.find(x => {
    return x.name === userInfo.mbti;
  });
  const {
    shadow,
    position,
    name,
    fontcolor,
    height,
    width,
    children,
    _onClick,
    color,
    padding,
    margin,
    size,
    BtnBottom,
    BtnRound,
    BtnTag,
    BtnAdd,
    state,
    radius,
    border,
    _disabled,
    opacity,
    bottom,
  } = props;

  const styles = {
    shadow,
    bottom,
    width,
    color,
    padding,
    margin,
    size,
    height,
    fontcolor,
    radius,
    border,
    _disabled,
    opacity,
    position,
  };
  const [Alt, setAlt] = React.useState(false);

  if (BtnAdd) {
    switch (state) {
      case 'active':
        return (
          <BtnAddStyle
            name={name}
            style={{ backgroundColor: '#fff', color: '#000' }}
            {...styles}
            onClick={_onClick}
            disabled={_disabled}
          >
            {children}
          </BtnAddStyle>
        );

      default:
        return (
          <BtnAddStyle name={name} {...styles} onClick={_onClick}>
            {children}
          </BtnAddStyle>
        );
    }
  }
  const exit = () => {
    setAlt(false);
  };

  if (BtnBottom) {
    switch (state) {
      case 'Inactive':
        return (
          <>
            <BtnBottomStyle
              name={name}
              style={{ backgroundColor: '#A7A7A7' }}
              {...styles}
              onClick={() => {
                setAlt(true);
              }}
            >
              {children}
            </BtnBottomStyle>
            {Alt ? (
              <Alert check yes={exit}>
                <Grid gap="15px" padding="16px 8px 8px 24px">
                  <Title>아직 사용하지 못합니다!</Title>
                </Grid>
              </Alert>
            ) : null}
          </>
        );
      case 'Wait':
        return (
          <BtnBottomStyle
            name={name}
            style={{ backgroundColor: '#EC6464' }}
            {...styles}
            onClick={_onClick}
          >
            {children}
          </BtnBottomStyle>
        );
      default:
        return (
          <BtnBottomStyle name={name} {...styles} onClick={_onClick}>
            {children}
          </BtnBottomStyle>
        );
    }
  }

  if (BtnRound) {
    return (
      <BtnRoundStyle name={name} {...styles} onClick={_onClick}>
        {children}
      </BtnRoundStyle>
    );
  }

  if (BtnTag) {
    switch (state) {
      case 'active':
        return (
          <BtnTagStyle name={name} {...styles} onClick={_onClick}>
            {children}
          </BtnTagStyle>
        );
      case 'In':
        return (
          <BtnTagStyle name={name} {...styles} onClick={_onClick}>
            <img style={{ width: '15px', marginRight: '12px' }} src={myMbti.image} alt="" />
            {children}
          </BtnTagStyle>
        );

      default:
        return (
          <BtnTagStyle
            name={name}
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
    <ButtonStyle name={name} {...styles} onClick={_onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: null,
  color: null,
  padding: null,
  opacity: 1,
};

const Title = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

export default Button;
