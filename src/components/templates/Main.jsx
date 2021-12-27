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
      <Button BtnText />
      <Button BtnBottom />
      <Button BtnIcon />
      <Button BtnRound />
      <Button BtnTag />
      <Button />
    </Grid>
  );
};

export default Main;
