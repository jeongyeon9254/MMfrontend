import React from 'react';

import { history } from '../../../redux/configureStore';
import { useDispatch } from 'react-redux';
import { actionCreators as mainActions } from '../../../redux/modules/main';
import { actionCreators as postActions } from '../../../redux/modules/post';
import { actionCreators as imageActions } from '../../../redux/modules/preview';

import arrow_left_w from '../../../img/Icon/arrow_left_w.svg';
import arrow_left from '../../../img/Icon/arrow_left.svg';

function LayoutBackBtn(props) {
  const { main, Page, white, _onClick, _on, detail } = props;

  const dispatch = useDispatch();
  const goHome = () => {
    history.push('/');
    dispatch(mainActions.reset());
    dispatch(postActions.reset());
    dispatch(imageActions.resetPreview());
  };

  const goBack = () => {
    history.goBack();
    dispatch(mainActions.reset());
    dispatch(postActions.reset());
    dispatch(imageActions.resetPreview());
  };
  return (
    <>
      {main ? null : (
        <div
          className="backBtn"
          onClick={() => {
            _on ? goHome() : Page ? _onClick() : goBack();
          }}
        >
          <img alt="뒤로가기 버튼" src={white ? arrow_left_w : arrow_left}></img>
        </div>
      )}
    </>
  );
}
LayoutBackBtn.defaultProps = {
  main: false,
  Page: false,
  white: false,
  _onClick: () => {},
  _on: false,
};
export default LayoutBackBtn;
