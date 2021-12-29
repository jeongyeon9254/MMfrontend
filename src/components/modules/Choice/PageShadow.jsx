import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
const PageShadow = props => {
  const { Boo } = props;
  const { Name } = props.data;
  const HaederClick = () => {
    console.log('ddddddd');
  };
  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="static" _on={HaederClick}>
        {Name}
      </Header>
    </PageShadows>
  );
};

const PageShadows = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: -100%;
  top: 0px;
  z-index: 99;
  transition: all ease 0.3s;
  &.open {
    left: 0px;
  }
`;
export default PageShadow;
