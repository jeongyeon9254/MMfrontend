import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/index.css';
import App from './shared/App';
// Redux 관련 불러오기
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
