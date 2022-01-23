/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Js
import icon_marker_2 from '../../../img/Icon/icon_marker_2.svg';
import icon_marker_1 from '../../../img/Icon/icon_marker_1.svg';
import Bit from '../Bit';

// Redux
import { useSelector } from 'react-redux';

const { kakao } = window;

const MapContainer = props => {
  const myInfo = useSelector(state => state.main.myInfo);
  const result = useSelector(state => state.main.list.result);
  const { onModal, bigLocation, location } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const MyBit = Bit.find(x => {
    return x.name === userInfo.mbti;
  });

  // kakao map 함수를 가지고 있음
  const [move, setMove] = useState(null);

  // 마커 생성 및 삭제용
  const [maker, setMaker] = useState(null);
  const [makers, setMakers] = useState(null);

  // 원 생성 및 삭제
  const [circles, setCircles] = useState(null);

  // 최초 1회 맵 생성 ------------------------------------------------------------------------------------
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const container = document.getElementById('map');

    const options = {
      center: new window.kakao.maps.LatLng(userInfo.latitude, userInfo.longitude),
      level: 7,
    };

    const map = new window.kakao.maps.Map(container, options);
    setMove(map);

    // 마커 이미지 및 위치
    const imageSrc = MyBit.marker;
    const imageSize = new kakao.maps.Size(64, 69);
    const imageOption = { offset: new kakao.maps.Point(30, 50) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition = new kakao.maps.LatLng(userInfo.latitude, userInfo.longitude);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    kakao.maps.event.addListener(marker, 'click', function () {
      onModal();
    });
    setMaker(marker);
    marker.setMap(map);

    // 폴리라인 생성
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(userInfo.latitude, userInfo.longitude),
      radius: 2200,
      strokeWeight: 3,
      strokeColor: MyBit.color,
      strokeOpacity: 1,
      strokeStyle: 'line',
      fillColor: MyBit.circleColor,
      fillOpacity: 0.7,
    });
    setCircles(circle);

    // 지도에 원을 표시합니다
    circle.setMap(map);
  }, []);

  // 시,도 선택시 지도 축소 후 중심으로 이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    if (move === null) {
      return;
    }
    maker.setMap(null);
    circles.setMap(null);
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const moveLatLon = new kakao.maps.LatLng(result[0].y, result[0].x);
        move.panTo(moveLatLon);
      }
    };

    geocoder.addressSearch(`${bigLocation} `, callback);

    // 지도 축소
    move.setLevel(9);
    if (makers === null) {
      return;
    }
    makers.setMap(null);
  }, [bigLocation]);

  // 하위 레벨 지역 선택시 지도 확대 후 중심이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    if (move === null || location === '시-군-구') {
      return;
    }

    // 마커 및 원 삭제
    maker.setMap(null);
    circles.setMap(null);

    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0].y, result[0].x);
        const moveLatLon = new kakao.maps.LatLng(result[0].y, result[0].x);
        move.panTo(moveLatLon);

        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
        const imageSrc = `${icon_marker_2}`;
        const imageSize = new kakao.maps.Size(64, 69);
        const imageOption = { offset: new kakao.maps.Point(30, 50) };
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // set
        setMakers(marker);

        // 생성
        if (makers === null) {
          setMakers(marker);
          marker.setMap(move);
          kakao.maps.event.addListener(marker, 'click', function () {
            onModal();
          });
          return;
        }
        makers.setMap(null);
        marker.setMap(move);

        // 마커 클릭시 리스트업 이벤트
        kakao.maps.event.addListener(marker, 'click', function () {
          onModal();
        });
      }
    };

    geocoder.addressSearch(`${bigLocation} ${location}`, callback);

    // 지도 축소
    move.setLevel(7);
  }, [location]);

  // 내 위치 클릭시 위치 이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    if (myInfo) {
      maker.setMap(move);
      circles.setMap(move);

      let moveLatLon = new kakao.maps.LatLng(userInfo.latitude, userInfo.longitude);
      move.setCenter(moveLatLon);
      move.setLevel(7);

      if (makers === null) {
        return;
      }
      makers.setMap(null);
    }
  }, [myInfo, result]);

  return (
    <React.Fragment>
      <Map id="map"></Map>
    </React.Fragment>
  );
};

const Map = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  position: fixed;
  margin-top: -90px;
`;

export default MapContainer;
