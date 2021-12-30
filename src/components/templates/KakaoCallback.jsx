import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as useAction } from '../../redux/modules/user';
const KakaoCallback = props => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  React.useEffect(async () => {
    await dispatch(useAction.logInDB(code));
  }, []);

  return <p>로딩중입니다.</p>;
};

export default KakaoCallback;
