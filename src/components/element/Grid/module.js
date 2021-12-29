import styled from 'styled-components';

export const RowGridStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.color ? props.color : 'transparent')};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch ')};
  gap: ${props => (props.gap ? props.gap : '0')};
  position: relative;
`;

export const RowGridList = styled.div`
  display: flex;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 33px;
  justify-content: space-between;
  cursor: pointer;
`;
