/* eslint-disable */
import React, { useEffect } from 'react';
import axios from 'axios';

import { actionCreators as listActions } from '../../../redux/modules/main';
import { useDispatch, useSelector } from 'react-redux';

const { kakao } = window;

const MapContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.main.list);

  // kakao map 불러오기
  useEffect(async () => {
    // 첫 요청
    if (list.gps === null) {
      await axios
        .get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae')
        .then(response => {
          dispatch(listActions.getListDB(response.data));
        });
    }

    const container = document.getElementById('myMap');

    // 처음 맵 중앙 위치와 지도 레벨 옵션
    const options = {
      center: new kakao.maps.LatLng(list.lat, list.lng),
      level: 7,
    };

    // 해당 컨테이너와 옵션을 담아 지도를 불러옵니다.
    const map = new kakao.maps.Map(container, options);

    // 마커 생성 좌표
    let markerPosition = new kakao.maps.LatLng(list.lat, list.lng);

    // 해당좌표와 이미지정보를 담아 마커를 만듭니다.
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // set marker
    marker.setMap(map);
  }, [list]);

  const _map_1 = () => {
    axios.get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae').then(response => {
      dispatch(listActions.getListDB(response.data));
    });
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
        id="myMap"
        style={{
          width: '500px',
          height: '500px',
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
