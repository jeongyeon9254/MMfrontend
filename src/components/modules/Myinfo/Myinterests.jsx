import React from 'react';
import { Grid, Button } from '../../element';

function Myinterests(props) {
  const { Disable } = props;
  let interestList = [{ interest: '공부' }, { interest: '운동' }];
  const res = interestList.map(x => {
    return x.interest;
  });

  const [exercise, setExercise] = React.useState(false);
  const [study, setStudy] = React.useState(false);
  const [conversation, setConversation] = React.useState(false);
  const [finance, setFinance] = React.useState(false);
  const [game, setGame] = React.useState(false);
  const [other, setOther] = React.useState(false);

  const ClickEvent = (e, active, ko) => {};

  const interrests = [
    { en: 'exercise', ko: '운동', active: exercise },
    { en: 'study', ko: '공부', active: study },
    { en: 'conversation', ko: '대화', active: conversation },
    { en: 'finance', ko: '제테크', active: finance },
    { en: 'game', ko: '게임', active: game },
    { en: 'other', ko: '기타', active: other },
  ];

  interrests.filter(x => {
    if (res.includes(x.ko)) {
      x.active = !x.active;
      return x;
    }
    return x;
  });

  console.log(interrests);

  React.useEffect(() => {}, []);

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
              ClickEvent(e, x.active, x.ko);
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
