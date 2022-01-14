import styled from 'styled-components';

export const BtnAddStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => (props.padding ? props.padding : '14px')};
  border-radius: ${props => (props.radius ? props.radius : '7px')};
  text-align: center;
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-top: 1px solid #eee;
`;

export const BtnBottomStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  font-size: ${props => props.theme.fontSizes.lg};
  margin: ${props => props.margin};
  padding: 16px;
  width: ${props => props.width};
  border-radius: 30px;
  text-align: center;
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  border: none;
  cursor: pointer;
  font-weight: 500;
  position: ${props => (props.position ? props.position : 'fixed')};
  bottom: ${props => (props.bottom ? props.bottom : '44px')};
`;

export const BtnRoundStyle = styled.button`
  //색 조정
  color: ${props => props.theme.colors.white};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.small)};
  text-align: center;
  // 박스 설정
  box-sizing: border-box;
  box-shadow: ${props => (props.shadow ? props.shadow : '4px 6px 4px rgba(0, 0, 0, 0.33)')};
  width: ${props => props.width};
  height: ${props => props.width};
  border: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 45px;
  // 마우스 설정
  cursor: pointer;
`;

export const BtnTagStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => props.theme.colors.gray_2};
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.small)};
  text-align: center;
  width: ${props => props.width};
  box-sizing: border-box;
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  border: none;
  margin: ${props => props.margin};
  padding: 7px 20px;
  border-radius: 61px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const ButtonStyle = styled.button`
  padding: ${props => props.padding};
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => props.margin};
  width: 100%;
  box-sizing: border-box;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
  border: ${props => props.border};
  border-radius: ${props => (props.radius ? props.radius : 0)};
  opacity: ${props => (props.opacity ? props.opacity : 1)};
`;
