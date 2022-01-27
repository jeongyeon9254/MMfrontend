/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Marker_infj from '../../../img/marker/Marker_infj.svg';

// Redux
import { useSelector } from 'react-redux';

const { kakao } = window;

const SampleMapContainer = props => {
  // 가짜 데이터로 만든 샘플 맵 컨테이너
  const { onModal } = props;

  const locationInfo = useSelector(state => state.main.sample);
  const address =
    locationInfo.length !== 0 ? `${locationInfo.location} ${locationInfo.locDetail}` : null;
  console.log(locationInfo);

  useEffect(() => {
    if (locationInfo.length !== 0) {
      const geocoder = new kakao.maps.services.Geocoder();

      const callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(result[0].y, result[0].x),
            level: 7,
          };
          const map = new window.kakao.maps.Map(container, options);

          // 마커 생성
          const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
          const imageSrc = `${Marker_infj}`;
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
          // 폴리라인 생성
          const circle = new kakao.maps.Circle({
            center: new kakao.maps.LatLng(result[0].y, result[0].x),
            radius: 2200,
            strokeWeight: 3,
            strokeColor: `#ade634`,
            strokeOpacity: 1,
            strokeStyle: 'line',
            fillColor: `#aee6344e`,
            fillOpacity: 0.7,
          });
          circle.setMap(map);
          marker.setMap(map);
        }
      };
      geocoder.addressSearch(address, callback);
    }
  }, [locationInfo]);

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
