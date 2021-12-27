import React from 'react';
import { Input, Grid, Tag } from '../element';

const Hidden = () => {
  return (
    <div>
      <Grid border="1px solid #000" height="100%" padding="30px" row>
        <Grid gap="20px" width="320px">
          <p style={{ fontSize: 30 }}>Input Element</p>
          <p>normal input</p>
          <Input />
          <p>date input</p>
          <Input _type="date" />
          <p>textarea input</p>
          <Input _type="textarea" />
          <p>password input</p>
          <Input _type="password" />
          <p>number input</p>
          <Input _type="number" />
          <p>Post input</p>
          <Input _type="posting" />
          <p>Chat input</p>
          <Input _type="chat" />
          <p>Comment input</p>
          <Input _type="comment" />
        </Grid>
        <Grid gap="20px" width="320px">
          <Tag mbti="INFJ">INFJ</Tag>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hidden;
