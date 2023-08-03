// Action Type 정의
export const SET_RADIO = 'radio/SET_RADIO' as const;

// Action 생성 함수
export const setRadioState = (clickedBtn: number) => ({
  type: SET_RADIO,
  payload: clickedBtn,
});

export interface State {
  clickedBtn: number;
}

const initialState: State = {
  clickedBtn: 0,
};
// 초기 상태
type CommonAction = ReturnType<typeof setRadioState>;

// Reducer 생성
function reducer(state: State = initialState, action: CommonAction) {
  switch (action.type) {
    case SET_RADIO:
      return {
        clickedBtn: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
