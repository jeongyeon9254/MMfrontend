import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import '../src/styles/index.css';

// Redux 관련 불러오기
import { Provider } from 'react-redux';
import store from '../src/redux/configureStore';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Story/>
      </Provider>
    </ThemeProvider>
  ),
];