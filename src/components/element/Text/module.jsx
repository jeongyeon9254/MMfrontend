import styled from 'styled-components';

export const TextBig = styled.p`
  font-size: ${props => props.theme.fontSizes.titleSize};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;

export const TextMiddle = styled.p`
  font-size: ${props => props.theme.fontSizes.xxxl};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;

export const TextStyle = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;

export const TextSmall = styled.p`
  font-size: ${props => props.theme.fontSizes.maxSmall};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;
