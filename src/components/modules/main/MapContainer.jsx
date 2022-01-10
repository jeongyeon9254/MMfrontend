/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCookie } from '../../../shared/Cookie.js';

// Js
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../../../redux/modules/list';

// Api
import { getMyinfoDB } from '../../../api/modules/chemy.js';

const { kakao } = window;

const MapContainer = () => {
  const dispatch = useDispatch();

  // kakao map 함수를 가지고 있음
  const [move, setMove] = useState(null);
  const [maker, setMaker] = useState(null);
  const [makers, setMakers] = useState(null);

  // 로케이션 정보를 받아옵니다
  const locationInfo = useSelector(state => state.main.list);

  // 최초 1회 맵 생성
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const container = document.getElementById('map');

    const options = {
      center: new window.kakao.maps.LatLng(userInfo.longitude, userInfo.latitude),
      level: 7,
    };

    const map = new window.kakao.maps.Map(container, options);
    setMove(map);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(userInfo.longitude, userInfo.latitude);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    kakao.maps.event.addListener(marker, 'click', function () {
      dispatch(listActions.upList());
    });
    setMaker(marker);
    marker.setMap(map);
  }, []);

  // gps값 변경시에 맵 이동
  useEffect(() => {
    if (move === null) {
      return;
    }
    // 지도 이동
    const moveLatLon = new kakao.maps.LatLng(locationInfo.lng, locationInfo.lat);
    move.panTo(moveLatLon); // 여기서 사용합니다.

    // 마커 삭제후 재생성
    maker.setMap(null);
    const markerPosition = new kakao.maps.LatLng(locationInfo.lng, locationInfo.lat);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커를 생성
    setMakers(marker);
    if (makers === null) {
      setMakers(marker);
      marker.setMap(move);
      kakao.maps.event.addListener(marker, 'click', function () {
        dispatch(listActions.upList());
      });
      return;
    }
    makers.setMap(null);
    marker.setMap(move);

    // 마커 클릭시 리스트업 이벤트
    kakao.maps.event.addListener(marker, 'click', function () {
      dispatch(listActions.upList());
    });
  }, [locationInfo.gps]);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
};

const Map = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  position: fixed;
  margin-top: -90px;
`;

export default MapContainer;
