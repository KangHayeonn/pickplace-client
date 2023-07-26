import React from 'react';
import { useSelector } from 'react-redux';
import './styles/style.scss';
import Router from './router/Router';
import Modals from './components/common/modal/Modals';
import ToastBox from './components/common/ToastBox';
import { RootState } from './store/modules';

const App = () => {
  const isShowToast = useSelector((state: RootState) => state.common.isShow);

  return (
    <div className="App">
      <Router />
      <Modals />
      {isShowToast && <ToastBox />}
    </div>
  );
};

export default App;
