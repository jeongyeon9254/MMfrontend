import React, { useRef } from 'react';
import styled from 'styled-components';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// component
import { Grid } from '../../element/index';

// Redux
import { useSelector } from 'react-redux';

const SetPreview = props => {
  // props관리
  const { resetPost, selectFile } = props;

  // 프리뷰 이미지를 가져옵니다
  const preview = useSelector(state => state.preview.preview);

  // ref
  const photoInput = useRef();

  return (
    <Grid>
      <Title>사진 첨부하기</Title>
      <Grid wrap="none-wrap" row gap="20px;" align="center">
        {/* 이미지 선택 라벨 */}
        <Label htmlFor="file">
          <Grid align="center" justify="center" height="100%">
            <p className="plus">+</p>
            <p className="num">{preview.length}/8</p>
          </Grid>
        </Label>

        {/* 프리뷰 슬라이드 */}
        {preview.length ? (
          <Preview>
            <button className="resetBtn" onClick={resetPost}>
              x
            </button>
            <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
              <Swiper
                style={{ background: '#fff' }}
                spaceBetween={10}
                slidesPerView={2}
                className="scroll-container"
              >
                {preview.length > 0
                  ? preview.map((src, idx) => {
                      return (
                        <SwiperSlide className="slide" key={idx}>
                          <ImgBox>
                            <img alt="이미지" src={src} key={idx}></img>{' '}
                          </ImgBox>
                        </SwiperSlide>
                      );
                    })
                  : null}
              </Swiper>
            </div>
          </Preview>
        ) : null}
      </Grid>

      <Grid row gap="10px"></Grid>

      {/* 파일선택 인풋(숨김) */}
      <input
        style={{ display: 'none' }}
        className="file-input"
        id="file"
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        encType="multipart/form-data"
        multiple
        ref={photoInput}
        onChange={selectFile}
      />
    </Grid>
  );
};

const Label = styled.label`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #fff;
  border: 1.5px solid #a7a7a7;
  box-sizing: border-box;
  cursor: pointer;
  .plus {
    font-size: 45px;
    color: #c8c8c8;
  }
  .num {
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.gray_2};
`;
const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  img {
    height: ${props => props.theme.fontSizes.base};
    display: inline-block;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Preview = styled.div`
  background: #fff;
  width: auto;
  max-width: 68%;
  border: 1px solid #a7a7a7;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  .scroll-container {
    height: 100%;
    display: flex;
    box-sizing: border-box;
  }
  .slide {
    width: auto !important;
    height: 75px;
  }
  .resetBtn {
    width: 24px;
    height: 24px;
    background: #a7a7a7;
    border: none;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 10;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default SetPreview;
