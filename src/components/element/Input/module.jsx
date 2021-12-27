import styled from 'styled-components';

const common = `
  padding: 12px 16px;
  border-radius: 7px;
  width:100%;
  box-sizing: border-box;
  &: focus {
    outline: none;
  }
`;

export const InputStyle = styled.input`
  border: 1px solid ${props => props._borderColor};
  background-color: ${props => props._bg};
  font-size: ${props => props._size};
  ${common}
`;

export const InputTextarea = styled.textarea`
  ${common}
  font-size: ${props => props._size};
  resize: none;
  height: 85px !important;
  border: 0px;
  background-color: ${props => props.theme.colors.input_gray2};
  color: ${props => props.theme.colors.input_gray3};
`;

export const InputPw = styled.input`
  border: 1px solid ${props => props._borderColor};
  background-color: ${props => props._bg};
  ${common}
`;

export const InputNum = styled.input`
  border: 1px solid ${props => props._borderColor};
  background-color: ${props => props._bg};
  ${common}
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
