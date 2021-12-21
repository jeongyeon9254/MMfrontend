import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../shared/isLogin';

const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (isLogin() ? <Component {...props}></Component> : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
