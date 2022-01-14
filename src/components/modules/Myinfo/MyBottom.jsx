import React from 'react';
import styled from 'styled-components';
import { Button } from '../../element';

function MyBottom(props) {
  const { children, _onClick } = props;
  return (
    <>
      <BottomBox>
        <Button position="relative" bottom="0px" BtnBottom width="315px" _onClick={_onClick}>
          {children}
        </Button>
      </BottomBox>
    </>
  );
}
const BottomBox = styled.div`
  padding: 22px 0px 20px;
`;
export default MyBottom;
