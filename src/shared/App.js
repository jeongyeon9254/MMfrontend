import React from 'react';
import '../styles/reset.css';

// Redux 불러오기
import { ConnectedRouter } from "connected-react-router"
import { history } from '../redux/configureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      start
    </ConnectedRouter>
  );
}

export default App;
