/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const SampleMapContainer = props => {
  const { locationInfo, onModal } = props;

  useEffect(() => {
    if (locationInfo.gps !== null) {
      const container = document.getElementById('map');

      const options = {
        center: new window.kakao.maps.LatLng(locationInfo.lng, locationInfo.lat),
        level: 7,
      };

      const map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      const markerPosition = new kakao.maps.LatLng(locationInfo.lng, locationInfo.lat);

      // 마커를 생성
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        onModal();
      });

      marker.setMap(map);
    }
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
