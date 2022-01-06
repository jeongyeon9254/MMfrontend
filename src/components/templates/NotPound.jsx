import React from 'react';
import styled from 'styled-components';
import { Button } from '../element';
import notfound from '../../img/Icon/notfound.png';
import { history } from '../../redux/configureStore';
function NotPound() {
  return (
    <div>
      {' '}
      <img src={notfound} alt="" />
      <Point>
        <Button
          _onClick={() => {
            history.push('/login');
          }}
          position="relative"
          width="100%"
          BtnBottom
        >
          홈으로 돌아가기
        </Button>
      </Point>
    </div>
  );
}

const Point = styled.div`
  padding: 0 30px;
`;

export default NotPound;
