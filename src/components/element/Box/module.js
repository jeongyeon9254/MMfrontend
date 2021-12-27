import styled from 'styled-components';

export const ChatBox = styled.div`
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: ${props => (props.color ? props.theme.color.black : props.theme.colors.gray_1)};
  border-radius: 9px;
  margin: ${props => props.margin};
`;
