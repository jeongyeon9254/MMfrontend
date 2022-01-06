import styled from 'styled-components';

export const Yes = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: 262626;
  cursor: pointer;
`;

export const No = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: #ec6464;
  cursor: pointer;
`;
