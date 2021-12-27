import styled from 'styled-components';

export const MyChatBox = styled.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_1)};
  border-radius: 9px;
  margin: ${props => props.margin};
  word-break: keep-all;
  word-wrap: break-word;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
`;

export const UserChatBox = styled.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_2)};
  color: ${props => props.theme.colors.white};
  border-radius: 9px;
  margin: ${props => props.margin};
  word-break: keep-all;
  word-wrap: break-word;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
`;

export const ProfileBox = styled.div`
  position: relative;
  width: ${props => props.width};
  box-sizing: border-box;
  padding: 35px 30px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_1)};
  border-radius: 9px;
  margin: ${props => props.margin};
  margin-top: 20px;
  word-break: keep-all;
  word-wrap: break-word;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.fontSizes.xl};
  font-weight: 400;
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
  position: relative;
  width: calc(100% - 8px);
  box-sizing: border-box;
  padding: 8px 14px;
  background-color: ${props => (props.color ? props.color : props.theme.colors.gray_1)};
  border-radius: 9px;
  margin: ${props => props.margin};
  margin-left: 10px;
  word-break: keep-all;
  word-wrap: break-word;
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
