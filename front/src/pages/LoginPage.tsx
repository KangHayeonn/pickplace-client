import React from 'react';
import SubmitForm from '../components/auth/SubmitForm';
import LoginForm from '../components/auth/LoginForm';
import useModals from '../components/common/modal/UseModals';
import ConfirmModal from '../components/common/modal/ConfirmModal';

const LoginPage = () => {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(ConfirmModal, {
      onSubmit: async () => {
        // TODO : API Logic
      },
    });
  };

  return (
    <SubmitForm title="로그인">
      <>
        <LoginForm />
        <button onClick={handleClick}>모달 열기</button>
      </>
    </SubmitForm>
  );
};

export default LoginPage;
