import React from 'react';
import MapContainer from '../modules/map/MapContainer';
import Image from '../../components/element/Image';

const Main = () => {
  return (
    <React.Fragment>
      <Image />
      <Image round />
      <Image border />
      <Image border width="200px" />
      <Image round width="200px" margin="0" />
      <Image round width="50%" />
    </React.Fragment>
  );
};

export default Main;
