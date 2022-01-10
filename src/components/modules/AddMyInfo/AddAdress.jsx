import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Box, Button, Select } from '../../element/index';
import LoSelect from '../addInfo/LoSelct';
import AddMBTI from './AddMBTI';
import AddInfo from './AddInfo';

const AddAdress = props => {
  const { file, Control, Show } = props;
  const [Open, setOpen] = useState(false);
  const [BackAddinfo, BacksetAddinfo] = useState(false);
  const [local, setlocal] = useState('');

  const sele = locals => {
    setlocal(locals);
  };

  const PageControl = () => {
    setOpen(!Open);
  };

  return (
    <ShowPage className={Show ? 'open' : ''}>
      <AddMBTI file={file} local={local} show={Open} Control={PageControl} />
      <Header Page point="relative" zIndex="0" _onClick={Control}>
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
        <Grid padding="51px 0px 7px 36px;">
          <p style={({ fontSize: '15px' }, { fontWeight: '400' })}>주소설정</p>
        </Grid>
        <Grid padding="0px 0px 0px 29px" row align="center" gap="20px">
          <Grid width="118px">
            <Box>
              <AddressCommet>서울특별시</AddressCommet>
            </Box>
          </Grid>
          <Grid width="55%">
            <Select Emit={sele} />
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          state={local === '' ? 'Inactive' : false}
          width="315px"
          BtnBottom
          _onClick={PageControl}
        >
          다음으로
        </Button>
      </Grid>
    </ShowPage>
  );
};

const OpenBox = styled.div``;

const AddressTitle = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
  color: #3f3f41;
`;

const AddressCommet = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
  color: #4e4e4e;
`;

const ShowPage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: -100%;
  top: 0px;
  transition: all ease 0.3s;
  z-index: 10;
  background-color: #fff;
  &.open {
    left: 0px;
  }
`;

export default AddAdress;
