import axios from 'axios';
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { isShowError } from '../../components/common/ToastBox';

export const setCommonInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError | Error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (!response.data.success) {
        const { errMsg } = response.data;
        isShowError(errMsg);
      }
      return response;
    },
    (error: AxiosError | Error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};
