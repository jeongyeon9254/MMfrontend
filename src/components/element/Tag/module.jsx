import styled from 'styled-components';

export const TagBlack = styled.p`
  display: inline-block;
  padding: 3px 9px;
  background-color: #000;
  border: ${props => props.border};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radius.tag};
`;
