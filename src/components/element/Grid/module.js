import styled from 'styled-components';

export const RowGridStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'wrap')};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.color ? props.color : 'transparent')};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch ')};
  gap: ${props => (props.gap ? props.gap : '0')};
  position: relative;
  border-top: ${props => props.borderTop};
  border-bottom: ${props => props.borderBot};
`;

export const RowGridList = styled.div`
  display: flex;
  border-top: ${props => (props.Btop ? props.Btop : '1px solid #e8e8e8')};
  border-bottom: 1px solid #e8e8e8;
  padding: ${props => props.pad};
  justify-content: space-between;
  cursor: pointer;
  z-index: 33;
  background-color: ${props => props.theme.colors.white};
  gap: ${props => props.gap};
`;
