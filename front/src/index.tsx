import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import ModalsProvider from './components/common/modal/ModalsProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </Provider>,
);
