/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Js
import { useSelector } from 'react-redux';
import icon_marker_2 from '../../../img/Icon/icon_marker_2.svg';
import Bit from '../Bit';

const { kakao } = window;

const MapContainer = props => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { onModal, bigLocation, location } = props;
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
  const [circles_2, setCircles_2] = useState(null);

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

    // 마커 이미지 및 위치
    const imageSrc = `${icon_marker_2}`;
    const imageSize = new kakao.maps.Size(64, 69);
    const imageOption = { offset: new kakao.maps.Point(30, 50) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition = new kakao.maps.LatLng(userInfo.longitude, userInfo.latitude);

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
      center: new kakao.maps.LatLng(userInfo.longitude, userInfo.latitude),
      radius: 2200,
      strokeWeight: 3,
      strokeColor: MyBit.color,
      strokeOpacity: 1,
      strokeStyle: 'line',
      fillColor: MyBit.color,
      fillOpacity: 0.7,
    });
    setCircles(circle);
    // 지도에 원을 표시합니다
    circle.setMap(map);
  }, []);

  // 시,도 선택시 지도 축소 후 중심으로 이동
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
  }, [bigLocation]);

  // 하위 레벨 지역 선택시 지도 확대 후 중심이동
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

        //원생성
        const circle = new kakao.maps.Circle({
          center: new kakao.maps.LatLng(result[0].y, result[0].x), // 원의 중심좌표 입니다
          radius: 2200, // 미터 단위의 원의 반지름입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: MyBit.color, // 선의 색깔입니다
          strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'line', // 선의 스타일 입니다
          fillColor: MyBit.color, // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // set
        setMakers(marker);
        setCircles_2(circle);

        // 생성
        circle.setMap(move);

        if (makers === null) {
          setMakers(marker);
          marker.setMap(move);
          kakao.maps.event.addListener(marker, 'click', function () {
            onModal();
          });
          return;
        }
        makers.setMap(null);
        circles_2.setMap(null);
        circle.setMap(move);
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
