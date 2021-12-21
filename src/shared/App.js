import '../styles/reset.css';
import {Main} from '../components/templates'
// import { ConnectedRouter } from 'connected-react-router'

// Redux 불러오기
import { ConnectedRouter } from "connected-react-router"
import { history } from '../redux/configureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        start
      </div>
    </ConnectedRouter>
  );
}

export default App;
