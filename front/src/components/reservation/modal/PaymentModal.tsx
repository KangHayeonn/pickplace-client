import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/paymentModal.scss';

interface PaymentModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const PaymentModal = ({ onClose, handleSubmit }: PaymentModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="일반 결제" onClickEvent={onClickClose}>
      <div>
        <div className="payment-modal-form__top">
          <div className="payment-modal-form__top--title">강하연</div>
          <div className="payment-modal-form__top--text">
            0000-78**--****-0000
          </div>
        </div>
        <div className="payment-modal-form__content">
          <div className="payment-modal-form__content--text">
            일반 결제 비밀번호
          </div>
          <input
            type="password"
            className="payment-modal-form__content--input"
            placeholder="비밀번호 입력"
            autoComplete="off"
          />
        </div>
        <div className="payment-modal-form__footer">
          <div className="payment-modal-form__footer--btn">
            <TextButton
              text="결제"
              classType="secondary long"
              onClick={onClickEvent}
            />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default PaymentModal;