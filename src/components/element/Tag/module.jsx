import styled from 'styled-components';

export const TagBlack = styled.div`
  display: inline-block;
  padding: 4px 9px;
  background-color: #000;
  border: ${props => props.border};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radius.tag};
`;

export const TagStyle = styled.div`
  display: inline-block;
  padding: 7px 20px;
  border: 1px solid #000;
  text-align: center;
  border-color: ${props => props.color};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radius.tag};
`;
