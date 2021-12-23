import React from 'react';
import styled from 'styled-components';
import { TextBig, TextMiddle } from './module';

const Text = props => {
  const { children, Big, middle, align, weight } = props;

  const styles = { align, weight };

  if (Big) {
    return <TextBig {...styles}>{children}</TextBig>;
  }

  return <TextStyle {...styles}>{children}</TextStyle>;
};

Text.defaultProps = {
  color: null,
  align: 'left',
  weight: 'normal',
};

const TextStyle = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;

export default Text;
