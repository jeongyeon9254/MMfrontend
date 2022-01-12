import React from 'react';
import styled from 'styled-components';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function Mypost() {
  return (
    <MypostPage>
      <Swiper>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </MypostPage>
  );
}

const MypostPage = styled.div``;
const MypostBox = styled.div`
  width: 82px;
  height: 82px;
  background-color: ;
`;
export default Mypost;
