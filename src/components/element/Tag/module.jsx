import styled from 'styled-components';

export const TagBlack = styled.div`
  display: inline-block;
  padding: ${props => (props.padding ? props.padding : '4px 9px')};
  background-color: #000;
  border: ${props => props.border};
  color: ${props => props.color};
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.maxSmall)};
  border-radius: ${props => props.theme.radius.tag};
  p {
    line-height: 1.1;
  }
`;

export const TagStyle = styled.div`
  display: inline-block;
  padding: ${props => (props.padding ? props.padding : '7px 20px')};
  border: 1px solid #000;
  text-align: center;
  border-color: ${props => props.color};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSizes.extraSmall};
  border-radius: ${props => props.theme.radius.tag};
  height: ${props => props.height};
`;
