import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/paymentModal.scss';
import { RootState } from '../../../store/modules';
import Api from '../../../api/reservation';

interface PaymentModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const PaymentModal = ({ onClose, handleSubmit }: PaymentModalProps) => {
  const { paymentType, paymentAccountType } = useSelector(
    (state: RootState) => state.reservation,
  );
  const [bankNum, setBankNum] = useState<string>('');
  // 카드 번호 // 은행 ()

  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  useEffect(() => {
    if (paymentType === '일반') {
      //
    } else if (paymentType === '간편 계좌 이체') {
      Api.v1GetBankNumber(paymentAccountType).then((res) => {
        if (res.data.code === 200) {
          const { bankNum } = res.data.data;
          setBankNum(bankNum);
        }
      });
    } else {
      //
    }
  }, []);

  return (
    <ModalForm title="일반 결제" onClickEvent={onClickClose}>
      <div>
        <div className="payment-modal-form__top">
          <div className="payment-modal-form__top--title">강하연</div>
          <div className="payment-modal-form__top--text">{bankNum}</div>
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
