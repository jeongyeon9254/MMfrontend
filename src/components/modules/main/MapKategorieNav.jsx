import React from 'react';
import styled from 'styled-components';

import ScrollContainer from 'react-indiana-drag-scroll';

// Component
import Button from '../../element/Button';

const MapKategorieNav = props => {
  return (
    <RowDiv>
      <ScrollContainer className="scroll-container">
        <Button padding="5px 20px" margin="0 10px 0 20px" BtnTag>
          전체보기
        </Button>
        <Button padding="5px 20px" margin="0 10px 0 0" BtnTag>
          일상
        </Button>
        <Button padding="5px 20px" margin="0 10px 0 0" BtnTag>
          운동
        </Button>
        <Button padding="5px 20px" margin="0 10px 0 0" BtnTag>
          공부
        </Button>
        <Button padding="5px 20px" margin="0 10px 0 0" BtnTag>
          게임
        </Button>
        <Button padding="5px 20px" margin="0 10px 0 0" BtnTag>
          제테크
        </Button>
      </ScrollContainer>
    </RowDiv>
  );
};

const RowDiv = styled.div`
  height: 60px;
  padding: 15px 0;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: scroll;
  touch-action: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .scroll-container {
    height: 100%;
  }
`;

export default MapKategorieNav;
