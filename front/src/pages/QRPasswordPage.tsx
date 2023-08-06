import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TextButton from '../components/common/TextButton';
import '../styles/components/reservation/qrPassword.scss';
import { RootState } from '../store/modules';
import Api from '../api/reservation';
import { isShowError } from '../components/common/ToastBox';

const QRPasswordPage = () => {
  const location = useLocation();
  const code = location.search.split('=')[1];
  const { payment, paymentType } = useSelector(
    (state: RootState) => state.reservation,
  );
  const [password, setPassword] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const onClickEvent = () => {
    Api.v1QRCodeValidation(code, password).then((res) => {
      if (res.data.code === 200) {
        isShowError('인증이 완료되었습니다.');
        setIsCheck(true);
      }
    });
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="qr-password-container">
      <div className="qr-password-form">
        <div className="qr-password-form__title">
          <h3 className="qr-password-form__title--logo">{paymentType} 결제</h3>
        </div>
        <div className="qr-password-form__content">
          <div>
            <div className="qr-password-form__top">
              <div className="qr-password-form__top--title">
                (주) 픽플레이스컴퍼니
              </div>
              <div className="qr-password-form__top--text">
                {payment.roomPrice.toLocaleString()}원
              </div>
            </div>
            {!isCheck ? (
              <>
                <div className="qr-password-form__box">
                  <div className="qr-password-form__box--text">
                    {paymentType} 결제 비밀번호
                  </div>
                  <input
                    type="password"
                    className="qr-password-form__box--input"
                    placeholder="비밀번호 입력"
                    autoComplete="off"
                    onChange={(e) => changePassword(e)}
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
              </>
            ) : (
              <div className="qr-password-form__box">
                QR 인증이 완료되었습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPasswordPage;
