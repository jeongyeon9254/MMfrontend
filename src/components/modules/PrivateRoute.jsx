import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../shared/isLogin';
import { Container } from '../element';
const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <Container>
            <Component {...props}></Component>
          </Container>
        ) : (
          <Redirect to="/LoginNeed" />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
