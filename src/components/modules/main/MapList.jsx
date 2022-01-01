import React, { useState } from 'react';
import styled from 'styled-components';

// reudx
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../../../redux/modules/list';
import { actionCreators as mainActions } from '../../../redux/modules/main';

// Js
import { Box, Grid, Image, Tag } from '../../element';
import arrow_bottom from '../../../img/Icon/arrow_bottom.svg';
import icon_location from '../../../img/Icon/icon_location.svg';
import { history } from '../../../redux/configureStore';

const MapList = props => {
  // api연결후 변경

  const dispatch = useDispatch();
  const listState = useSelector(state => state.list.state);
  const list = useSelector(state => state.main.list);

  const offModal = () => {
    dispatch(listActions.downList());
  };

  console.log(list);

  return (
    <React.Fragment>
      {listState ? (
        <MapListStyle>
          <div className="downBtn">
            <img alt="리스트 닫기" src={arrow_bottom} onClick={offModal}></img>
          </div>
          {/* 카드리스트 */}
          <div className="inner">
            {list.result.map((list, idx) => {
              return (
                <div
                  className="card"
                  key={idx}
                  onClick={() => {
                    history.push(`/profile/${list.userId}`);
                    dispatch(listActions.downList());
                  }}
                >
                  <Image round width="45px" margin="0" src={list.profileImage}></Image>
                  <Grid width="35%" justify="center" gap="4px">
                    <Grid row gap="5px" justify="space-between">
                      <p className="name">{list.nickname}</p>
                      <Tag mbti={list.mbti} _type="black" size="11px" icon>
                        {list.mbti}
                      </Tag>
                    </Grid>
                    <Grid row width="auto">
                      <img className="icon" alt="주소" src={icon_location}></img>
                      <p className="location">서울특별시 {list.location}</p>
                    </Grid>
                  </Grid>
                  <Box width="40%" padding="6px 9px">
                    <div className="textBox">{list.intro}</div>
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
    margin-top: 1px;
    font-weight: 700;
    line-height: 1.2;
    font-size: ${props => props.theme.fontSizes.small};
  }
  .card .location {
    font-weight: 500;
    font-size: 10px;
    color: #9b9b9b;
    line-height: 1.3;
  }
  .textBox {
    font-size: ${props => props.theme.fontSizes.maxSmall};
    font-weight: 500;
    margin: 0;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1rem;
    height: 2rem;
    color: #3f3f41;
    text-decoration: none;
  }
`;

export default MapList;
