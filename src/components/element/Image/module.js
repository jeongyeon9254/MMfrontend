import styled from 'styled-components';

export const ImageRoundStyle = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${props => props.width};
  margin: ${props => props.margin};
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const BorderSquare = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
