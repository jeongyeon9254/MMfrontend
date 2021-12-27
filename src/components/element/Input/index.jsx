import React from 'react';
import { InputTextarea, InputNum, InputPw, InputDate, InputStyle } from './module';

const Input = props => {
  const { _type, _padding, _border, _radius, _size, _onChange, _value, _bg, _borderColor } = props;

  const styles = {
    _padding,
    _border,
    _radius,
    _size,
    _bg,
    _borderColor,
  };

  const MaxNum = el => {
    if (el.target.value.length > 6) {
      el.target.value = el.target.value.substr(0, 6);
    }
  };

  const Edelete = evt => {
    if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
      evt.preventDefault();
    }
  };

  const TagSouces = {};

  switch (_type) {
    case 'textarea':
      return (
        <InputTextarea
          placeholder="한줄소개를 작성해주세요!"
          {...styles}
          value={_value}
          onChange={_onChange}
        ></InputTextarea>
      );

    case 'date':
      return (
        <InputNum
          onKeyPress={Edelete}
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
          onKeyPress={Edelete}
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
  _bg: props => props.theme.colors.white,
  _borderColor: props => props.theme.colors.input_gray1,
};

export default Input;
