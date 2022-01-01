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
        <PublicRoute exact restricted={false} path="/" Component={Main} />
        <PublicRoute exact restricted={false} path="/choice" Component={Choice} />
        <PublicRoute exact restricted={false} path="/chat" Component={Chat} />
        <PublicRoute exact restricted={false} path="/AddMyinfo" Component={AddMyinfo} />
        <PublicRoute exact restricted={false} path="/myinfo" Component={Myinfo} />
        <PublicRoute exact restricted={false} path="/login" Component={Login} />
        <PublicRoute exact restricted={false} path="/profile/:userId" Component={Profile} />/
        <PublicRoute exact restricted={false} path="/postMain" Component={PostMain} />
        <PublicRoute exact restricted={false} path="/postMain/:postId" Component={PostDetail} />
        <PublicRoute exact restricted={false} path="/postWrite" Component={PostWrite} />
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
