import { handleActions } from 'redux-actions';
import { hotelSearchResult } from '../../utils/mock/searchList';

export interface searchResultListProps {
  placeId: number;
  placeName: string;
  placeAddress: {
    address: string;
    latitude: number;
    longitude: number;
  };
  placeRating: number;
  placeReviewCnt: number;
  category: string;
  tags: string[];
}

const initialState: searchResultListProps[] = hotelSearchResult;

// Action Type 정의
export const SET_SEARCHRESULT = 'search/SET_SEARCHRESULT' as const;
export const ADD_TO_SEARCHRESULT = 'search/ADD_TO_SEARCHRESULT' as const;

export const setSearchResult = (searchResult: searchResultListProps[]) => ({
  type: SET_SEARCHRESULT,
  payload: searchResult,
});

const searchResultReducer = handleActions(
  {
    [SET_SEARCHRESULT]: (state, action) => action.payload,
  },

  initialState,
);

export default searchResultReducer;
