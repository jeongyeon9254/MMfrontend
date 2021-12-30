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
        <PublicRoute exact restricted={true} path="/" Component={Main} />
        <PublicRoute exact restricted={true} path="/choice" Component={Choice} />
        <PublicRoute exact restricted={true} path="/chat" Component={Chat} />
        <PublicRoute exact restricted={true} path="/AddMyinfo" Component={AddMyinfo} />
        <PublicRoute exact restricted={true} path="/myinfo" Component={Myinfo} />
        <PublicRoute exact restricted={true} path="/login" Component={Login} />
        <PublicRoute exact restricted={true} path="/profile/:userId" Component={Profile} />/
        <PublicRoute exact restricted={true} path="/postMain" Component={PostMain} />
        <PublicRoute exact restricted={true} path="/postMain/:postId" Component={PostDetail} />
        <PublicRoute exact restricted={true} path="/p ostWrite" Component={PostWrite} />
      </Switch>
      <Route exact path="/hidden" component={Hidden} />
    </ConnectedRouter>
  );
}

export default App;
