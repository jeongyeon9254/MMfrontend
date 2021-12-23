import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button/';
const Main = () => {
  return (
    <div>
      <TestWeb>
        <TestWindow>
          <Button _class="newBtn2">sss</Button>
        </TestWindow>
      </TestWeb>
    </div>
  );
};

const TestWeb = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
`;
const TestWindow = styled.div`
  width: 768px;
  height: 1200px;
  background-color: #eee;
`;

export default Main;
