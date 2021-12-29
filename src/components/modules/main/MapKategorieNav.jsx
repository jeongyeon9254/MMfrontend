import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

// Component
import Button from '../../element/Button';

// Js
import Bit from '../Bit';

const MapKategorieNav = props => {
  return (
    <RowDiv>
      <ScrollContainer className="scroll-container">
        <Button BtnTag state="active">
          <img alt="MBTI 이미지" src={Bit[8].image} />
          전체보기
        </Button>
        <Button BtnTag>일상</Button>
        <Button BtnTag>운동</Button>
        <Button BtnTag>공부</Button>
        <Button BtnTag>게임</Button>
        <Button BtnTag>제테크</Button>
      </ScrollContainer>
    </RowDiv>
  );
};

const RowDiv = styled.div`
  height: 60px;
  white-space: nowrap;
  overflow-x: scroll;
  touch-action: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  img {
    height: ${props => props.theme.fontSizes.base};
    margin-right: 10px;
    display: inline-block;
  }
  .scroll-container {
    height: 100%;
    display: flex;
    gap: 10px;
    padding: 16px 20px;
    box-sizing: border-box;
  }
`;

export default MapKategorieNav;
