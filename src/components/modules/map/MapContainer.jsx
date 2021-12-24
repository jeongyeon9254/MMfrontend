/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { actionCreators as listActions } from '../../../redux/modules/main';
import { useDispatch, useSelector } from 'react-redux';

const { kakao } = window;

const MapContainer = () => {
  const dispatch = useDispatch();
  const container = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);
  const list = useSelector(state => state.main.list);
  console.log(list);
  // kakao map 불러오기
  useEffect(() => {
    // 첫 요청
    if (list.gps === null) {
      axios.get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae').then(response => {
        dispatch(listActions.getListDB(response.data));
      });
    }

    // 처음 맵 중앙 위치와 지도 레벨 옵션
    const options = {
      center: new kakao.maps.LatLng(37.50802, 127.062835),
      level: 5,
    };

    // 해당 컨테이너와 옵션을 담아 지도를 불러옵니다.
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  }, [container]);

  const _map_1 = async () => {
    await axios
      .get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae')
      .then(response => {
        dispatch(listActions.getListDB(response.data));
      });
    const moveLatLon = new kakao.maps.LatLng(list.lat, list.lng);
    kakaoMap.panTo(moveLatLon);
  };

  const _map_2 = () => {
    axios.get('https://run.mocky.io/v3/1446df68-c599-44ba-bf43-7558e5f8761b').then(response => {
      dispatch(listActions.getListDB(response.data));
    });
  };

  const _map_3 = () => {
    axios.get('https://run.mocky.io/v3/183491d8-1499-44ea-9526-8846831dffdb').then(response => {
      dispatch(listActions.getListDB(response.data));
    });
  };

  return (
    <>
      <div
        ref={container}
        style={{
          width: '768px',
          height: '1000px',
          margin: '0 auto',
        }}
      ></div>
      <button onClick={_map_1}>중랑구</button>
      <button onClick={_map_2}>동대문구</button>
      <button onClick={_map_3}>중구</button>
      <div>
        {list.gps !== null
          ? list.result.map((ls, idx) => {
              return (
                <div key={idx}>
                  <div>{ls.title}</div>
                  <div>{ls.content}</div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default MapContainer;
