import React from 'react';
import { history } from '../../../redux/configureStore';

// 컴포넌트
import { Alert } from '../../element/index';
import StartAlert from './StartAlert';
import Tutorial from '../../modules/Tutorial/Tutorial';

const TutorialBox = () => {
  const [Hello, setHello] = React.useState(true);
  const [Start, setStart] = React.useState(false);

  const After = () => {
    setHello(false);
    setStart(true);
  };

  const exit = () => {
    history.push('/');
  };

  return (
    <>
      {Hello ? (
        <Alert skip isButton yes={After} no={exit}>
          <StartAlert />
        </Alert>
      ) : null}
      {Start ? <Tutorial setStart={setStart} /> : null}
    </>
  );
};

export default TutorialBox;
