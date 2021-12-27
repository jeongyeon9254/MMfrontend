import styled from 'styled-components';

export const BtnTextStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors)};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnBottomStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  box-sizing: border-box;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.14);
  border: none;
  width: 315px;
  height: 50px;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.btnBottom)};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 52px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.lg)};
`;

export const BtnIconStyle = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: 62px;
  height: 62px;
  text-align: center;
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 10px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export const BtnRoundStyle = styled.button`
  color: ${props => (props.fontcolor ? props.fontcolor : props.theme.colors.white)};
  box-sizing: border-box;
  width: 87px;
  height: 87px;
  text-align: center;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.33);
  border: none;
  background-color: ${props => (props.color ? props.color : props.theme.colors.btnBottom)};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 45px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.small)};
`;

export const BtnTagStyle = styled.button`
  box-sizing: border-box;
  width: 63px;
  height: 27px;
  line-height: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 700;
  background-color: ${props => (props.color ? props.color : props.theme.colors.btnTag)};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 61px;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.maxSmall)};
`;
