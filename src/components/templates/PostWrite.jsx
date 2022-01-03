import React, { useState, useRef } from 'react';
import styled from 'styled-components';

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
  const [photoToAddList, setPhotoToAddList] = useState([]);

  const photoInput = useRef();

  const selectFile = e => {
    const file = photoInput.current.files;

    const obj = { ...file };
    const fileList = Object.entries(obj);

    fileList.map((x, idx) => {
      console.log(x);
      let reader = new FileReader();
      reader.readAsDataURL(x[1]);
      reader.onloadend = () => {
        dispatch(imageActions.setPreview(reader.result));
      };
    });

    if (file) {
      setPhotoToAddList(file);
    }
  };

  const preview = useSelector(state => state.preview.preview);

  const addPost = () => {
    let addFormData = new FormData();
    const data = {
      content: text,
    };
    console.log(data);
    console.log(photoToAddList);
    addFormData.append('multipartFile', photoToAddList);
    addFormData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
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
