import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/components/common/toastBox.scss';
import store from '../../store';
import { closeToast, showToast } from '../../store/modules/common';
import { RootState } from '../../store/modules';

const ToastBox = () => {
  const dispatch = useDispatch();
  const toastText = useSelector((state: RootState) => state.common.toastText);

  useEffect(() => {
    const close = setTimeout(() => {
      dispatch(closeToast());
    }, 3000);
    return () => {
      clearTimeout(close);
    };
  }, []);

  return <div className="toast">{toastText}</div>;
};

export const isShowError = (errMsg: string) => {
  const { dispatch } = store;
  dispatch(showToast(errMsg));
};

export default ToastBox;
