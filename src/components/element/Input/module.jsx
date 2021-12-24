import styled from 'styled-components';

export const InputTextarea = styled.textarea`
  padding: ${props => props._padding};
  border: ${props => props._border};
  border-radius: ${props => props._radius};
  background-color: ${props => props._bg};
  font-size: ${props => props._size};
  resize: none;
  &: focus {
    outline: none;
  }
`;

export const InputPw = styled.input`
  padding: ${props => props._padding};
  border: ${props => props._border};
  border-radius: ${props => props._radius};
  background-color: ${props => props._bg};
  font-size: ${props => props._size};
  &: focus {
    outline: none;
  }
`;

export const InputNum = styled.input`
  padding: ${props => props._padding};
  border: ${props => props._border};
  border-radius: ${props => props._radius};
  background-color: ${props => props._bg};
  font-size: ${props => props._size};
  &: focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
