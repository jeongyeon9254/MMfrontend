import styled from 'styled-components';
import Phone from '../../../img/Icon/phone.png';

export const ImgBg = styled.div`
  background-image: url(${Phone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 876px;
  width: 427px;
  position: absolute;
  left: 62%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1050px) {
    left: 47%;
    background-image: none;
    height: 100%;
  }
  @media only screen and (max-width: 450px) {
    background-image: none;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }
`;
export const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 377px;
  max-height: 828px;
  height: 100%;
  padding-top: 82px;
  padding-bottom: 89px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 32px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 21px;
  transform: translateX(-50%);
  @media only screen and (max-width: 1050px) {
    top: 47%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 450px) {
    position: absolute;
    max-width: 100%;
    max-height: 828px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    transform: none;
    border-radius: 0px;
    padding: 47px 0 87px 0;
  }
`;
