import React from 'react';
import Input from '../element/Input/';
import Grid from '../element/Grid';
import Container from '../element/Container';
import Button from '../element/Button';
const Main = props => {
  return (
    <Grid gap="20px">
      <Button BtnText>BtnText</Button>
      <Button BtnBottom>BtnBottom</Button>
      <Button BtnIcon>BtnIcon</Button>
      <Button BtnRound>BtnRound</Button>
      <Button BtnTag>BtnTag</Button>
      <Button>Button</Button>
    </Grid>
  );
};

export default Main;
