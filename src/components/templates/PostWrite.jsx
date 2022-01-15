import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imageActions } from '../../redux/modules/preview';
import { actionCreators as postActions } from '../../redux/modules/post';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// component
import { Button, Grid, Input, Alert } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

// Js
import Spiner from '../../shared/Spiner';

const PostWrite = props => {
  const dispatch = useDispatch();
  // 모달
  const [Alt, setAlt] = useState(false);

  // 버튼
  const InterestList = ['운동', '공부', '대화', '게임', '재테크', '기타'];

  // 전송용 데이터
  const [text, setTest] = useState('');
  const [tag, setTag] = useState('운동');
  const [images, setImages] = React.useState([]);

  const changeText = e => {
    setTest(e.target.value);
  };

  const photoInput = useRef();

  const selectFile = e => {
    if (images.length !== 0) {
      setImages([...images, e.target.files]);
    } else {
      setImages(e.target.files);
    }

    const obj = { ...e.target.files };
    const fileList = Object.entries(obj);

    if (fileList.length > 8) {
      alert('최대 8개까지 가능합니다');
      return false;
    }

    // 프리뷰
    dispatch(imageActions.resetPreview());
    fileList.map((x, idx) => {
      let reader = new FileReader();
      reader.readAsDataURL(x[1]);
      reader.onloadend = () => {
        dispatch(imageActions.setPreview(reader.result));
      };
    });
  };

  const preview = useSelector(state => state.preview.preview);
  const loading = useSelector(state => state.post.loading);

  const date = moment();

  const changeTag = e => {
    setTag(e.target.name);
  };

  const restPost = () => {
    setImages([]);
    dispatch(imageActions.resetPreview());
  };

  const addPost = async () => {
    // console.log(date);
    let multipartFile = new FormData();
    const emptyFile = new File([''], 'empty');
    if (images.length === 0) {
      multipartFile.append('multipartFile', emptyFile);
    }
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        multipartFile.append('multipartFile', images[i]);
      }
    }

    const data = {
      // date: date,
      tag: tag,
      content: text,
    };
    multipartFile.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    dispatch(postActions.addPostDB(multipartFile));
    dispatch(imageActions.resetPreview());
  };

  const next = () => {
    addPost();
    exit();
  };

  const exit = () => {
    setAlt(false);
  };

  return (
    <>
      {Alt ? (
        <Alert MyBit isButton yes={next} no={exit}>
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Title>작성을 완료할까요?</Title>
            <Grid gap="4px">
              <Content>완료시 게시물페이지로 이동합니다.</Content>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      <Header>글 작성하기</Header>
      <PostBox>
        <Grid>
          <p className="title">카테고리 선택하기</p>
          <Grid row gap="8px">
            {InterestList.map((interest, idx) => {
              return (
                <Button
                  key={idx}
                  size="12px"
                  name={interest}
                  BtnTag
                  _onClick={changeTag}
                  state={interest === tag ? 'active' : null}
                >
                  {interest}
                </Button>
              );
            })}
          </Grid>
        </Grid>
        <Grid>
          <p className="title">사진 첨부하기</p>
          <div>
            <Grid wrap="none-wrap" row gap="20px;">
              <label htmlFor="file">
                <Grid align="center" justify="center" height="100%">
                  <p className="plus">+</p>
                  <p className="num">{preview.length}/8</p>
                </Grid>
              </label>
              {preview.length ? (
                <Preview>
                  <button className="resetBtn" onClick={restPost}>
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
                                <img alt="이미지" src={src} key={idx}></img>{' '}
                              </SwiperSlide>
                            );
                          })
                        : null}
                    </Swiper>
                  </div>
                </Preview>
              ) : null}
            </Grid>
          </div>
          <Grid row gap="10px"></Grid>
          <input
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
        <Grid>
          <p className="title">내용 작성하기</p>
          <Input _onChange={changeText} _type="posting"></Input>
          <div className="limit">
            <span className="recent">{text.length} </span>
            <span>/ 100</span>
          </div>
        </Grid>
        <Button
          _onClick={() => {
            if (text === '') {
              alert('게시글을 입력해주세요');
              return;
            }
            setAlt(true);
          }}
          BtnBottom
          width="85%"
        >
          게시글 올리기
        </Button>
      </PostBox>
      {loading ? <Spiner post /> : null}
    </>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 23px;

  .limit {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: ${props => props.theme.fontSizes.small};
  }
  .limit .recent {
    color: #aaa;
  }
  .photoBoxDelete {
    position: absolute;
    background: red;
    width: 30px;
    height: 30px;
  }
  .photoPreview {
    width: 100px;
  }
  .file-input {
    display: none;
  }
  label {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #fff;
    border: 1.5px solid #a7a7a7;
    box-sizing: border-box;
    cursor: pointer;
  }
  .plus {
    font-size: 45px;
    color: #c8c8c8;
  }
  .num {
    font-size: ${props => props.theme.fontSizes.small};
  }
  .title {
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

const Preview = styled.div`
  background: #fff;
  width: 68%;
  border: 1px solid #a7a7a7;
  padding: 1px;
  box-sizing: border-box;
  border-radius: 10px;
  /* overflow: hidden; */
  position: relative;
  img {
    height: ${props => props.theme.fontSizes.base};
    margin-right: 10px;
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
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

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const Content = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export default PostWrite;
