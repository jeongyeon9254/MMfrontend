import React from 'react';
import '../styles/reset.css';
import { Main, Chat, Choice, Myinfo, Map, Login } from '../components/templates';
import PrivateRoute from '../components/modules/PrivateRoute';
import PublicRoute from '../components/modules/PublicRoute';

// Redux 불러오기
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <PublicRoute exact restricted={true} path="/" Component={Main} />
        <PublicRoute exact restricted={true} path="/map" Component={Map} />
        <PublicRoute exact restricted={true} path="/choice" Component={Choice} />
        <PublicRoute exact restricted={true} path="/chat" Component={Chat} />
        <PublicRoute exact restricted={true} path="/myinfo" Component={Myinfo} />
        <PublicRoute exact restricted={true} path="/login" Component={Login} />
      </div>
    </ConnectedRouter>
  );
}

export default App;
