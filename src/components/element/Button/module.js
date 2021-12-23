import styled from 'styled-components';

export const RedButtonStyle = styled.button`
  width: ${props => props.width};
  background-color: ${props => (props.color ? props.color : props.theme.colors.green_1)};
  padding: ${props => props.padding};
`;
