import React from 'react';
import Header from '../../components/modules/layout/Header';
import MapContainer from '../modules/main/MapContainer';
import MapKategorieNav from '../modules/main/MapKategorieNav';

const Main = props => {
  return (
    <React.Fragment>
      <Header main>메인화면</Header>
      <MapKategorieNav></MapKategorieNav>
      <MapContainer></MapContainer>
    </React.Fragment>
  );
};

export default Main;
