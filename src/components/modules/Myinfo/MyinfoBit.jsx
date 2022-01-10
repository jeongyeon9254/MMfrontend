import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from '../../element';
import { Mybit } from '../Bit';
import { MymbtiInfo } from './index';
import { actionCreators as userAction } from '../../../redux/modules/user';
import { useDispatch } from 'react-redux';

function MyinfoBit(props) {
  const dispatch = useDispatch();
  const [Open, setOpen] = React.useState(false);
  const { mbti } = props;
  // const mbti = 'INTP';
  const bit = Mybit(mbti);
  const OpenClick = () => {
    setOpen(!Open);
    dispatch(userAction.AddMyinfoDB());
  };

  return (
    <>
      <Button padding="15px 17px" radius="7px" color="#3F3F41" border="0px" _onClick={OpenClick}>
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
      <MymbtiInfo mbti={mbti} Open={Open} _onClick={OpenClick}></MymbtiInfo>
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
  text-align: left;
`;
export default MyinfoBit;
