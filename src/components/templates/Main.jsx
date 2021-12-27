import React from 'react';
import Input from '../element/Input/';
import Grid from '../element/Grid';
import Container from '../element/Container';
import Button from '../element/Button';
const Main = props => {
  return (
    <Grid gap="20px">
      <Input />
      <Input _type="textarea" />
      <Input _type="number" />
      <Input _type="password" />
      <Input _type="date" />
      <p>버튼</p>
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
