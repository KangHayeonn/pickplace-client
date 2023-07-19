export const createPromiseThunk = (type: any, promiseCreator: any) => {
  return (param: any) => async (dispatch: any) => {
    dispatch({ type: type });

    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: `${type}_SUCCESS`,
        payload,
      });
    } catch (e) {
      dispatch({
        type: `${type}_ERROR`,
        payload: e,
        error: true,
      });
    }
  };
};

export const handleAsyncActions = (type: any, key: any) => {
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case `${type}_SUCCESS`:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case `${type}_ERROR`:
        return {
          ...state,
          [key]: reducerUtils.error(action.error),
        };
      default:
        return state;
    }
  };
};

export const reducerUtils = {
  initialState: () => ({
    loading: false,
    data: null,
    error: null,
  }),
  loading: (data = null) => ({
    loading: true,
    data,
    error: null,
  }),
  success: (data: any) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error: any) => ({
    loading: false,
    data: null,
    error,
  }),
};
