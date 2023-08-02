import { handleActions } from 'redux-actions';
import { Dispatch } from 'redux';
import SearchApi from '../../api/search';
import ReviewApi from '../../api/review';
import { SearchDetailType } from '../../api/search/types';

// Action Type 정의
export const SEARCH_DETAIL = 'searchDetail/SEARCH_DETAIL' as const;
export const SEARCH_DETAIL_SUCCESS =
  'searchDetail/SEARCH_DETAIL_SUCCESS' as const;
export const SEARCH_DETAIL_ERROR = 'searchDetail/SEARCH_DETAIL_ERROR' as const;

export const GET_PLACE_REVIEW = 'searchDetail/GET_PLACE_REVIEW' as const;
export const GET_PLACE_REVIEW_SUCCESS =
  'searchDetail/GET_PLACE_REVIEW_SUCCESS' as const;
export const GET_PLACE_REVIEW_ERROR = 'searchDetail/GET_PLACE_REVIEW_ERROR';

export const searchDetail =
  (placeId: number, data: SearchDetailType) => async (dispatch: Dispatch) => {
    dispatch({ type: SEARCH_DETAIL });
    try {
      const response = await SearchApi.v1SearchDetail(placeId, data);
      dispatch({
        type: SEARCH_DETAIL_SUCCESS,
        payload: response.data.data,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: SEARCH_DETAIL_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const getPlaceReview =
  (placeId: number) => async (dispatch: Dispatch) => {
    dispatch({ type: GET_PLACE_REVIEW });
    try {
      const response = await ReviewApi.v1GetPlaceReview(placeId);
      dispatch({
        type: GET_PLACE_REVIEW_SUCCESS,
        payload: response.data.data,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: GET_PLACE_REVIEW_ERROR,
        payload: e,
        error: true,
      });
    }
  };

const initialState = {
  loading: {
    SEARCH_DETAIL: false,
    GET_PLACE_REVIEW: false,
  },
  place: {
    placeId: -1,
    placeName: '',
    placeRating: 0,
    placeReviewCnt: 0,
    category: '',
    placeAddress: {
      address: '',
      latitude: 0,
      longitude: 0,
    },
    tags: [],
  },
  roomList: [],
  reviewList: [],
};

// Reducer 생성
const searchDetailReducer = handleActions(
  {
    [SEARCH_DETAIL]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        SEARCH_DETAIL: true, // 요청 시작
      },
    }),
    [SEARCH_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        SEARCH_DETAIL: false, // 요청 완료
      },
      place: action.payload.place,
      roomList: action.payload.roomList,
    }),
    [SEARCH_DETAIL_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        SEARCH_DETAIL: false, // 요청 완료
      },
    }),
    [GET_PLACE_REVIEW]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PLACE_REVIEW: true,
      },
    }),
    [GET_PLACE_REVIEW_SUCCESS]: (state, actions) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PLACE_REVIEW: false,
      },
      reviewList: actions.payload.reviewList,
    }),
    [GET_PLACE_REVIEW_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PLACE_REVIEW: false,
      },
    }),
  },
  initialState,
);

export default searchDetailReducer;
