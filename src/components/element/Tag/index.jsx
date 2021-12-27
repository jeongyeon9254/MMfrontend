import React from 'react';
import styled from 'styled-components';
import { WhatMyColor } from './color';
import { TagBlack, TagStyle } from './module';
import Bit from '../../modules/Bit';

const iscolor = null;
const Tag = props => {
  const { children, color, mbti, Black } = props;
  const styles = { color, mbti };

  const MyBit = Bit.find(x => {
    return x.name === mbti;
  });
  console.log(MyBit);

  if (Black) {
    return (
      <TagBlack {...styles} color={MyBit.color}>
        {children}
      </TagBlack>
    );
  }
  return (
    <TagStyle {...styles} color={MyBit.color}>
      {children}
    </TagStyle>
  );
};

Tag.defaultProps = {
  color: false,
};

export default Tag;
