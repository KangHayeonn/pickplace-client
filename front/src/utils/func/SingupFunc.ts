import { SignupRequestType } from '../../api/auth/types';

export const validationSignup = (signupInfo: SignupRequestType) => {
  if (signupInfo.email === '') return '이메일을 입력하세요';
  else if (signupInfo.password === '') return '비밀번호를 입력하세요';
  else if (signupInfo.nickname === '') return '닉네임을 입력하세요';
  else if (signupInfo.phone === '') return '번호를 입력하세요';
  return '';
};
