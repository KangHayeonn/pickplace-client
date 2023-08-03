import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextButton from '../components/common/TextButton';
import '../styles/components/reservation/qrPassword.scss';

const QRPasswordPage = () => {
  const navigate = useNavigate();

  const onClickEvent = () => {
    navigate('/sample');
  };

  const onClickClose = () => {
    // close
  };

  return (
    <div className="qr-password-container">
      <div className="qr-password-form">
        <div className="qr-password-form__title">
          <h3 className="qr-password-form__title--logo">네이버페이 결제</h3>
        </div>
        <div className="qr-password-form__content">
          <div>
            <div className="qr-password-form__top">
              <div className="qr-password-form__top--title">
                (주) 픽플레이스컴퍼니
              </div>
              <div className="qr-password-form__top--text">99,000원</div>
            </div>
            <div className="qr-password-form__box">
              <div className="qr-password-form__box--text">
                네이버페이 결제 비밀번호
              </div>
              <input
                type="password"
                className="qr-password-form__box--input"
                placeholder="비밀번호 입력"
                autoComplete="off"
              />
            </div>
            <div className="qr-password-form__footer">
              <div className="qr-password-form__footer--btn">
                <TextButton
                  text="결제"
                  classType="secondary long"
                  onClick={onClickEvent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPasswordPage;
