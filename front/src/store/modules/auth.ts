import { handleActions } from 'redux-actions';
import Api from '../../api/auth';
import { LoginRequestType } from '../../api/auth/types';
import { Dispatch } from 'redux';

// Action Type 정의
export const POST_SIGNUP = 'auth/POST_SIGNUP' as const;
export const POST_SIGNUP_SUCCESS = 'auth/POST_SIGNUP_SUCCESS' as const;
export const POST_SIGNUP_ERROR = 'auth/POST_SIGNUP_ERROR' as const;

export const POST_LOGIN = 'auth/POST_LOGIN' as const;
export const POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS' as const;
export const POST_LOGIN_ERROR = 'auth/POST_LOGIN_ERROR' as const;

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

const initialState = {
  loading: {
    POST_LOGIN: false,
  },
  user: {},
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
