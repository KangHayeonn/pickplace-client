import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './modules';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
export default store;
