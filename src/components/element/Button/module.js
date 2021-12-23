import styled from 'styled-components';

export const BtnTextStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.margins.base)};
  padding: ${props => (props.padding ? props.padding : props.theme.paddings.base)};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnBottomStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.margins.base)};
  padding: ${props => (props.padding ? props.padding : props.theme.paddings.base)};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnIconStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.margins.base)};
  padding: ${props => (props.padding ? props.padding : props.theme.paddings.base)};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnRoundStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.margins.base)};
  padding: ${props => (props.padding ? props.padding : props.theme.paddings.base)};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnTagStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.margins.base)};
  padding: ${props => (props.padding ? props.padding : props.theme.paddings.base)};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;
