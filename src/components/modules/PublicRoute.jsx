import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../shared/isLogin';
import { Container } from '../element';
const PublicRoute = ({ Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Container>
            <Component {...props} />
          </Container>
        )
      }
    />
  );
};
export default PublicRoute;
