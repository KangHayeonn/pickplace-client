import React from 'react';
import SubmitForm from '../components/auth/SubmitForm';
import PasswordForm from '../components/auth/PasswordForm';

const PasswordPage = () => {
  return (
    <SubmitForm title="비밀번호 변경">
      <PasswordForm />
    </SubmitForm>
  );
};

export default PasswordPage;
