import { handleActions } from 'redux-actions';

// Action Type 정의
export const SET_CATEGORY = 'search/SET_CATEGORY' as const;
export const SET_USERCNT = 'search/SET_USERCNT' as const;
export const SET_TAGLIST = 'search/SET_TAGLIST' as const;
export const RESET_OPTIONFORM = 'search/RESET_OPTIONFORM' as const;

export const resetOptionForm = (category: string) => ({
  type: RESET_OPTIONFORM,
  payload: { category: category },
});
export const setCategory = (category: string) => ({
  type: SET_CATEGORY,
  payload: { category: category },
});
export const setUserCnt = (userCnt: number) => ({
  type: SET_USERCNT,
  payload: { userCnt: userCnt },
});
export const setTagList = (tagList: string[]) => ({
  type: SET_TAGLIST,
  payload: { tagList: tagList },
});

export interface optionFormProps {
  category: string;
  userCnt: number;
  tagList: Array<string>;
}
const initialState: optionFormProps = {
  category: '호텔/리조트',
  userCnt: 1,
  tagList: [],
};

const optionFormReducer = handleActions(
  {
    [RESET_OPTIONFORM]: (state, action) => ({
      category: action.payload.category,
      userCnt: 1,
      tagList: [],
    }),
    [SET_CATEGORY]: (state, action) => ({
      ...state,
      category: action.payload.category,
    }),
    [SET_TAGLIST]: (state, action) => ({
      ...state,
      tagList: action.payload.tagList,
    }),
    [SET_USERCNT]: (state, action) => ({
      ...state,
      userCnt: action.payload.userCnt,
    }),
  },
  initialState,
);

export default optionFormReducer;
