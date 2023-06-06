// Action Type 정의
export const SET_INCREASE = "mock/SET_INCREASE" as const;

// Action 생성 함수
export const increase = () => ({
    type: SET_INCREASE
});

// 초기 상태
type MockAction = 
    | ReturnType<typeof increase>;
 
export interface State {
    count: number;
}

const initialState: State = {
    count: 0
}

// Reducer 생성
function reducer(state: State=initialState, action:MockAction) {
    switch(action.type) {
        case SET_INCREASE:
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

export default reducer;