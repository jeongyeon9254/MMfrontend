import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import arrow_down_d from '../../../img/Icon/arrow_down_d.svg';
import { gpsLsit } from '../../modules/Main/gpsList';
function Select(props) {
  const { width, Emit, Data, Area, height, padding, high, fontsize, defult } = props;
  console.log(`defult: ${defult}`);
  const [active, SetActive] = React.useState(defult);
  const [OnOff, SetOnOff] = React.useState(false);

  const styles = {
    width,
    height,
    padding,
    fontsize,
    high,
  };
  const OpationData = Data ? Data : gpsLsit;
  const OnOffEvent = () => {
    SetOnOff(!OnOff);
  };

  function isString(inputText) {
    if (typeof inputText === 'string' || inputText instanceof String) {
      return true;
    } else {
      return false;
    }
  }
  React.useEffect(() => {
    Emit(active);
  }, [active]);

  return (
    <Frame {...styles}>
      <IsSelect {...styles} onClick={OnOffEvent}>
        <Grid row justify="space-between" align="center">
          <Tiactive {...styles}>
            {active ? (Area ? active.area : isString(active) ? active : active.location) : ''}
          </Tiactive>
          <Arrow className={OnOff ? 'on' : ''} src={arrow_down_d} alt="" />
        </Grid>
      </IsSelect>
      <OptionBox {...styles} className={OnOff ? 'on' : ''}>
        <OverScroll>
          <Grid>
            {OpationData.map((x, idx) => {
              return (
                <Option
                  key={idx}
                  onClick={() => {
                    SetActive(x);

                    OnOffEvent();
                  }}
                >
                  {Area ? x.area : x.location}
                </Option>
              );
            })}
          </Grid>
        </OverScroll>
      </OptionBox>
    </Frame>
  );
}
Select.defaultProps = {
  width: '100%',
  fontsize: '16px',
  high: '43px',
  padding: '9px 17px',
  Emit: e => {
    console.log(e);
  },
  defult: '',
};
const Frame = styled.div`
  position: relative;
  width: ${x => x.width};
`;
const Arrow = styled.img`
  transition: all ease 0.3s;
  transform: rotate(180deg);
  &.on {
    transform: rotate(0deg);
  }
`;

const IsSelect = styled.div`
  width: 100%;
  background-color: #fff;
  padding: ${p => p.padding};
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid #e1e1e1;
  position: relative;
  z-index: 20;
  height: ${p => p.high};
`;
const Tiactive = styled.p`
  font-size: ${p => p.fontsize};
  color: #3f3f41;
`;
const OverScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const OptionBox = styled.div`
  width: 95%;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 7px;
  padding: 9px 0px;
  transition: all ease 0.15s;
  position: absolute;
  top: 11px;
  left: 5px;
  height: 1px;
  overflow: hidden;
  z-index: 10;
  &.on {
    width: 100%;
    left: 0px;
    top: 48px;
    height: ${x => (x.height ? x.height : '246px')};
    overflow: auto;
  }
`;
const Option = styled.div`
  line-height: 32px;
  padding: 0px 17px;
  cursor: pointer;
  font-size: ${x => x.theme.fontSizes.small};
  &:hover {
    background-color: #c4c4c4;
  }
`;
export default Select;
