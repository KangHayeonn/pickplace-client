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
