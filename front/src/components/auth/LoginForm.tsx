import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../common/TextField';
import TextButton from '../common/TextButton';
import '../../styles/components/auth/loginForm.scss';
import KakaoLoginIcon from '../../assets/images/login-kakao.svg';
import NaverLoginIcon from '../../assets/images/login-naver.svg';
import GoogleLoginIcon from '../../assets/images/login-google.svg';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : login api logic
  };

  const loginKakao = () => {
    // TODO : kakao login logic
  };

  const loginNaver = () => {
    // TODO : naver login logic
  };

  const loginGoogle = () => {
    // TODO : google login logic
  };

  return (
    <form className="login-form" onSubmit={login}>
      <div className="login-form__field">
        <label htmlFor="email" className="screen_out">
          이메일
        </label>
        <TextField
          id="email"
          placeholder="이메일을 입력해주세요."
          onChangeText={changeEmail}
        />
      </div>
      <div className="login-form__field">
        <label htmlFor="password" className="screen_out">
          비밀번호
        </label>
        <TextField
          id="password"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changePassword}
        />
      </div>
      <div className="login-form__field btn">
        <TextButton type={'submit'} text="로그인" />
      </div>
      <div className="sub-menu">
        <Link to="/signup">회원가입</Link>
        <div className="sub-menu__line" />
        <Link to="/pwd">비밀번호 찾기</Link>
      </div>
      <div className="sub-link">
        <div className="sub-link__title">
          <div className="sub-link__title--line" />
          <span>간편 로그인</span>
          <div className="sub-link__title--line" />
        </div>
        <div className="sub-link__login">
          <button type="button" onClick={loginKakao}>
            <img
              src={KakaoLoginIcon}
              width={50}
              height={50}
              alt="Kakao Login Icon"
            />
          </button>
          <button type="button" onClick={loginNaver}>
            <img
              src={NaverLoginIcon}
              width={50}
              height={50}
              alt="Naver Login Icon"
            />
          </button>
          <button type="button" onClick={loginGoogle}>
            <img
              src={GoogleLoginIcon}
              width={50}
              height={50}
              alt="Google Login Icon"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
