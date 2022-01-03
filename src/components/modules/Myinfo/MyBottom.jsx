import React from 'react';
import styled from 'styled-components';
import { Button } from '../../element';

function MyBottom(props) {
  const { children, _onClick } = props;
  return (
    <>
      <BottomBox>
        <Button BtnBottom width="315px" _onClick={_onClick}>
          {children}
        </Button>
      </BottomBox>
    </>
  );
}
const BottomBox = styled.div`
  padding: 20px 30px;
`;
export default MyBottom;
