import styled from 'styled-components';

const common = `
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 7px;
  background-color: #fff;
  &: focus {
    outline: none;
  }
`;

export const InputStyle = styled.input`
  font-size: ${props => props._size};
  ${common}
`;

export const InputTextarea = styled.textarea`
  font-size: ${props => props._size};
  resize: none;
  ${common}
`;

export const InputPw = styled.input`
  ${common}
`;

export const InputNum = styled.input`
  ${common}
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
