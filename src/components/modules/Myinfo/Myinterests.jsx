import React from 'react';
import { Grid, Button } from '../../element';

function Myinterests(props) {
  const { Disable } = props;
  let interestList = [{ interest: '공부' }, { interest: '운동' }];
  const res = interestList.map(x => {
    return x.interest;
  });
  const interrests = [
    { en: 'exercise', ko: '운동', active: false },
    { en: 'study', ko: '공부', active: false },
    { en: 'conversation', ko: '대화', active: false },
    { en: 'finance', ko: '제테크', active: false },
    { en: 'game', ko: '게임', active: false },
    { en: 'other', ko: '기타', active: false },
  ];
  const [state, setstate] = React.useState({
    exercise: interrests[0].active,
    study: interrests[1].active,
    conversation: interrests[2].active,
    finance: interrests[3].active,
    game: interrests[4].active,
    other: interrests[5].active,
  });
  const { exercise, study, conversation, finance, game, other } = state;

  const ClickEvent = (e, active) => {
    setstate({
      ...state,
      [e.target.name]: !active,
    });
  };

  interrests.filter(x => {
    if (res.includes(x.ko)) {
      x.active = !x.active;
      return x;
    }
    return x;
  });

  if (Disable) {
    return (
      <Grid row gap="9px">
        {interrests.map((x, idx) => {
          return (
            <Button key={idx} name={x.en} state={x.active ? 'active' : ''} BtnTag>
              {x.ko}
            </Button>
          );
        })}
      </Grid>
    );
  }
  return (
    <Grid row gap="9px">
      {interrests.map((x, idx) => {
        return (
          <Button
            key={idx}
            name={x.en}
            state={x.active ? 'active' : ''}
            BtnTag
            _onClick={e => {
              ClickEvent(e, x.active);
            }}
          >
            {x.ko}
          </Button>
        );
      })}
    </Grid>
  );
}

export default Myinterests;
