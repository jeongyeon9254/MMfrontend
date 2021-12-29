import React, { useState } from 'react';
import { Image, Grid, Input, Button } from '../element/index';
import AddInfo from '../modules/AddInfo';
import styled from 'styled-components';
import AddAdress from '../modules/AddAdress';
import AddMBTI from '../modules/AddMBTI';

const AddMyinfo = props => {
  const [Address, setAddress] = useState(false);
  const [selecMBTI, setSelectMBIT] = useState(false);
  const [AddInterest, setAddInterest] = useState(false);

  if (selecMBTI === true) {
    return (
      <>
        <AddMBTI />
        <Grid margin="0px 30px">
          <Button
            width="315px"
            BtnBottom
            _onClick={() => {
              setSelectMBIT(true);
            }}
          >
            다음으로
          </Button>
        </Grid>
      </>
    );
  }

  if (Address === true) {
    return (
      <>
        <AddAdress />
        <Grid margin="0px 30px">
          <Button
            width="315px"
            BtnBottom
            _onClick={() => {
              setSelectMBIT(true);
            }}
          >
            다음으로
          </Button>
        </Grid>
      </>
    );
  }
  return (
    <>
      <AddInfo />
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          _onClick={() => {
            setAddress(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};

export default AddMyinfo;
