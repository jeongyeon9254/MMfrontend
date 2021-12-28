import styled from 'styled-components';

export const BtnAddStyle = styled.button`
  //색 조정
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.btnTag)};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
  text-align: center;
  // 박스 설정
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${props => props.width};
  border: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 7px;
  // 마우스 설정
  cursor: pointer;
`;

export const BtnBottomStyle = styled.button`
  //색 조정
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.lg)};
  text-align: center;
  // 박스 설정
  box-sizing: border-box;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.14);
  width: ${props => props.width};
  border: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 52px;
  // 마우스 설정
  cursor: pointer;
`;

export const BtnIconStyle = styled.button`
  //색 조정
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.black)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.Icon)};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.maxSmall)};
  text-align: center;
  line-height: 1px;
  font-weight: 600;
  // 박스 설정
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${props => props.width};
  border: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 6px;
  // 마우스 설정
  cursor: pointer;
`;

export const BtnRoundStyle = styled.button`
  //색 조정
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.small)};
  text-align: center;
  // 박스 설정
  box-sizing: border-box;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.33);
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 45px;
  // 마우스 설정
  cursor: pointer;
`;

export const BtnTagStyle = styled.button`
  //색 조정
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.black)};
  background-color: ${props => (props.color ? props.color : '#F9F9F9')};
  // font 설정
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.maxSmall)};
  text-align: center;
  font-weight: 700;
  line-height: 1;
  // 박스 설정
  width: ${props => props.width};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin: ${props => props.margin};
  padding: ${props => (props.padding ? props.padding : '6px 20px')};
  border-radius: 61px;
  // 마우스 설정
  cursor: pointer;
`;
