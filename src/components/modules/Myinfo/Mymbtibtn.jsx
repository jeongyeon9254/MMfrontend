import React from 'react';
import styled from 'styled-components';
import { Grid, Tag } from '../../element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Bit, { Mybit } from '../Bit';

function Mymbtibtn(props) {
  const { mbti, emit } = props;
  const [active, SetActive] = React.useState(mbti);
  const My = Mybit(active);
  emit(active);
  return (
    <Grid row gap="9px" padding="3px 0" align>
      <Tag small _type="Btn" state="active" _src={My.image} color={My.color}>
        {My.name}
      </Tag>
      <Grid row width="70%">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="scroll-container"
        >
          {Bit.map((x, idx) => {
            return (
              <SwiperSlide className="slide" key={idx}>
                <Tag
                  small
                  _type="Btn"
                  state={x.name === active ? 'active' : ''}
                  _src={x.image}
                  color={x.color}
                  _onClick={e => {
                    SetActive(x.name);
                  }}
                >
                  {x.name}
                </Tag>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
    </Grid>
  );
}
const MbtiBox = styled.div`
  width: 100%;
  height: suto;
  overflow: hidden;
`;
export default Mymbtibtn;
