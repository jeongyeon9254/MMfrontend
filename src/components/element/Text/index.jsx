import React from 'react';
import { TextStyle, TextBig, TextMiddle, TextSmall } from './module';

const Text = props => {
  const { children, Size, align, weight } = props;

  const styles = { align, weight };

  switch (Size) {
    case 'Big':
      return <TextBig {...styles}>{children}</TextBig>;
    case 'Middle':
      return <TextMiddle {...styles}>{children}</TextMiddle>;
    case 'Small':
      return <TextSmall {...styles}>{children}</TextSmall>;
    default:
      return <TextStyle {...styles}>{children}</TextStyle>;
  }
};

Text.defaultProps = {
  color: null,
  align: 'left',
  weight: 'normal',
};

export default Text;
