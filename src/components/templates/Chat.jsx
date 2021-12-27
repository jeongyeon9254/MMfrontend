import React from 'react';
import { Input, Grid } from '../element';
const Chat = () => {
  return (
    <div>
      <Grid border="1px solid #000" height="300px" padding="30px">
        <Grid>나는 낭만고양이</Grid>
      </Grid>
      <Input />
    </div>
  );
};

export default Chat;
