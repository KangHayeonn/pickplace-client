import React, { useState } from 'react';
import '../../styles/components/auth/mailForm.scss';

const MailForm = () => {
  const [email, setEmail] = useState<string>('abc@naver.com');
  const sendMail = () => {
    // TODO : 메일 재발송
  };

  return (
    <div className="mail-container">
      <div className="mail-form">
        <div className="mail-form__title">이메일 인증</div>
        <div className="mail-form__content">
          <div className="email">{email}</div>
          <div className="message">
            <p>인증 메일이 발송 되었습니다.</p>
            <p>이메일 인증을 완료하시면 계정 생성이 완료됩니다.</p>
          </div>
          <div className="sub-menu">
            <span className="sub-menu__text">인증 메일을 못 받으셨나요?</span>
            <button type="button" className="sub-menu__btn" onClick={sendMail}>
              메일 재발송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailForm;
