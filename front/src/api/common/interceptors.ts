import axios from 'axios';
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Api from '../../api/auth';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../utils/tokenControl';
import { isShowError } from '../../components/common/ToastBox';

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAccessToken();

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError | Error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const errorAPI = response.config;
      if (!response.data.success) {
        const { errMsg } = response.data;
        if (errMsg === '만료된 token 입니다') {
          const data = {
            refreshToken: getRefreshToken() || '',
          };

          Api.v1Reissue(data).then((res) => {
            const { member } = res.data.data;
            setAccessToken(member.accessToken);
            setRefreshToken(member.refreshToken);
          });

          errorAPI.headers['AccessToken'] = `${getAccessToken()}`;
          return axios(errorAPI);
        } else {
          isShowError(errMsg);
        }
      }
      return response;
    },
    (error: AxiosError | Error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};
