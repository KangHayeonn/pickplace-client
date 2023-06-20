import React, { useState } from 'react';
import TextField from '../common/TextField';
import TextButton from '../common/TextButton';
import '../../styles/components/auth/passwordForm.scss';

const PasswordForm = () => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>('');

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changeNewConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewConfirmPassword(e.target.value);
  };

  const changePwd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : password change api logic
  };

  return (
    <form className="pwd-form" onSubmit={changePwd}>
      <div className="pwd-form__field">
        <label htmlFor="password">기존 비밀번호</label>
        <TextField
          id="password"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changePassword}
        />
      </div>
      <div className="pwd-form__field">
        <label htmlFor="newPassword">신규 비밀번호</label>
        <TextField
          id="newPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeNewPassword}
        />
      </div>
      <div className="pwd-form__field">
        <label htmlFor="newConfirmPassword">신규 비밀번호 확인</label>
        <TextField
          id="newConfirmPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeNewConfirmPassword}
        />
      </div>
      <div className="pwd-form__field btn">
        <TextButton type={'submit'} text="변경하기" />
      </div>
      <div className="error">비밀번호가 다릅니다.</div>
    </form>
  );
};

export default PasswordForm;
