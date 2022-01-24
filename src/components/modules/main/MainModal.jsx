import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch } from 'react-redux';
import { bigGpsList, smallGpsList } from './gpsList';
import { actionCreators as mainActions } from '../../../redux/modules/main';

// component
import { Button } from '../../element/index';

const MainModal = props => {
  const dispatch = useDispatch();

  // props
  const {
    outLocation,
    setLocation,
    bigLocation,
    setBigLocation,
    outBigLocation,
    big,
    setSmallNum,
    setBigNum,
    bigNum,
  } = props;

  // 모달창 해제
  const outModal = () => {
    outLocation();
  };
  const outBigModal = () => {
    outBigLocation();
  };

  const list = smallGpsList.filter(x => {
    return x.name === bigLocation;
  });

  // 큰 카테고리 지역 선택
  if (big) {
    return (
      <React.Fragment>
        <Modal>
          <div className="inner">
            {bigGpsList.map((list, idx) => {
              return (
                <Button
                  _onClick={() => {
                    setBigLocation(list);
                    setBigNum(idx + 1);
                    setLocation('시-군-구');
                    outBigModal();
                  }}
                  key={idx}
                >
                  {list}
                </Button>
              );
            })}
          </div>
        </Modal>
      </React.Fragment>
    );
  }

  // 작은 카테고리 지역 선택
  return (
    <React.Fragment>
      <Modal>
        <div className="inner">
          {list.map((list, idx) => {
            return (
              <Button
                _onClick={() => {
                  setLocation(list.gps);
                  outModal();
                  const num = smallGpsList.findIndex(x => {
                    return x.gps === list.gps;
                  });
                  setSmallNum(num + 1);
                  dispatch(mainActions.chemyListDB(bigNum, num + 1));
                }}
                key={idx}
              >
                {list.gps}
              </Button>
            );
          })}
        </div>
      </Modal>
    </React.Fragment>
  );
};

const Modal = styled.div`
  position: absolute;
  width: 60%;
  height: 50%;
  left: 50%;
  margin-left: -30%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  top: 210px;
  padding: 10px 20px;
  z-index: 1;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -5%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  .inner {
    overflow: scroll;
    height: 100%;
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  button {
    padding: 14px;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.colors.gray_2};
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.lg};
  }
  @media only screen and (max-width: 1050px) {
    top: 170px;
  }
`;

export default MainModal;
