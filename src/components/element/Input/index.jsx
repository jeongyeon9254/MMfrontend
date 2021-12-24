import React from 'react';
import styled from 'styled-components';
import { InputTextarea, InputNum, InputPw, InputDate } from './module';
const Input = props => {
  const { _type, _padding, _border, _radius, _size, _onChange, _value } = props;

  const styles = {
    _padding,
    _border,
    _radius,
    _size,
  };
  const MaxNum = el => {
    if (el.target.value.length > 6) {
      el.target.value = el.target.value.substr(0, 6);
    }
  };
  switch (_type) {
    case 'textarea':
      return <InputTextarea {...styles} value={_value} onChange={_onChange}></InputTextarea>;
    case 'date':
      return (
        <InputNum
          placeholder="생년월일 6자리 ex)910504"
          value={_value}
          onChange={el => {
            MaxNum(el);
            _onChange(el);
          }}
          type="number"
          {...styles}
        ></InputNum>
      );
    case 'password':
      return <InputPw type={_type} {...styles} value={_value} onChange={_onChange}></InputPw>;
    case 'number':
      return <InputNum type={_type} {...styles} value={_value} onChange={_onChange}></InputNum>;
    default:
      return <InputStyle {...styles} value={_value} onChange={_onChange}></InputStyle>;
  }
};

Input.defaultProps = {
  _padding: '12px 16px',
  _border: '1px solid #000',
  _radius: '7px',
  _size: props => props.theme.fontSizes.small,
  _outline: '0px',
};

const InputStyle = styled.input`
  padding: ${props => props._padding};
  border: ${props => props._border};
  border-radius: ${props => props._radius};
  font-size: ${props => props._size};
  ontline: ${props => props._outline};
  &: focus {
    outline: none;
  }
`;

export default Input;
