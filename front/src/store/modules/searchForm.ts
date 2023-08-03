import { format } from 'date-fns';
import { handleActions } from 'redux-actions';

// Action Type 정의
export const SET_STARTDATE = 'search/SET_STARTDATE' as const;
export const SET_ENDDATE = 'search/SET_ENDDATE' as const;
export const SET_ADDRESS = 'search/SET_ADDRESS' as const;
export const SET_DISTANCE = 'search/SET_DISTANCE' as const;
export const SET_SEARCHTYPE = 'search/SET_SEARCHTYPE' as const;
export const RESET_SEARCHFORM = 'search/RESET_SEARCHFORM' as const;

export const resetSearchForm = () => ({
  type: RESET_SEARCHFORM,
});
export const setStartDate = (date: string) => ({
  type: SET_STARTDATE,
  payload: { startDate: date },
});
export const setEndDate = (date: string) => ({
  type: SET_ENDDATE,
  payload: { endDate: date },
});
export const setAddress = (address: string, x: number, y: number) => ({
  type: SET_ADDRESS,
  payload: { address: address, x: x, y: y },
});
export const setSearchType = (searchType: string) => ({
  type: SET_SEARCHTYPE,
  payload: { searchType: searchType },
});
export const setDistance = (distance: number) => ({
  type: SET_DISTANCE,
  payload: { distance: distance },
});

export interface searchFormProps {
  address: string;
  x: number;
  y: number;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
}
const initialState: searchFormProps = {
  address: '서울 중구 창경궁로 62-29',
  x: 126.998711,
  y: 37.5681704,
  startDate: format(new Date(), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
  distance: 5,
  searchType: '추천순',
};

const searchFormReducer = handleActions(
  {
    [RESET_SEARCHFORM]: (state) => ({
      address: '서울 중구 창경궁로 62-29',
      x: 126.998711,
      y: 37.5681704,
      startDate: format(new Date(), 'yyyy-MM-dd'),
      endDate: format(new Date(), 'yyyy-MM-dd'),
      distance: 5,
      searchType: '추천순',
    }),
    [SET_STARTDATE]: (state, action) => ({
      ...state,
      startDate: action.payload.startDate,
    }),
    [SET_ENDDATE]: (state, action) => ({
      ...state,
      endDate: action.payload.endDate,
    }),
    [SET_DISTANCE]: (state, action) => ({
      ...state,
      distance: action.payload.distance,
    }),
    [SET_SEARCHTYPE]: (state, action) => ({
      ...state,
      searchType: action.payload.searchType,
    }),
    [SET_ADDRESS]: (state, action) => ({
      ...state,
      address: action.payload.address,
      x: action.payload.x,
      y: action.payload.y,
    }),
  },
  initialState,
);

export default searchFormReducer;
