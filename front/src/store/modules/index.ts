import { combineReducers } from 'redux';
import sample from './sample';
import auth from './auth';
import common from './common';
import searchDetail from './searchDetail';
import searchForm from './searchForm';
import optionForm from './optionForm';
import searchResult from './searchResult';
import search from './search';
const rootReducer = combineReducers({
  sample,
  auth,
  common,
  searchDetail,
  searchForm,
  optionForm,
  searchResult,
  search,
});

// root reducer
export default rootReducer;

// root reducer return value
// 컨테이너 컴포넌트에서 불러와서 사용할 예정
export type RootState = ReturnType<typeof rootReducer>;
