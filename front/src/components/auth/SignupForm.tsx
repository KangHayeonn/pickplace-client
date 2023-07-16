import React, { useState } from 'react';
import TextField from '../common/TextField';
import TextButton from '../common/TextButton';
import '../../styles/components/auth/signupForm.scss';

const SignupForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const changeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : signup api logic
  };

  return (
    <form className="signup-form" onSubmit={signup}>
      <div className="signup-form__field">
        <label htmlFor="email">이메일</label>
        <TextField
          id="email"
          placeholder="이메일을 입력해주세요."
          onChangeText={changeEmail}
        />
      </div>
      <div className="signup-form__field">
        <label htmlFor="password">비밀번호</label>
        <TextField
          id="password"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changePassword}
        />
      </div>
      <div className="signup-form__field">
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <TextField
          id="confirmPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeConfirmPassword}
        />
      </div>
      <div className="signup-form__field">
        <label htmlFor="nickName">닉네임</label>
        <TextField
          id="nickName"
          placeholder="닉네임을 입력해주세요."
          onChangeText={changeNickName}
        />
      </div>
      <div className="signup-form__field btn">
        <TextButton type={'submit'} text="회원가입" />
      </div>
    </form>
  );
};

export default SignupForm;
