import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../../redux/modules/user';
import { history } from '../../../redux/configureStore';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import cross from '../../../img/Icon/cross.svg';
function Mypost() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getMyPostBoxDB());
    return () => {
      dispatch(userActions.resetUser());
    };
  }, []);

  const postings = useSelector(state => state.user.MypostList);

  const ClickDetail = postId => {
    history.push(`postMain/${postId}`);
  };
  return (
    <MypostPage>
      {postings.length !== 0 ? (
        <Swiper slidesPerView={3.3} spaceBetween={3} className="scroll-container">
          {postings.map((x, idx) => {
            return (
              <SwiperSlide key={idx}>
                <MypostBox
                  onClick={() => {
                    ClickDetail(x.postId);
                  }}
                >
                  <img src={x.imageList[0].imageLink} alt="게시물 이미지" />
                </MypostBox>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <MypostMore
              onClick={() => {
                history.push('/mypost');
              }}
            >
              <img src={cross} alt="더보기" />
              <span>더보기</span>
            </MypostMore>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper slidesPerView={1} spaceBetween={1} className="scroll-container">
          <SwiperSlide>
            <MypostMore
              style={{ width: '100%', boxShadow: 'none', backgroundColor: '#eee' }}
              onClick={() => {
                history.push('/postWrite');
              }}
            >
              <img src={cross} alt="게시물 작성하기" />
              <span>게시물 작성하기</span>
            </MypostMore>
          </SwiperSlide>
        </Swiper>
      )}
    </MypostPage>
  );
}

const MypostPage = styled.div`
  .scroll-container {
    padding: 6px 0px;
  }
`;
const MypostBox = styled.div`
  width: 82px;
  height: 82px;
  background-color: #999;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
  }
`;

const MypostMore = styled.div`
  cursor: pointer;
  width: 82px;
  height: 82px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 9px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.maxSmall};
  &:hover {
    background-color: #eee;
  }
`;
export default Mypost;
