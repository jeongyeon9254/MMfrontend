import styled from 'styled-components';

export const RowGridStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch ')};
  gap: ${props => (props.gap ? props.gap : '0')};
  border-top: ${props => props.borderTop};
  border-bottom: ${props => props.borderBot};
`;
