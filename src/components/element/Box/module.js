import styled from 'styled-components';

export const BlackBox = styled.div`
  box-sizing: border-box;
  word-break: keep-all;
  word-wrap: break-word;
  border-radius: 9px;
  font-weight: 500;
  // props Css
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  // theme Css
  background-color: ${props => props.theme.colors.gray_2};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
  height: ${props => props.height};
`;

export const MyChatBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: auto;
  max-width: 70%;
  padding: 8px 10px;
  border-radius: 9px;
  font-weight: 500;
  word-break: keep-all;
  word-wrap: break-word;
  // props Css
  margin: ${props => props.margin};
  // theme Css
  background-color: ${props => props.theme.colors.gray_1};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
`;

export const UserChatBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: auto;
  max-width: 70%;
  padding: 8px 10px;
  border-radius: 9px;
  font-weight: 500;
  word-break: keep-all;
  word-wrap: break-word;
  // props Css
  margin: ${props => props.margin};
  // theme Css
  background-color: ${props => props.theme.colors.gray_2};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
`;

export const ProfileBox = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 35px 30px;
  border-radius: 9px;
  margin-top: 20px;
  font-weight: 400;
  word-break: keep-all;
  word-wrap: break-word;
  // props Css
  width: ${props => props.width};
  margin: ${props => props.margin};
  // theme Css
  background-color: ${props => props.theme.colors.gray_1};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};

  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 25px solid #e3e3e3;
    border-radius: 10px;
    content: '';
    position: absolute;
    top: -17px;
    left: 0;
  }
`;

export const CommentBox = styled.div`
  box-sizing: border-box;
  width: calc(100% - 8px);
  position: relative;
  padding: 8px 14px;
  border-radius: 9px;
  margin-left: 10px;
  word-break: keep-all;
  word-wrap: break-word;
  // props Css
  margin: ${props => props.margin};
  // theme Css
  background-color: ${props => props.theme.colors.gray_1};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
  font-weight: 400;

  &:after {
    border-top: 15px solid #e3e3e3;
    border-left: 12px solid transparent;
    border-right: 10px solid #e3e3e3;
    border-bottom: 0px solid #fff;
    border-radius: 10px;
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
  }
`;
