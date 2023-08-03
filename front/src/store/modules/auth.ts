import { handleActions } from 'redux-actions';
import Api from '../../api/auth';
import { LoginRequestType } from '../../api/auth/types';
import { Dispatch } from 'redux';
import { getAccessToken, clearToken } from '../../utils/tokenControl';

// Action Type 정의
export const POST_SIGNUP = 'auth/POST_SIGNUP' as const;
export const POST_SIGNUP_SUCCESS = 'auth/POST_SIGNUP_SUCCESS' as const;
export const POST_SIGNUP_ERROR = 'auth/POST_SIGNUP_ERROR' as const;

export const POST_LOGIN = 'auth/POST_LOGIN' as const;
export const POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS' as const;
export const POST_LOGIN_ERROR = 'auth/POST_LOGIN_ERROR' as const;

export const SET_LOGOUT = 'auth/SET_LOGOUT' as const;
export const SET_LOGIN = 'auth/SET_LOGIN' as const;

export const setLogin =
  (data: LoginRequestType) => async (dispatch: Dispatch) => {
    dispatch({ type: POST_LOGIN });
    try {
      const response = await Api.v1Login(data);
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: response.data.data.member,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: POST_LOGIN_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const setLogout = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOGOUT });
  try {
    await Api.v1Logout();
    clearToken();
  } catch (e) {
    return Promise.reject(e);
  }
};

export const setSocialLogin = () => ({
  type: SET_LOGIN,
});

const initialState = {
  loading: {
    POST_LOGIN: false,
  },
  user: {},
  isLogin: getAccessToken() !== null,
};

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
      isLogin: true,
    }),
    [POST_LOGIN_ERROR]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_LOGIN: false, // 요청 완료
      },
    }),
    [SET_LOGOUT]: (state) => ({
      ...state,
      loading: {
        POST_LOGIN: false,
      },
      user: {},
      isLogin: false,
    }),
    [SET_LOGIN]: (state) => ({
      ...state,
      isLogin: true,
    }),
  },
  initialState,
);

export default authReducer;
