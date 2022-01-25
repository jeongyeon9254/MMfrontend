import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as useAction } from '../../redux/modules/user';
import Spiner from '../../shared/Spiner';
const KakaoCallback = props => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  const KakaoFuc = () => {
    dispatch(useAction.logInDB(code));
  };
  React.useEffect(() => {
    KakaoFuc();
  }, []);

  return (
    <>
      <Spiner loading></Spiner>
    </>
  );
};

export default KakaoCallback;
