import React from 'react';
import styled from 'styled-components';
import { TagBlack, TagStyle } from './module';
import Bit from '../../modules/Bit';
import Grid from '../Grid';
const Tag = props => {
  const {
    _onClick,
    children,
    color,
    mbti,
    _type,
    icon,
    bg,
    _src,
    state,
    size,
    small,
    padding,
    height,
  } = props;
  const styles = { color, mbti, bg, state, padding, small, size, height };
  const MyBit = Bit.find(x => {
    return x.name === mbti;
  });
  switch (_type) {
    case 'black':
      return (
        <TagBlack {...styles} color={MyBit ? MyBit.color : null}>
          <Grid row color="transparent !important" gap="5px" justify="center">
            {icon ? <Iconimg src={MyBit.image} /> : ''}
            <p>{children}</p>
          </Grid>
        </TagBlack>
      );
    case 'myDefult':
      return (
        <TagBlack {...styles} color={MyBit ? MyBit.color : null}>
          <Grid row color="transparent !important" gap="5px">
            {icon ? <Iconimg src={MyBit.image} /> : ''}
            <p>{children}</p>
          </Grid>
        </TagBlack>
      );
    case 'Btn':
      switch (state) {
        case 'active':
          return (
            <TagBtn {...styles} onClick={_onClick} style={{ backgroundColor: '#3F3F41' }}>
              <div>
                {small ? (
                  <>
                    <img style={{ transform: 'scale(0.87)' }} src={_src} alt={children} />
                    <p>{children}</p>
                  </>
                ) : (
                  <>
                    <img src={_src} alt={children} />
                    <p>{children}</p>
                  </>
                )}
              </div>
            </TagBtn>
          );

        default:
          return (
            <TagBtn {...styles} onClick={_onClick}>
              <div>
                {small ? (
                  <>
                    <img style={{ transform: 'scale(0.87)' }} src={_src} alt={children} />
                    <p>{children}</p>
                  </>
                ) : (
                  <>
                    <img src={_src} alt={children} />
                    <p>{children}</p>
                  </>
                )}
              </div>
            </TagBtn>
          );
      }

    default:
      return (
        <TagStyle {...styles} color={MyBit.color}>
          <Grid row gap="5px" color="transparent !important">
            {icon ? <Iconimg src={MyBit.image} /> : ''}
            <p>{children}</p>
          </Grid>
        </TagStyle>
      );
  }
};

Tag.defaultProps = {
  color: '#000',
  bg: false,
  size: null,
  state: '',
  small: false,
};
const Iconimg = styled.img`
  width: 11px;
`;

const TagBtn = styled.button`
  color: ${props => (props.state === 'active' ? props.color : props.theme.colors.gray_2)};
  background-color: ${props => (props.bg ? props.bg : props.theme.colors.Tagbg)};
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.maxSmall)};
  width: ${props => (props.small ? '56px' : '62px')};
  height: ${props => (props.small ? '56px' : '62px')};
  text-align: center;
  line-height: 1px;
  font-weight: 600;
  position: relative;
  border: 0px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export default Tag;
