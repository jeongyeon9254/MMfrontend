import React from 'react';
import styled from 'styled-components';
import './Index.css';

const Container = props => {
  const { width, children, _onClick, _class, color, padding } = props;

  const styles = {
    width,
    color,
    padding,
  };

  return (
    <ContainerStyle className={_class} {...styles} onClick={_onClick}>
      {children}
    </ContainerStyle>
  );
};

Container.defaultProps = {
  width: null,
  color: null,
  padding: null,
};

const ContainerStyle = styled.button`
  width: ${props => props.width};
  background-color: ${props => props.color};
  padding: ${props => props.padding};
`;

export default Container;
