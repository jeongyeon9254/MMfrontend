import styled from 'styled-components';

export const RowGridStyle = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.color ? props.color : props.theme.colors.width)};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items ${props => (props.align ? props.align : 'stretch ')};
  box-sizing: border-box;
  display: flex;
`;
