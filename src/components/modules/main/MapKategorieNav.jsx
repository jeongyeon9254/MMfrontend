import React, { useState } from 'react';
import styled from 'styled-components';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// Component
import Button from '../../element/Button';

// Js
import { Mybit } from '../Bit';
import { gpsLsit } from './gpsList';

// Redux
import { actionCreators as mainActions } from '../../../redux/modules/main';
import { actionCreators as postActions } from '../../../redux/modules/post';
import { useDispatch } from 'react-redux';

const MapKategorieNav = props => {
  const dispatch = useDispatch();

  // props
  const mbti = Mybit(props.userInfo.mbti);
  const location = props.userInfo.location;
  const setKate = props.setKate;

  // gps ID를 찾습니다
  const gpsIndex = gpsLsit.findIndex(x => {
    return x.location === location;
  });
  const gpsId = props.gpsId ? props.gpsId : gpsIndex + 1;

  // nav 리스트 목록
  const navList = ['전체보기', '운동', '공부', '대화', '제테크', '게임', '기타'];

  // 버튼 클릭시 active 검은색
  const [active, setActive] = useState(0);

  if (props.post) {
    return (
      <RowDiv>
        <Swiper
          style={{ background: '#fff' }}
          spaceBetween={10}
          slidesPerView={4}
          className="scroll-container"
        >
          {navList.map((list, index) => {
            return (
              <SwiperSlide className="slide" key={index}>
                {index === 0 ? (
                  <Button
                    BtnTag
                    state={active === index ? 'active' : false}
                    _onClick={e => {
                      setActive(index);
                      setKate(index);
                      dispatch(postActions.getPostDB(0));
                    }}
                  >
                    <img alt="MBTI 이미지" src={mbti.image ? mbti.image : null} />
                    전체보기
                  </Button>
                ) : (
                  <Button
                    BtnTag
                    state={active === index ? 'active' : false}
                    _onClick={e => {
                      setActive(index);
                      setKate(index);
                      dispatch(postActions.getKategoriDB(index, 0));
                    }}
                  >
                    {list === '전체보기' ? (
                      <img alt="MBTI 이미지" src={mbti.image ? mbti.image : null} />
                    ) : null}
                    {list}
                  </Button>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </RowDiv>
    );
  }

  return (
    <RowDiv>
      <Swiper
        style={{ background: '#fff' }}
        spaceBetween={10}
        slidesPerView={4}
        className="scroll-container"
      >
        {navList.map((list, index) => {
          return (
            <SwiperSlide className="slide" key={index}>
              {index === 0 ? (
                <Button
                  BtnTag
                  state={active === index ? 'active' : false}
                  _onClick={e => {
                    setActive(index);
                    dispatch(mainActions.chemyListDB(gpsId));
                  }}
                >
                  <img alt="MBTI 이미지" src={mbti.image ? mbti.image : null} />
                  전체보기
                </Button>
              ) : (
                <Button
                  BtnTag
                  state={active === index ? 'active' : false}
                  _onClick={e => {
                    setActive(index);
                    dispatch(mainActions.getLocationDB(gpsId, index));
                  }}
                >
                  {list === '전체보기' ? (
                    <img alt="MBTI 이미지" src={mbti.image ? mbti.image : null} />
                  ) : null}
                  {list}
                </Button>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </RowDiv>
  );
};

const RowDiv = styled.div`
  background: #fff;
  margin-top: -2px;
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
