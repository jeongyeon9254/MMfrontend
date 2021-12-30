import styled from 'styled-components';

const common = `
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
  max-width: ${props => props._maxWidth};
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '7px')};
  ${common}
`;

export const InputTextarea = styled.textarea`
  ${common}
  font-size: ${props => props._size};
  resize: none;
  height: 85px !important;
  border: 0px;
  line-height: 1.5;
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '7px')};
  max-width: ${props => props._maxWidth};
  background-color: ${props => props.theme.colors.Tagbg};
  color: ${props => props.theme.colors.input_gray3};
`;
export const InputPostText = styled.textarea`
  border: 0px;
  background-color: ${props => props._bg};
  height: 254px;
  line-height: 1.5;
  resize: none;
  max-width: ${props => props._maxWidth};
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '7px')};
  ${common}
`;

export const InputPw = styled.input`
  border: 1px solid ${props => props._borderColor};
  background-color: ${props => props._bg};
  max-width: ${props => props._maxWidth};
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '7px')};
  ${common}
`;

export const InputNum = styled.input`
  border: 1px solid ${props => props._borderColor};
  background-color: ${props => props._bg};
  max-width: ${props => props._maxWidth};
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '7px')};
  ${common}
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ChatInput = styled.input`
  ${common}
  border-width: 1px;
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '30px')};
  border-color: ${props => props.theme.colors.gray_2};
  max-width: ${props => props._maxWidth};
`;

export const CommentInput = styled.input`
  ${common}
  background-color: #f4f4f4;
  border: 0px;
  border-width: 1px;
  color: #a4a4a4;
  padding: ${props => (props._padding ? props._padding : '12px 16px')};
  border-radius: ${props => (props._radius ? props._radius : '30px')};
  max-width: ${props => props._maxWidth};
`;
