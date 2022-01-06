import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getCookie } from '../../shared/Cookie';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imageActions } from '../../redux/modules/preview';
import { actionCreators as postActions } from '../../redux/modules/post';

// component
import { Button, Grid, Input } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

// Js
import { history } from '../../redux/configureStore.js';

const PostWrite = () => {
  const dispatch = useDispatch();

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

  const changeTag = e => {
    setTag(e.target.name);
  };

  const addPost = async () => {
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
      tag: tag,
      content: text,
    };
    multipartFile.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    dispatch(postActions.addPostDB(multipartFile));
    dispatch(imageActions.resetPreview());
  };

  return (
    <>
      <Header>글 작성하기</Header>
      <PostBox>
        <Grid>
          <p className="title">카테고리 선택하기</p>
          <Grid row gap="8px">
            {InterestList.map((interest, idx) => {
              return (
                <Button
                  key={idx}
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
            <Grid row>
              <label htmlFor="file">
                <Grid align="center" justify="center" height="100%">
                  <p className="plus">+</p>
                  <p>{preview.length}/8</p>
                </Grid>
              </label>
              {preview.length > 0
                ? preview.map((src, idx) => {
                    return <img alt="이미지" src={src} key={idx}></img>;
                  })
                : null}
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
        <Button _onClick={addPost} BtnBottom width="83%">
          게시글 올리기
        </Button>
      </PostBox>
    </>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 80px;
  }
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
  .title {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export default PostWrite;
