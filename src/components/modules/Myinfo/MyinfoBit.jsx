import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Box, Button } from '../../element';
import { Mybit } from '../Bit';
import { MymbtiInfo } from './index';

function MyinfoBit(props) {
  const { mbti } = props;
  const bit = Mybit(mbti);
  return (
    <>
      <Button padding="15px 17px" radius="7px" color="#3F3F41" border="0px">
        <Grid row gap="13px" align="center">
          <Icon src={bit ? bit.image : ''} />
          <Grid width="auto" gap="5px">
            <Title color={bit.color}>
              <Grid row gap="6px">
                <p>{bit.title}</p> <span>{bit.name}</span>
              </Grid>
            </Title>
            <SubTxt>{bit.virtue}</SubTxt>
          </Grid>
        </Grid>
      </Button>
      <MymbtiInfo mbti={mbti}></MymbtiInfo>
    </>
  );
}
MyinfoBit.defaultProps = {
  mbti: '',
};
const Icon = styled.img`
  width: 38px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${x => x.theme.colors.white};
  & span {
    color: ${x => x.color};
  }
`;
const SubTxt = styled.p`
  font-size: ${x => x.theme.fontSizes.maxSmall};
  color: ${x => x.theme.colors.white};
`;
export default MyinfoBit;
