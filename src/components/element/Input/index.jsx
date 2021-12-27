import React from 'react';
import { InputTextarea, InputNum, InputPw, InputDate, InputStyle } from './module';

const Input = props => {
  const { _type, _padding, _border, _radius, _size, _onChange, _value, _bg } = props;

  const styles = {
    _padding,
    _border,
    _radius,
    _size,
    _bg,
  };

  const MaxNum = el => {
    if (el.target.value.length > 6) {
      el.target.value = el.target.value.substr(0, 6);
    }
  };

  const TagSouces = {};

  switch (_type) {
    case 'textarea':
      return <InputTextarea {...styles} value={_value} onChange={_onChange}></InputTextarea>;

    case 'date':
      return (
        <InputNum
          onkeydown="javascript: return event.keyCode == 69 ? false : true"
          placeholder="생년월일 6자리 ex)910504"
          value={_value}
          onInput={MaxNum}
          onChange={_onChange}
          type="number"
          {...styles}
        ></InputNum>
      );

    case 'password':
      return <InputPw type={_type} {...styles} value={_value} onChange={_onChange}></InputPw>;

    case 'number':
      return (
        <InputNum
          onkeydown="javascript: return event.keyCode == 69 ? false : true"
          type={_type}
          {...styles}
          value={_value}
          onChange={_onChange}
        ></InputNum>
      );

    default:
      return <InputStyle {...styles} value={_value} onChange={_onChange}></InputStyle>;
  }
};

Input.defaultProps = {
  _size: props => props.theme.fontSizes.small,
};

export default Input;
