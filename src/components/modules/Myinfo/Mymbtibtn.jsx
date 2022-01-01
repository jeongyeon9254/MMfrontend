import React from 'react';
import { Input, Grid, Tag } from '../../element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Bit from '../Bit';

function Mymbtibtn() {
  return (
    <Grid row gap="20px" padding="3px 0">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="scroll-container"
      >
        {Bit.map((x, idx) => {
          return (
            <SwiperSlide className="slide" key={idx}>
              <Tag small _type="Btn" _src={x.image} color={x.color}>
                {x.name}
              </Tag>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}

export default Mymbtibtn;
