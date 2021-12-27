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
} from '../components/templates';
import Container from '../components/element/Container';
import PrivateRoute from '../components/modules/PrivateRoute';
import PublicRoute from '../components/modules/PublicRoute';

// Redux 불러오기
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Container>
        <PublicRoute exact restricted={true} path="/" Component={Main} />
        <PublicRoute exact restricted={true} path="/choice" Component={Choice} />
        <PublicRoute exact restricted={true} path="/chat" Component={Chat} />
        <PublicRoute exact restricted={true} path="/AddMyinfo" Component={AddMyinfo} />
        <PublicRoute exact restricted={true} path="/myinfo" Component={Myinfo} />
        <PublicRoute exact restricted={true} path="/login" Component={Login} />
        <PublicRoute exact restricted={true} path="/PostMain" Component={PostMain} />
        <PublicRoute exact restricted={true} path="/PostMain/:postId" Component={PostDetail} />
        <PublicRoute exact restricted={true} path="/PostWrite" Component={PostWrite} />
        <PublicRoute exact restricted={true} path="/PostWrite/postId" Component={PostEdit} />
      </Container>
    </ConnectedRouter>
  );
}

export default App;
