import { combineReducers } from "redux";
import mock from "./sample";

const rootReducer = combineReducers({
    mock
});

// root reducer
export default rootReducer;

// root reducer return value
// 컨테이너 컴포넌트에서 불러와서 사용할 예정
export type RootState = ReturnType<typeof rootReducer>;