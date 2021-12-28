import styled from 'styled-components';

const common = `
text-align: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: none;
cursor: pointer;
font-weight: 500;
`;

export const BtnAddStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 7px;
  ${common};
  border-top: 1px solid #eee;
`;

export const BtnBottomStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => props.theme.colors.gray_2};
  font-size: ${props => props.theme.fontSizes.lg};
  margin: ${props => props.margin};
  padding: 16px;
  width: 100%;
  border-radius: 30px;
  ${common};
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
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.33);
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin: ${props => props.margin};
  padding: ${props => (props.padding ? props.padding : '6px 20px')};
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
`;
