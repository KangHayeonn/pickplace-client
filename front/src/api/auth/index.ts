import { instance, instanceWithToken } from '../../api';
import {
  SignupRequestType,
  LoginRequestType,
  EmailCheckRequestType,
  ReissueRequestType,
} from './types';
const prefix = '/api/v1/members';

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code&prompt=login`;

const Auth = {
  // 회원가입
  async v1Signup(data: SignupRequestType) {
    try {
      const url = `${prefix}/signup`;
      const result = await instance.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 로그인
  async v1Login(data: LoginRequestType) {
    try {
      const url = `${prefix}/login`;
      const result = await instance.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 로그아웃
  async v1Logout() {
    try {
      const url = `${prefix}/logout`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 이메일 중복 체크
  async v1EmailCheck(data: EmailCheckRequestType) {
    try {
      const url = `${prefix}/emailCheck`;
      const result = await instance.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 토큰 재발급
  async v1Reissue(data: ReissueRequestType) {
    try {
      const url = `${prefix}/reissue`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 카카오 소셜 로그인
  async v1KakaoLogin(code: string) {
    try {
      const url = `${prefix}/kakaoLogin`;
      const result = await instance.post(url, { code: code });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
