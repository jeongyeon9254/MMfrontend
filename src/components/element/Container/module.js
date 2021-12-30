import styled from 'styled-components';
import Phone from '../../../img/Icon/phone.png';

export const ImgBg = styled.div`
  background-image: url(${Phone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 876px;
  width: 441px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 377px;
  max-height: 784px;
  height: 100%;
  padding-top: 55px;
  padding-bottom: 89px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0px 0px 32px 32px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 63px;
  transform: translateX(-50%);
`;
