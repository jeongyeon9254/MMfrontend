/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Js
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../../../redux/modules/main';

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
          level: 7,
        };

        // 지도를 생성
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

  return (
    <>
      <Map id="map"></Map>
    </>
  );
};

const Map = styled.div`
  width: 100%;
  height: calc(100% - 110px);
`;

export default MapContainer;
