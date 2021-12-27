import React from 'react';
import styled from 'styled-components';
import { TagBlack, TagStyle } from './module';
import Bit from '../../modules/Bit';
import Grid from '../Grid';
const Tag = props => {
  const { children, color, mbti, _type, icon } = props;
  const styles = { color, mbti };

  const MyBit = Bit.find(x => {
    return x.name === mbti;
  });

  switch (_type) {
    case 'black':
      return (
        <TagBlack {...styles} color={MyBit.color}>
          <Grid row color="transparent !important" gap="5px">
            {icon ? <Iconimg src={MyBit.image} /> : ''}
            <p>{children}</p>
          </Grid>
        </TagBlack>
      );
    case 'myDefult':
      return (
        <TagBlack {...styles} color={MyBit.color}>
          <Grid row color="transparent !important" gap="5px">
            {icon ? <Iconimg src={MyBit.image} /> : ''}
            <p>{children}</p>
          </Grid>
        </TagBlack>
      );
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
  color: false,
};
const Iconimg = styled.img`
  width: 11px;
`;
export default Tag;
