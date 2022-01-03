import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch } from 'react-redux';

// component
import { Button, Grid, Input } from '../element/index.js';
import Header from '../../components/modules/layout/Header';

const PostWrite = () => {
  // 텍스트
  const [text, setTest] = useState('');

  const changeText = e => {
    setTest(e.target.value);
  };

  // 이미지
  const [photoToAddList, setPhotoToAddList] = useState([]);
  const photoInput = useRef();
  const handlePhoto = e => {
    const temp = [];
    const photoToAdd = e.target.files;

    for (let i = 0; i < photoToAdd.length; i++) {
      temp.push({
        id: photoToAdd[i].name,
        file: photoToAdd[i],
        url: URL.createObjectURL(photoToAdd[i]),
      });
    }
    setPhotoToAddList(temp.concat(photoToAddList));
    console.log(photoToAddList.length);
  };
  const onRemoveToAdd = deleteUrl => {
    setPhotoToAddList(photoToAddList.filter(photo => photo.url != deleteUrl));
  };
  console.log(photoToAddList);
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
          <Grid row gap="10px">
            {photoToAddList.map(photo => {
              return (
                <div className="photoBox" key={photo.url}>
                  <div className="photoBoxDelete" onClick={() => onRemoveToAdd(photo.url)}></div>
                  <img className="photoPreview" src={photo.url} />
                </div>
              );
            })}
          </Grid>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            ref={photoInput}
            onChange={e => handlePhoto(e)}
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
        <Button
          _onClick={() => {
            console.log('실행');
          }}
          BtnBottom
          width="83%"
        >
          게시글 올리기
        </Button>
      </PostBox>
    </>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
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
