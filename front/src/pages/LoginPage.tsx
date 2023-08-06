import React from 'react';
import SubmitForm from '../components/auth/SubmitForm';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <SubmitForm title="로그인">
      <LoginForm />
    </SubmitForm>
  );
};

export default LoginPage;
