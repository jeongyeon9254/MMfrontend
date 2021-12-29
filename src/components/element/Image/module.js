import styled from 'styled-components';

export const ImageRoundStyle = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
  margin: ${props => props.margin};
  background: ${props => props.theme.colors.gray_2};
  border: ${props => props._border};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const BorderSquare = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  background: ${props => props.theme.colors.gray_1};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
