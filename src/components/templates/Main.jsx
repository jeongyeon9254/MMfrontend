import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button/index';
import theme from '../../styles/theme';

const Main = props => {
  console.log(props);
  return (
    <div>
      <TestWeb>
        <TestWindow>
          <Button greenBtn>버튼</Button>
          <Button>버튼</Button>
          <Button color="red">버튼</Button>
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
