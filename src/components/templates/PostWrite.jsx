import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getCookie } from '../../shared/Cookie';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imageActions } from '../../redux/modules/preview';

// component
import { Button, Grid, Input } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

const PostWrite = () => {
  const dispatch = useDispatch();

  // 텍스트
  const [text, setTest] = useState('');

  const changeText = e => {
    setTest(e.target.value);
  };

  // 이미지
  const [images, setImages] = React.useState([]);

  const photoInput = useRef();

  const selectFile = e => {
    if (images.length !== 0) {
      setImages([...images, e.target.files]);
    } else {
      setImages(e.target.files);
    }
    console.log(images);
    const obj = { ...e.target.files };
    const fileList = Object.entries(obj);

    if (fileList.length > 8) {
      alert('ㄴㄴ');
      return false;
    }
    // 프리뷰
    fileList.map((x, idx) => {
      let reader = new FileReader();
      reader.readAsDataURL(x[1]);
      reader.onloadend = () => {
        dispatch(imageActions.setPreview(reader.result));
      };
    });
  };

  const preview = useSelector(state => state.preview.preview);

  const addPost = () => {
    let multipartFile = new FormData();
    for (let i = 0; i < images.length; i++) {
      multipartFile.append('multipartFile', images[i]);
    }
    const data = {
      tag: '공부',
      content: text,
    };
    multipartFile.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    const TOCKEN = getCookie('authorization');

    // api
    axios({
      method: 'post',
      url: 'http://13.124.242.158/api/post',
      data: multipartFile,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `${TOCKEN}`,
      },
    });
  };

  return (
    <>
      <Header>글 작성하기</Header>
      <PostBox>
        <Grid>
          <p>카테고리 선택하기</p>
          {/* 선택 컴포넌트 */}
        </Grid>
        <Grid>
          <p>사진 첨부하기</p>
          <Grid row>
            {preview.length > 0
              ? preview.map((src, idx) => {
                  return <img alt="이미지" src={src} key={idx}></img>;
                })
              : null}
          </Grid>
          <Grid row gap="10px"></Grid>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            encType="multipart/form-data"
            multiple
            ref={photoInput}
            onChange={selectFile}
          />
        </Grid>
        <Grid>
          <p>내용 작성하기</p>
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
  img {
    width: 50px;
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
`;

export default PostWrite;
