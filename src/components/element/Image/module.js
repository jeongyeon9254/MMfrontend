import styled from 'styled-components';

export const ImageRoundBigStyle = styled.div`
  position: relative;
  scale: 1.2;
  border-radius: 30px;
  width: ${props => (props.width ? props.width : props.theme.interval.xl)};
`;

export const ImageRoundSmallStyle = styled.div`
  position: relative;
  scale: 1.2;
  border-radius: 30px;
`;

export const ImageStyle = styled.image`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  scale: 1.2;
  width: 100%;
  im
`;
