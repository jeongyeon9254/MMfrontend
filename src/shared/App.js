import React from 'react';
import '../styles/reset.css';
import {
  Main,
  Chat,
  Choice,
  Myinfo,
  Login,
  PostMain,
  PostDetail,
  PostWrite,
  PostEdit,
  AddMyinfo,
  Hidden,
  KakaoCallback,
} from '../components/templates';
import Profile from '../components/templates/Profile';
import PrivateRoute from '../components/modules/PrivateRoute';
import PublicRoute from '../components/modules/PublicRoute';

// Redux 불러오기
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/" Component={Main} />
        <PrivateRoute exact path="/choice" Component={Choice} />
        <PrivateRoute exact path="/chat" Component={Chat} />
        <PrivateRoute exact path="/AddMyinfo" Component={AddMyinfo} />
        <PrivateRoute exact path="/myinfo" Component={Myinfo} />
        <PublicRoute exact restricted={true} path="/login" Component={Login} />
        <PrivateRoute exact path="/profile/:userId" Component={Profile} />/
        <PrivateRoute exact path="/postMain" Component={PostMain} />
        <PrivateRoute exact path="/postMain/:postId" Component={PostDetail} />
        <PrivateRoute exact path="/postWrite" Component={PostWrite} />
        <PublicRoute
          exact
          restricted={true}
          path="/user/kakao/callback"
          Component={KakaoCallback}
        />
      </Switch>
      <Route exact path="/hidden" component={Hidden} />
    </ConnectedRouter>
  );
}

export default App;
