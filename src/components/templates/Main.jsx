import React from 'react';
import Input from '../element/Input/';
import Grid from '../element/Grid';
import Container from '../element/Container';
const Main = props => {
  return (
    <Grid gap="20px">
      <Input />
      <Input _type="textarea" />
      <Input _type="number" />
      <Input _type="password" />
      <Input _type="date" />
    </Grid>
  );
};

export default Main;
