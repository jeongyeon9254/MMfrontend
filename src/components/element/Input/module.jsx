import styled from 'styled-components';

export const InputBig = styled.p`
  font-size: ${props => props.theme.fontSizes.titleSize};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;

export const InputMiddle = styled.p`
  font-size: ${props => props.theme.fontSizes.xxxl};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
`;
