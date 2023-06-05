import React from 'react';
import './styles/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
        <Router />
      <Footer />
    </div>
  );
}

export default App;
