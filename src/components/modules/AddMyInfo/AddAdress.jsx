import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Box, Button, Select, Input } from '../../element/index';
import LoSelect from '../addInfo/LoSelct';
import AddMBTI from './AddMBTI';
import AddInfo from './AddInfo';
import KakaoAddress from './KakaoAddress';

const AddAdress = props => {
  const { file, Control, Show } = props;
  const [Open, setOpen] = useState(false);
  const [BackAddinfo, BacksetAddinfo] = useState(false);
  const [Kakaoadr, setKakaoadr] = useState(false);
  const [Full, setFull] = useState('');
  const [LO, setLo] = useState('');
  const [De, setDe] = useState('');
  const [X, setX] = useState('');
  const [Y, setY] = useState('');

  const PageControl = () => {
    setOpen(!Open);
  };
  const data = { Full, LO, De, X, Y };

  console.log(data);

  return (
    <ShowPage className={Show ? 'open' : ''}>
      <AddMBTI file={file} data={data} show={Open} Control={PageControl} />
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
        <Grid padding="22px 0px 7px 36px;">
          <p style={({ fontSize: '15px' }, { fontWeight: '400' })}>주소설정</p>
        </Grid>
        <Grid padding="0px 29px 0px 29px" row align="center" justify="flex-end" gap="20px">
          <Grid>
            <Input _value={Full || ''} _readOnly _borderColor="#E1E1E1" />
          </Grid>
          <Button
            BtnAdd
            _onClick={() => {
              setKakaoadr(true);
            }}
          >
            주소 찾기
          </Button>
          {Kakaoadr ? (
            <KakaoAddress
              setFull={setFull}
              setLo={setLo}
              setDe={setDe}
              setX={setX}
              setY={setY}
              setKakaoadr={setKakaoadr}
            />
          ) : null}
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          state={Full === '' ? 'Inactive' : false}
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
