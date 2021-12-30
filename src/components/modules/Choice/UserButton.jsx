import React from 'react';
import styled from 'styled-components';
import { Button } from '../../element';

function UserButton(props) {
  const { userId } = props;

  const ClickRefusal = () => {
    console.log(`거절하겠습니다: ${userId}`);
  };

  const ClickAccept = () => {
    console.log(`수락하겠습니다: ${userId}`);
  };
  return (
    <Fiexd>
      <Button
        BtnAdd
        radius="50px"
        width="49%"
        color="#F6F6F6"
        fontcolor="#3F3F41"
        _onClick={ClickAccept}
      >
        수락하기
      </Button>
      <Button
        BtnAdd
        radius="50px"
        width="49%"
        color="#EC6464"
        fontcolor="#fff"
        _onClick={ClickRefusal}
      >
        거절하기
      </Button>
    </Fiexd>
  );
}
const Fiexd = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 0px 30px 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default UserButton;
