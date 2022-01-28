/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Js
import icon_marker_2 from '../../../img/Icon/icon_marker_2.svg';
import Bit from '../Bit';

// Redux
import { useSelector } from 'react-redux';

const { kakao } = window;

const MapContainer = props => {
  // props값 관리
  const { onModal, bigLocation, location } = props;

  // redux값 관리
  const myInfo = useSelector(state => state.main.myInfo);
  const result = useSelector(state => state.main.list.result);

  // 로컬스토리지 값 관리
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const MyBit = Bit.find(x => {
    return x.name === userInfo.mbti;
  });

  // kakao map 함수를 가지고 있음
  const [kakaoMap, setKakaoMap] = useState(null);

  // 마커 생성 및 삭제용
  const [marker_1, setMarker_1] = useState(null);
  const [marker_2, setMarker_2] = useState(null);

  // 원 생성 및 삭제
  const [kakaoCircle, setKakaoCircle] = useState(null);

  // 최초 1회 맵 생성 ------------------------------------------------------------------------------------
  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new window.kakao.maps.LatLng(userInfo.latitude, userInfo.longitude),
      level: 7,
    };

    const map = new window.kakao.maps.Map(container, options);
    setKakaoMap(map);

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
    setMarker_1(marker);
    marker.setMap(map);

    // 지역 범위 원 생성
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
    setKakaoCircle(circle);

    // 지도에 원을 표시합니다
    circle.setMap(map);
  }, []);

  // 시,도 선택시 지도 축소 후 중심으로 이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    // 맵이 없다면 리턴!
    if (kakaoMap === null) {
      return;
    }

    // 마커와 원을 없애줍니다.
    marker_1.setMap(null);
    kakaoCircle.setMap(null);

    // 좌표 값을 기준으로 맵 이동
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const moveLatLon = new kakao.maps.LatLng(result[0].y, result[0].x);
        kakaoMap.panTo(moveLatLon);
      }
    };

    geocoder.addressSearch(`${bigLocation} `, callback);

    // 지도 축소
    kakaoMap.setLevel(9);

    // 작은범위 지역 마커가 없다면 리턴
    if (marker_2 === null) {
      return;
    }
    // 작은범위 지역 마커가 있다면 리셋
    marker_2.setMap(null);
  }, [bigLocation]);

  // 하위 레벨 지역 선택시 지도 확대 후 중심이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    // 맵이 없다면 또는 지역범위 선택 전이라면 리턴
    if (kakaoMap === null || location === '시-군-구') {
      return;
    }

    // 마커 및 원 삭제
    marker_1.setMap(null);
    kakaoCircle.setMap(null);

    // 좌표 기준으로 맵 이동
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const moveLatLon = new kakao.maps.LatLng(result[0].y, result[0].x);
        kakaoMap.panTo(moveLatLon);

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

        // 작은 지역범위 마커 셋
        setMarker_2(marker);

        // 마커가 없다면 마커생성
        if (marker_2 === null) {
          marker.setMap(kakaoMap);
          kakao.maps.event.addListener(marker, 'click', function () {
            onModal();
          });
          return;
        }

        // 이전 마커는 제거하고 현재마커를 생성
        marker_2.setMap(null);
        marker.setMap(kakaoMap);

        // 마커 클릭시 리스트업 이벤트
        kakao.maps.event.addListener(marker, 'click', function () {
          onModal();
        });
      }
    };

    geocoder.addressSearch(`${bigLocation} ${location}`, callback);

    // 지도 축소
    kakaoMap.setLevel(7);
  }, [location]);

  // 내 위치 클릭시 위치 이동 ------------------------------------------------------------------------------------
  useEffect(() => {
    if (myInfo) {
      // 마커와 원을 가져옵니다
      marker_1.setMap(kakaoMap);
      kakaoCircle.setMap(kakaoMap);

      // 내 유저 정보 기반 위치 이동
      const moveLatLon = new kakao.maps.LatLng(userInfo.latitude, userInfo.longitude);
      kakaoMap.setCenter(moveLatLon);
      kakaoMap.setLevel(7);

      if (marker_2 === null) {
        return;
      }
      marker_2.setMap(null);
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
