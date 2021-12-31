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
  const [move, setMove] = useState('null');
  const [maker, setMaker] = useState('null');

  const locationInfo = useSelector(state => state.main.list);

  useEffect(async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    let container = document.getElementById('map');

    let options = {
      center: new window.kakao.maps.LatLng(userInfo.longitude, userInfo.latitude),
      level: 7,
    };

    // 최초 1회 맵 생성
    if (locationInfo.gps === null) {
      let map = new window.kakao.maps.Map(container, options);
      setMove(map);

      // 마커 생성
      let markerPosition = new kakao.maps.LatLng(userInfo.longitude, userInfo.latitude);

      // 마커를 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        dispatch(listActions.upList());
      });
      setMaker(marker);
      marker.setMap(map);
      return;
    }

    console.log(locationInfo);

    // 지도 이동
    var moveLatLon = new kakao.maps.LatLng(locationInfo.lat, locationInfo.lng);
    move.panTo(moveLatLon);

    // 마커 삭제후 재생성
    maker.setMap(null);
    let markerPosition = new kakao.maps.LatLng(locationInfo.lat, locationInfo.lng);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
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
  height: calc(100% - 170px);
  position: fixed;
`;

export default MapContainer;
