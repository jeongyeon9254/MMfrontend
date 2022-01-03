import React from 'react';
import { Grid, Button } from '../../element';

function Myinterests(props) {
  const { Disable } = props;
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  const res = Info.interestList.map(x => {
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

  const newInterests = interrests.filter(x => {
    if (res.includes(x.ko)) {
      x.active = !x.active;
      return x;
    }
    return x;
  });
  console.log(newInterests);
  const [state, setstate] = React.useState({
    exercise: newInterests[0].active,
    study: newInterests[1].active,
    conversation: newInterests[2].active,
    finance: newInterests[3].active,
    game: newInterests[4].active,
    other: newInterests[5].active,
  });
  const { exercise, study, conversation, finance, game, other } = state;

  const ClickEvent = (e, active) => {
    setstate({
      ...state,
      [e.target.name]: !active,
    });
  };

  return (
    <Grid row gap="9px">
      {newInterests.map((x, idx) => {
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
