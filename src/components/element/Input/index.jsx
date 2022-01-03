import React from 'react';
import {
  InputTextarea,
  InputNum,
  InputPw,
  InputDate,
  InputStyle,
  InputPostText,
  ChatInput,
  CommentInput,
} from './module';

const Input = props => {
  const {
    _type,
    _padding,
    _border,
    _radius,
    _size,
    _onChange,
    _value,
    _bg,
    _borderColor,
    _maxWidth,
    width,
    _readOnly,
    _defaultValue,
  } = props;

  const styles = {
    _padding,
    _border,
    _radius,
    _size,
    _bg,
    _borderColor,
    _maxWidth,
    width,
    _readOnly,
    _defaultValue,
  };

  const MaxNum = el => {
    if (el.target.value.length > 6) {
      el.target.value = el.target.value.substr(0, 6);
    }
  };

  const Edelete = evt => {
    if ((evt.which !== 8 && evt.which !== 0 && evt.which < 48) || evt.which > 57) {
      evt.preventDefault();
    }
  };
  const posting =
    '지금 부터 네이버 글자수 세기로 공백 포함 100자를 맞춰 보겠습니다, 아야어여오요우유으이 이 글은 100자 이내로 작성이 가능합니다, 그렇다고 합니다 얼렁 맞춰져라 빨리 맞춰저라';

  switch (_type) {
    case 'textarea':
      return (
        <InputTextarea
          placeholder="한줄소개를 작성해주세요!"
          {...styles}
          value={_value}
          onChange={_onChange}
          readOnly={_readOnly}
        ></InputTextarea>
      );
    case 'posting':
      return (
        <InputPostText
          {...styles}
          value={_value}
          onChange={_onChange}
          readOnly={_readOnly}
          placeholder={posting}
        ></InputPostText>
      );
    case 'date':
      return (
        <InputNum
          onKeyPress={Edelete}
          placeholder="생년월일 6자리 ex)910504"
          value={_value}
          onInput={MaxNum}
          onChange={_onChange}
          readOnly={_readOnly}
          type="number"
          {...styles}
        ></InputNum>
      );

    case 'password':
      return (
        <InputPw
          type={_type}
          {...styles}
          readOnly={_readOnly}
          value={_value}
          onChange={_onChange}
        ></InputPw>
      );

    case 'number':
      return (
        <InputNum
          onKeyPress={Edelete}
          type={_type}
          {...styles}
          value={_value}
          readOnly={_readOnly}
          onChange={_onChange}
        ></InputNum>
      );
    case 'chat':
      return (
        <ChatInput {...styles} value={_value} readOnly={_readOnly} onChange={_onChange}></ChatInput>
      );
    case 'comment':
      return (
        <CommentInput
          {...styles}
          value={_value}
          readOnly={_readOnly}
          onChange={_onChange}
        ></CommentInput>
      );
    default:
      return (
        <InputStyle
          {...styles}
          value={_value}
          // defaultValue={_defaultValue}
          readOnly={_readOnly}
          onChange={_onChange}
        ></InputStyle>
      );
  }
};

Input.defaultProps = {
  _size: props => props.theme.fontSizes.small,
  _bg: props => props.theme.colors.white,
  _borderColor: props => props.theme.colors.input_gray1,
  _readOnly: false,
  _defaultValue: '',
  _maxWidth: '100%',
  _onChange: () => {
    alert('읽기 전용입니다.');
  },
};

export default Input;
