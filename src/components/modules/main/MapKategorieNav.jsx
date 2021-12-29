import React, { useState } from 'react';
import styled from 'styled-components';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// Component
import Button from '../../element/Button';

// Js
import Bit from '../Bit';

const MapKategorieNav = props => {
  const navList = [
    <>
      <img alt="MBTI 이미지" src={Bit[0].image} />
      전체보기
    </>,
    '일상',
    '운동',
    '공부',
    '게임',
    '제테크',
  ];

  const [active, setActive] = useState(0);

  return (
    <RowDiv>
      <Swiper spaceBetween={10} slidesPerView={4} className="scroll-container">
        {navList.map((list, index) => {
          return (
            <SwiperSlide className="slide" key={index}>
              <Button
                BtnTag
                state={active === index ? 'active' : false}
                _onClick={idx => {
                  setActive(index);
                }}
              >
                {list}
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </RowDiv>
  );
};

const RowDiv = styled.div`
  img {
    height: ${props => props.theme.fontSizes.base};
    margin-right: 10px;
    display: inline-block;
  }
  .scroll-container {
    height: 100%;
    display: flex;
    padding: 16px 20px;
    box-sizing: border-box;
  }
  .slide {
    width: auto !important;
  }
`;

export default MapKategorieNav;
