/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { actionCreators as listActions } from '../../../redux/modules/main';
import { useDispatch, useSelector } from 'react-redux';

const { kakao } = window;

const MapContainer = () => {
  const dispatch = useDispatch();
  // const container = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);
  const [make, setMake] = useState(null);
  const [makes, setMakes] = useState(null);
  const list = useSelector(state => state.main.list);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/1446df68-c599-44ba-bf43-7558e5f8761b')
      .then(response => {
        const data = response.data;
        let container = document.getElementById('map');

        let options = {
          center: new window.kakao.maps.LatLng(data.lat, data.lng),
          level: 5,
        };

        let map = new window.kakao.maps.Map(container, options);
        setKakaoMap(map);

        let markerPosition = new kakao.maps.LatLng(data.lat, data.lng);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        setMake(marker);
        // 마커를 지도 위에 표시
        marker.setMap(map);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // kakao map 불러오기

  const _map_1 = async () => {
    await axios
      .get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae')
      .then(response => {
        const data = response.data;

        dispatch(listActions.getListDB(data));

        const moveLatLon = new kakao.maps.LatLng(data.lat, data.lng);
        let markerPosition = new kakao.maps.LatLng(data.lat, data.lng);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        setMakes(marker);
        // 마커를 지도 위에 표시
        make.setMap(null);
        marker.setMap(kakaoMap);
        kakaoMap.panTo(moveLatLon);
      });
  };

  const _map_2 = async () => {
    await axios
      .get('https://run.mocky.io/v3/1446df68-c599-44ba-bf43-7558e5f8761b')
      .then(response => {
        const data = response.data;

        dispatch(listActions.getListDB(data));

        const moveLatLon = new kakao.maps.LatLng(data.lat, data.lng);
        let markerPosition = new kakao.maps.LatLng(data.lat, data.lng);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        setMakes(marker);
        // 마커를 지도 위에 표시
        make.setMap(null);
        makes.setMap(null);
        marker.setMap(kakaoMap);
        kakaoMap.panTo(moveLatLon);
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
        id="map"
        // ref={container}
        style={{
          width: '100%',
          height: '500px',
        }}
      ></div>
      <button onClick={_map_1}>중랑구</button>
      <button onClick={_map_2}>동대문구</button>
      <button onClick={_map_3}>중구</button>
    </>
  );
};

export default MapContainer;
