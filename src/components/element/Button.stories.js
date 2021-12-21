import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};
const Click1 = () => {
  alert('Click1');
};
const Click2 = () => {
  alert('Click2');
};
const Click3 = () => {
  alert('Click3');
};

export const WhiteButton = () => {
  return <Button _onClick={Click1}>ssss</Button>;
};

export const RedButton = () => <Button _onClick={Click2}>가나다</Button>;

export const BlueButton = () => <Button _onClick={Click3}>124</Button>;
