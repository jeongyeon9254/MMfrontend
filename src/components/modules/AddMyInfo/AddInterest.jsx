import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Grid, Button } from '../../element/index';
import AddIntro from './AddIntro';
import { InterestList } from './needData';

const AddInterest = props => {
  const { file, local, mbti, show, Control } = props;

  const [Open, setOpen] = useState(false);

  const [duplicated, setDuplicated] = useState([]);

  const handleDuplicated = e => {
    const val = e.target.name;
    if (!duplicated.includes(val)) {
      return duplicated.length >= 2
        ? alert('최대 2개까지만 선택 가능합니다. 다시 선택해주세요')
        : setDuplicated([...duplicated, val]);
    } else {
      const index = duplicated.filter(x => {
        return x !== val;
      });
      return setDuplicated(index);
    }
  };
  //

  const PageControl = () => {
    setOpen(!Open);
  };
  return (
    <ShowPage className={show ? 'open' : ''}>
      <AddIntro
        file={file}
        local={local}
        mbti={mbti}
        show={Open}
        duplicated={duplicated}
        Control={PageControl}
      />
      <Header Page point="relative" zIndex="0" _onClick={Control}>
        관심사 설정하기
      </Header>
      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <InterestTitle>
            <span style={{ fontWeight: '700' }}>관심사</span>를 선택해주세요!
          </InterestTitle>
          <Grid gap="5px">
            <InterestCommet>관심사는 최대 2개까지 중복선택이 가능합니다! </InterestCommet>
          </Grid>
        </Grid>
        <Grid row gap="8px" margin="48px 0px 0px 0px">
          {InterestList.map((interest, idx) => {
            return (
              <Button
                key={idx}
                name={interest}
                BtnTag
                state={duplicated.find(element => element === interest) ? 'active' : false}
                _onClick={handleDuplicated}
              >
                {interest}
              </Button>
            );
          })}
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          state={duplicated.length === 1 || duplicated.length === 2 ? false : 'Inactive'}
          _onClick={PageControl}
        >
          다음으로
        </Button>
      </Grid>
    </ShowPage>
  );
};

const InterestTitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const InterestCommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
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
export default AddInterest;
