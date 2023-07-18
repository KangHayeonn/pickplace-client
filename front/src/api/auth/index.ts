import { instance, instanceWithToken } from '../../api';
const prefix = '/api/v1/members';

export interface SignupRequestType {
  email: string;
  nickname: string;
  password: string;
  phone: string;
  memberRole: string;
}

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface EmailCheckRequestType {
  email: string;
}

export interface ReissueRequestType {
  refreshToken: string;
}

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
};
