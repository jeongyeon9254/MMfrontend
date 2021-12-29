import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './layout/Header';
import { Grid, Box, Button } from '../element/index';
import LoSelect from '../modules/addInfo/LoSelct';
import AddMBTI from '../modules/AddMBTI';

const AddAdress = () => {
  const [selecMBTI, setSelectMBIT] = useState(false);

  if (selecMBTI === true) {
    return (
      <>
        <AddMBTI />
      </>
    );
  }

  return (
    <>
      <Header>추가정보 입력하기</Header>
      <AddAdressBox>
        <Grid gap="10px" margin="0px 0px 0px 30px">
          <AddressTitle>
            <span style={{ fontWeight: '700' }}>집 주소</span>를 입력해주세요!
          </AddressTitle>
          <Grid gap="5px">
            <AddressCommet>설정된 주소를 기반으로 </AddressCommet>
            <AddressCommet>궁합이 맞는 MBTI유저를 추천해줍니다. </AddressCommet>
          </Grid>
        </Grid>
        <Grid margin="51px 283px 0px 36px">
          <p style={({ fontSize: '15px' }, { fontWeight: '400' })}>주소설정</p>
        </Grid>
        <Grid margin="0px 0px 0px 36px" row align="center">
          <Grid width="118px">
            <Box>
              <AddressCommet>서울특별시</AddressCommet>
            </Box>
          </Grid>
          <Grid width="183px">
            <LoSelect />
          </Grid>
        </Grid>
        <Grid width="315px" margin="312px 30px 44px 30px">
          <Button
            BtnBottom
            _onClick={() => {
              setSelectMBIT(true);
            }}
          >
            다음으로
          </Button>
        </Grid>
      </AddAdressBox>
    </>
  );
};

const AddressTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
`;

const AddressCommet = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

const AddAdressBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  width: 100%;
`;

export default AddAdress;
