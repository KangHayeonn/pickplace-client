import { handleActions } from 'redux-actions';
import Api from '../../api/search';

import { Dispatch } from 'redux';
import { searchFormProps } from './searchForm';
import { optionFormProps } from './optionForm';

// Action Type 정의
export const GET_CATEGORY_RESULT = 'search/GET_CATEGORY_RESULT' as const;
export const GET_BASIC_RESULT = 'search/GET_BASIC_RESULT' as const;
export const GET_DETAIL_RESULT = 'search/GET_DETAIL_RESULT' as const;

export const GET_RESULT_SUCCESS = 'search/GET_RESULT_SUCCESS' as const;
export const GET_RESULT_ERROR = 'search/GET_RESULT_ERROR' as const;

export const SET_HASNEXT = 'search/SET_HASNEXT' as const;
export const SET_PAGENUM = 'search/SET_PAGENUM' as const;

export const countPerPage = 10;

const initialState = {
  loading: {
    GET_CATEGORY_RESULT: false,
    GET_BASIC_RESULT: false,
    GET_DETAIL_RESULT: false,
  },
  pageNum: 0,
  hasNext: false,
};

export interface searchProps {
  searchForm: searchFormProps;
  optionForm: optionFormProps;
  pagination:
    | {
        newPageNum?: number | undefined;
        searchType?: string | undefined;
      }
    | undefined;
}

const getDataForm = (item: searchProps) => {
  const pagination = item.pagination;
  return {
    address: item.searchForm.address,
    x: item.searchForm.x,
    y: item.searchForm.y,
    searchType: pagination?.searchType
      ? pagination.searchType
      : item.searchForm.searchType,
    pageProps: {
      countPerPage: countPerPage,
      pageNum: pagination?.newPageNum
        ? pagination.newPageNum
        : initialState.pageNum,
    },
    category: item.optionForm.category,
    startDate: item.searchForm.startDate.replaceAll('-', '.'),
    endDate: item.searchForm.endDate.replaceAll('-', '.'),
    distance: item.searchForm.distance,
    userCnt: item.optionForm.userCnt,
    tagList: item.optionForm.tagList,
  };
};

export const getCategoryResults =
  (item: searchProps) => async (dispatch: Dispatch) => {
    const data = getDataForm(item);
    dispatch({ type: GET_CATEGORY_RESULT });
    try {
      const res = await Api.getCategoryData(data);
      dispatch({
        type: GET_RESULT_SUCCESS,
        payload: res.data.data,
      });
      return res.data.data;
    } catch (e) {
      dispatch({
        type: GET_RESULT_ERROR,
        payload: e,
        error: true,
      });
    }
  };
export const getBasicResults =
  (item: searchProps) => async (dispatch: Dispatch) => {
    const data = getDataForm(item);
    dispatch({ type: GET_BASIC_RESULT });
    try {
      const res = await Api.getSearchData(data);
      dispatch({
        type: GET_RESULT_SUCCESS,
        payload: res.data.data,
      });
      return res.data.data;
    } catch (e) {
      dispatch({
        type: GET_RESULT_ERROR,
        payload: e,
        error: true,
      });
    }
  };
export const getDetailResults =
  (item: searchProps) => async (dispatch: Dispatch) => {
    const data = getDataForm(item);
    dispatch({ type: GET_DETAIL_RESULT });
    try {
      const res = await Api.getSearchDataWithOptions(data);
      dispatch({
        type: GET_RESULT_SUCCESS,
        payload: res.data.data,
      });
      return res.data.data;
    } catch (e) {
      dispatch({
        type: GET_RESULT_ERROR,
        payload: e,
        error: true,
      });
    }
  };
export const setHasNext = (hasNext: boolean) => ({
  type: SET_HASNEXT,
  payload: { hasNext: hasNext },
});
export const setPageNum = (pageNum: number) => ({
  type: SET_PAGENUM,
  payload: { pageNum: pageNum },
});

// Reducer 생성
const searchApiReducer = handleActions(
  {
    [GET_CATEGORY_RESULT]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY_RESULT: true, // 요청 시작
      },
    }),
    [GET_RESULT_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY_RESULT: false, // 요청 완료
      },
      hasNext: action.payload.hasNext,
      pageNum: action.payload.pageNum,
    }),
    [GET_RESULT_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY_RESULT: false, // 요청 완료
      },
    }),
    [GET_BASIC_RESULT]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BASIC_RESULT: true, // 요청 시작
      },
    }),
    [GET_RESULT_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BASIC_RESULT: false, // 요청 완료
      },
      hasNext: action.payload.hasNext,
      pageNum: action.payload.pageNum,
    }),
    [GET_RESULT_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BASIC_RESULT: false, // 요청 완료
      },
    }),
    [GET_DETAIL_RESULT]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DETAIL_RESULT: true, // 요청 시작
      },
    }),
    [GET_RESULT_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DETAIL_RESULT: false, // 요청 완료
      },
      hasNext: action.payload.hasNext,
      pageNum: action.payload.pageNum,
    }),
    [GET_RESULT_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DETAIL_RESULT: false, // 요청 완료
      },
    }),
    [SET_HASNEXT]: (state, action) => ({
      pageNum: state.pageNum,
      hasNext: action.payload.hasNext,
      loading: {
        ...state.loading,
      },
    }),
    [SET_PAGENUM]: (state, action) => ({
      pageNum: action.payload.pageNum,
      hasNext: state.hasNext,
      loading: {
        ...state.loading,
      },
    }),
  },
  initialState,
);

export default searchApiReducer;
