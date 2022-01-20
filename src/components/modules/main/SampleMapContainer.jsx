/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import icon_marker_2 from '../../../img/Icon/icon_marker_2.svg';

const { kakao } = window;

const SampleMapContainer = props => {
  // 가짜 데이터로 만든 샘플 맵 컨테이너
  const { locationInfo, onModal } = props;

  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new window.kakao.maps.LatLng(37.55464984165135, 126.98100636275814),
      level: 7,
    };

    const map = new window.kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(37.55464984165135, 126.98100636275814);
    const imageSrc = `${icon_marker_2}`;
    const imageSize = new kakao.maps.Size(64, 69);
    const imageOption = { offset: new kakao.maps.Point(30, 50) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      onModal();
    });

    marker.setMap(map);
  }, [locationInfo.gps]);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
};

const Map = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  position: fixed;
  margin-top: -90px;
`;

export default SampleMapContainer;
