import React from 'react';
import styled from 'styled-components';

import main from '../../img/Icon/main.svg';

import TutorialBox from '../modules/Tutorial/TutorialBox';

const Guide = () => {
  return (
    <Box>
      <TutorialBox />
      <img alt="메인화면" src={main} />
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  top:0px;
  left: 0px;
}
`;

export default Guide;
