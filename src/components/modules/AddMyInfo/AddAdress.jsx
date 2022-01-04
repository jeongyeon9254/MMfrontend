import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Box, Button, Select } from '../../element/index';
import LoSelect from '../addInfo/LoSelct';
import AddMBTI from './AddMBTI';
import AddInfo from './AddInfo';

const AddAdress = props => {
  const { file } = props;
  console.log(file);
  const [selecMBTI, setSelectMBIT] = useState(false);
  const [BackAddinfo, BacksetAddinfo] = useState(false);
  const [local, setlocal] = useState('');

  if (selecMBTI === true) {
    return (
      <>
        <AddMBTI file={file} local={local} />
      </>
    );
  } else if (BackAddinfo === true) {
    return (
      <>
        <AddInfo />
      </>
    );
  }

  const sele = locals => {
    setlocal(locals);
    console.log(locals);
  };

  return (
    <>
      <Header
        point="absolute"
        _on={() => {
          BacksetAddinfo(true);
        }}
      >
        추가정보 입력하기
      </Header>
      <Grid>
        <Grid gap="10px" padding="122px 30px 0px 30px">
          <AddressTitle>
            <span style={{ fontWeight: '700' }}>집 주소</span>를 입력해주세요!
          </AddressTitle>
          <Grid gap="5px">
            <AddressCommet>설정된 주소를 기반으로 </AddressCommet>
            <AddressCommet>궁합이 맞는 MBTI유저를 추천해줍니다. </AddressCommet>
          </Grid>
        </Grid>
        <Grid padding="51px 0px 0px 36px;">
          <p style={({ fontSize: '15px' }, { fontWeight: '400' })}>주소설정</p>
        </Grid>
        <Grid padding="0px 0px 0px 29px" row align="center">
          <Grid width="118px">
            <Box>
              <AddressCommet>서울특별시</AddressCommet>
            </Box>
          </Grid>
          <Grid width="183px">
            <LoSelect sele={sele} />
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          state={local === '' ? 'Inactive' : false}
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
};

const OpenBox = styled.div``;

const AddressTitle = styled.p`
  font-weight: 400;
  font-size: ;
`;

const AddressCommet = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

export default AddAdress;
