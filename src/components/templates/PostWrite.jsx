import React, { useState } from 'react';
import styled from 'styled-components';
import imageCompression from 'browser-image-compression';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imageActions } from '../../redux/modules/preview';
import { actionCreators as postActions } from '../../redux/modules/post';

// component
import { Button, Grid, Alert } from '../element/index.js';
import Header from '../../components/modules/layout/Header';
import SetCategory from '../modules/Post/SetCategory';
import SetPreview from '../modules/Post/SetPreview';
import SetText from '../modules/Post/SetText';

// Js
import Spiner from '../../shared/Spiner';

const PostWrite = () => {
  const dispatch = useDispatch();

  // 모달
  const [Alt, setAlt] = useState(false);
  const [textAlt, setTextAlt] = useState(false);

  // 전송용 데이터
  const [text, setTest] = useState(''); // 콘텐츠
  const [tag, setTag] = useState('운동'); // 태그 기본값->운동
  const [images, setImages] = React.useState([]); // 이미지

  // 텍스트 저장
  const changeText = e => {
    setTest(e.target.value);
  };

  // 태그 저장
  const changeTag = e => {
    setTag(e.target.name);
  };

  // 이미지 파일 저장
  const selectFile = e => {
    if (images.length !== 0) {
      setImages([...images, e.target.files]);
    } else {
      setImages(e.target.files);
    }

    const obj = { ...e.target.files };
    const fileList = Object.entries(obj);

    // 8개 넘어갈시 리턴
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

  // 스피너용 로딩상태관리
  const loading = useSelector(state => state.post.loading);

  // 이미지파일 및 프리뷰 리셋
  const resetPost = () => {
    setImages([]);
    dispatch(imageActions.resetPreview());
  };

  // 등록!!
  const addPost = async () => {
    // 폼데이터 생성
    let multipartFile = new FormData();
    const emptyFile = new File([''], 'empty');

    // 이미지 등록 안할시 빈파일을 넣어줍니다
    if (images.length === 0) {
      multipartFile.append('multipartFile', emptyFile);
    }

    // 이미지가 있을시 차례대로 한개씩 집어넣습니다 and 이미지 사이즈를 개당 2mb 제한
    if (images.length > 0) {
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 370,
      };
      for (let i = 0; i < images.length; i++) {
        let reSizeFile = await imageCompression(images[i], options);
        multipartFile.append('multipartFile', reSizeFile);
      }
    }

    // 전송용 데이터를 집어넣습니다.
    const data = {
      tag: tag,
      content: text,
    };
    multipartFile.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    dispatch(postActions.addPostDB(multipartFile));
    dispatch(imageActions.resetPreview());
  };

  // 모달 액션
  const next = () => {
    addPost();
    exit();
  };
  const exit = () => {
    setAlt(false);
  };

  return (
    <React.Fragment>
      <Header>글 작성하기</Header>

      <PostBox>
        {/* 카테고리 선택 */}
        <SetCategory tag={tag} changeTag={changeTag} />

        {/* 이미지 선택 */}
        <SetPreview selectFile={selectFile} resetPost={resetPost} />

        {/* 글 작성 */}
        <SetText text={text} changeText={changeText} />

        {/* 등록 버튼 */}
        <Button
          _onClick={() => {
            if (text === '') {
              setTextAlt(true);
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

      {/* 모달창 관리 */}
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
      {textAlt ? (
        <Alert
          MyBit
          check
          yes={() => {
            setTextAlt(false);
          }}
        >
          <Grid gap="15px" padding="16px 8px 8px 24px">
            <Grid gap="4px">
              <p>글을 작성해 주세요.</p>
            </Grid>
          </Grid>
        </Alert>
      ) : null}
      {loading ? <Spiner post /> : null}
    </React.Fragment>
  );
};

const PostBox = styled.div`
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 23px;
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
