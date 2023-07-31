import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
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
