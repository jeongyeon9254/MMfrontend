import React from 'react';
import styled from 'styled-components';
import { Grid, Tag } from '../../element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Bit, { Mybit } from '../Bit';

function Mymbtibtn(props) {
  const { mbti, Emit } = props;
  const [active, SetActive] = React.useState(mbti);
  const My = Mybit(active);
  React.useEffect(() => {
    Emit(active);
  }, [active]);

  return (
    <Grid row gap="8px" padding="3px 0" align="center">
      <Tag small _type="Btn" state="active" _src={My.image} color={My.color}>
        {My.name}
      </Tag>
      <Line />
      <Grid row width="75%">
        <Swiper slidesPerView={4} spaceBetween={40} className="scroll-container">
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
Mymbtibtn.defaultProps = {
  Emit: () => {},
};
const MbtiBox = styled.div`
  width: 100%;
  height: suto;
  overflow: hidden;
`;
const Line = styled.div`
  height: 50px;
  width: 1px;
  background-color: #ededed;
`;
export default Mymbtibtn;
