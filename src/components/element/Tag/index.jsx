import React from 'react';
import styled from 'styled-components';
import { WhatMyColor } from './color';
import { TagBlack, TagStyle } from './module';

const iscolor = null;
const Tag = props => {
  const { children, color, mbti, Black } = props;
  const styles = { color, mbti };

  if (Black) {
    return (
      <TagBlack {...styles} color={WhatMyColor(mbti)}>
        {children}
      </TagBlack>
    );
  }
  return (
    <TagStyle {...styles} color={WhatMyColor(mbti)}>
      {children}
    </TagStyle>
  );
};

Tag.defaultProps = {
  color: false,
};

export default Tag;
