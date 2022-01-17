import React, { useState } from 'react';
import styled from 'styled-components';

// Js
import { useDispatch } from 'react-redux';
import { gpsLsit } from '../../modules/Main/gpsList';
import { actionCreators as mainActions } from '../../../redux/modules/main';

// component
import { Button } from '../../element/index';

const MainModal = props => {
  const { outLocation, setLocation, setGpsId } = props;
  const dispatch = useDispatch();

  const outModal = () => {
    outLocation();
  };

  return (
    <React.Fragment>
      <Modal>
        <div className="inner">
          {gpsLsit.map((list, idx) => {
            return (
              <Button
                _onClick={() => {
                  setLocation(list.location);
                  outModal();
                  dispatch(mainActions.chemyListDB(idx + 1));
                  setGpsId(idx + 1);
                  //지역 get 요청
                }}
                key={idx}
              >
                {list.location}
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
  top: 200px;
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
  @media only screen and (max-width: 450px) {
    top: 160px;
  }
`;

export default MainModal;
