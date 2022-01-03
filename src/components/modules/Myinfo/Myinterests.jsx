import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from '../../element';

function Myinterests(props) {
  const { Disable, emit } = props;
  // const Info = JSON.parse(localStorage.getItem('userInfo'));
  const Info = [{ interest: '공부' }, { interest: '운동' }];
  const res = Info.map(x => {
    return x.interest;
  });
  const [myInfo, SetmyInfo] = React.useState(res);
  const [showTxt, SetTxt] = React.useState(false);
  const interests = [
    { en: 'exercise', ko: '운동' },
    { en: 'study', ko: '공부' },
    { en: 'conversation', ko: '대화' },
    { en: 'finance', ko: '제테크' },
    { en: 'game', ko: '게임' },
    { en: 'other', ko: '기타' },
  ];

  const ClickEvent = ko => {
    if (!myInfo.includes(ko)) {
      return myInfo.length >= 2 ? SetTxt(!showTxt) : SetmyInfo([...myInfo, ko]);
    } else {
      const index = myInfo.filter(x => {
        return x !== ko;
      });
      return SetmyInfo(index);
    }
  };
  return (
    <>
      {showTxt ? <CheckTxt>중복선택이 가능합니다.</CheckTxt> : ''}
      <Grid row gap="9px">
        {interests.map((x, idx) => {
          return (
            <Button
              key={idx}
              name={x.en}
              state={myInfo.includes(x.ko) ? 'active' : ''}
              BtnTag
              _onClick={e => {
                if (!Disable) {
                  ClickEvent(x.ko);
                }
              }}
            >
              {x.ko}
            </Button>
          );
        })}
      </Grid>
    </>
  );
}
Myinterests.defaultProps = {
  Updata: e => {},
};

const CheckTxt = styled.p`
  position: absolute;
  left: 70px;
  top: 2px;
  font-size: 10px;
  color: #d41321;
`;
export default Myinterests;
