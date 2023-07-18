import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../../store/lib/asyncUtils';
import { createAction, handleActions } from 'redux-actions';
import Api from '../../api/auth';
import { LoginRequestType } from '../../api/auth/types';
import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

// Action Type 정의
export const POST_SIGNUP = 'auth/POST_SIGNUP' as const;
export const POST_SIGNUP_SUCCESS = 'auth/POST_SIGNUP_SUCCESS' as const;
export const POST_SIGNUP_ERROR = 'auth/POST_SIGNUP_ERROR' as const;

export const POST_LOGIN = 'auth/POST_LOGIN' as const;
export const POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS' as const;
export const POST_LOGIN_ERROR = 'auth/POST_LOGIN_ERROR' as const;

export const setLogin =
  (data: LoginRequestType) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: POST_LOGIN });
    try {
      const response = await Api.v1Login(data);
      console.log(response.data.data);
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: response.data.data.member,
      });
    } catch (e) {
      dispatch({
        type: POST_LOGIN_ERROR,
        payload: e,
        error: true,
      });
    }
  };

// thunk Action 생성 함수
// export const signup = createPromiseThunk(POST_SIGNUP, Api.v1Signup);
// export const login = createPromiseThunk(POST_LOGIN, Api.v1Login);

const initialState = {
  // signupState: reducerUtils.initialState(),
  // loginState: reducerUtils.initialState(),
  loading: {
    POST_LOGIN: false,
  },
  user: {},
};

// const signupReducer = handleAsyncActions(POST_SIGNUP, 'signupState');
// const loginReducer = handleAsyncActions(POST_LOGIN, 'loginState');

// Reducer 생성
const authReducer = handleActions(
  {
    [POST_LOGIN]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_LOGIN: true, // 요청 시작
      },
    }),
    [POST_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_LOGIN: false, // 요청 완료
      },
      user: action.payload,
    }),
    [POST_LOGIN_ERROR]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_LOGIN: false, // 요청 완료
      },
    }),
  },
  initialState,
);

export default authReducer;
