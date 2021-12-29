import React, { useState } from 'react';
import styled from 'styled-components';

// reudx
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../../../redux/modules/list';

// Js
import { Box, Grid, Image, Tag } from '../../element';
import arrow_bottom from '../../../img/Icon/arrow_bottom.svg';
import icon_location from '../../../img/Icon/icon_location.svg';

const MapList = props => {
  // api연결후 변경
  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const dispatch = useDispatch();
  const listState = useSelector(state => state.list.state);

  const offModal = () => {
    dispatch(listActions.downList());
  };

  return (
    <React.Fragment>
      {listState ? (
        <MapListStyle>
          <div className="downBtn">
            <img alt="리스트 닫기" src={arrow_bottom} onClick={offModal}></img>
          </div>
          {/* 카드리스트 */}
          <div className="inner">
            {testArr.map((list, idx) => {
              return (
                <div className="card" key={idx}>
                  <Image round width="45px" margin="0"></Image>
                  <Grid width="auto" justify="center" gap="4px">
                    <Grid row gap="5px">
                      <p className="name">홍길동</p>
                      <Tag mbti="INFJ" _type="black" icon>
                        INFJ
                      </Tag>
                    </Grid>
                    <Grid row width="auto">
                      <img className="icon" alt="주소" src={icon_location}></img>
                      <p className="location">서울특별시 강서구</p>
                    </Grid>
                  </Grid>
                  <Box width="43%" padding="6px">
                    안녕하세요 친구 찾아요
                  </Box>
                </div>
              );
            })}
          </div>
        </MapListStyle>
      ) : null}
    </React.Fragment>
  );
};

const MapListStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 410px;
  bottom: 89px;
  z-index: 2;
  animation: list-show 0.5s;
  @keyframes list-show {
    from {
      margin-bottom: -450px;
    }
    to {
      margin-bottom: 0;
    }
  }
  .downBtn {
    border-radius: 30px 30px 0 0;
    background: #fff;
    padding: 12px 0 10px 0;
  }
  .downBtn > img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  .inner {
    background: #fff;
    height: 100%;
    padding-bottom: 46px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  .card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 22.5px 30px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
  .card .name {
    font-weight: 700;
  }
  .card .location {
    font-weight: 500;
    font-size: 10px;
    color: #9b9b9b;
    line-height: 1.3;
  }
`;

export default MapList;
