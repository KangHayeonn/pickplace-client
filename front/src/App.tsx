import React from 'react';
import './styles/style.scss';
import Router from './router/Router';
import Modals from './components/common/modal/Modals';

const App = () => {
  return (
    <div className="App">
      <Router />
      <Modals />
    </div>
  );
};

export default App;
