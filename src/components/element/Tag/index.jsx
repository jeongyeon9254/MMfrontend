import React from 'react';
import styled from 'styled-components';
import { WhatMyColor } from './color';
import { TagBlack } from './module';

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

const TagStyle = styled.p`
  display: inline-block;
  padding: 7px 20px;
  border: 1px solid #000;
  text-align: center;
  border-color: ${props => props.color};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radius.tag};
`;

export default Tag;
