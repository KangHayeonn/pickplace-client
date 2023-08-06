import axios from 'axios';
import { setInterceptors } from './common/interceptors';
import { setCommonInterceptors } from './common/commonInterceptors';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  return setCommonInterceptors(instance);
};

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  return setInterceptors(instance);
};

const createInstanceWithKakao = () => {
  return axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_KEY}`,
    },
  });
};

export const instance = createInstance();
export const instanceWithToken = createInstanceWithAuth();
export const instanceWithKakao = createInstanceWithKakao();
