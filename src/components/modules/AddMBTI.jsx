import React, { useState } from 'react';
import Header from './layout/Header';
import Bit from './Bit';
import { Grid, Tag } from '../element/index';

const AddMBTI = () => {
  return (
    <>
      <Header>MBTI 입력하기</Header>
      <Grid row gap="20px">
        {Bit.map((x, idx) => {
          return (
            <Tag small _type="Btn" key={idx} _src={x.image} color={x.color}>
              {x.name}
            </Tag>
          );
        })}
      </Grid>
    </>
  );
};

export default AddMBTI;
