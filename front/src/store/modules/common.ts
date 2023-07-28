// Action Type 정의
export const SHOW_TOAST = 'common/SHOW_TOAST' as const;
export const CLOSE_TOAST = 'common/CLOSE_TOAST' as const;

// Action 생성 함수
export const showToast = (text: string) => ({
  type: SHOW_TOAST,
  payload: text,
});
export const closeToast = () => ({
  type: CLOSE_TOAST,
});

// 초기 상태
type CommonAction =
  | ReturnType<typeof showToast>
  | ReturnType<typeof closeToast>;

export interface State {
  isShow: boolean;
  toastText: string;
}

const initialState: State = {
  isShow: false,
  toastText: '',
};

// Reducer 생성
function reducer(state: State = initialState, action: CommonAction) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        isShow: true,
        toastText: action.payload,
      };
    case CLOSE_TOAST:
      return {
        isShow: false,
        toastText: '',
      };
    default:
      return state;
  }
}

export default reducer;
