import React from 'react';
import SubmitForm from '../components/auth/SubmitForm';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <SubmitForm title="회원가입">
      <SignupForm />
    </SubmitForm>
  );
};

export default SignupPage;
