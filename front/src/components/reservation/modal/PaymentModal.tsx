import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/paymentModal.scss';
import { RootState } from '../../../store/modules';
import Api from '../../../api/reservation';
import { setBank } from '../../../store/modules/reservation';
import { getUserId } from '../../../utils/tokenControl';
import { isShowError } from '../../../components/common/ToastBox';

interface PaymentModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const PaymentModal = ({ onClose, handleSubmit }: PaymentModalProps) => {
  const dispatch = useDispatch();
  const { roomId, card, paymentType, paymentAccountType, reservationDate } =
    useSelector((state: RootState) => state.reservation);
  const [password, setPassword] = useState<string>('');
  const [bankNum, setBankNum] = useState<string>('');
  const userId = typeof window !== 'undefined' && getUserId();

  const onClickEvent = () => {
    if (paymentType === '일반') {
      Api.v1ReservationCard(Number(userId), {
        roomId: roomId,
        checkInTime: reservationDate.checkInTime,
        checkOutTime: reservationDate.checkOutTime,
        cardNum: card.cardNum,
        cvc: card.cvc,
        cardPassword: password,
      }).then((res) => {
        if (res.data.code === 200) {
          isShowError('결제가 완료되었습니다.');
          handleSubmit();
        }
      });
    } else if (paymentType === '간편 계좌 이체') {
      Api.v1ReservationAccount(Number(userId), {
        roomId: roomId,
        checkInTime: reservationDate.checkInTime,
        checkOutTime: reservationDate.checkOutTime,
        bankName: paymentAccountType,
        bankNum: bankNum,
        accountPassword: password,
      }).then((res) => {
        if (res.data.code === 200) {
          isShowError('결제가 완료되었습니다.');
          handleSubmit();
        }
      });
    }
  };
  const onClickClose = () => {
    onClose();
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (paymentType === '일반') {
      setBankNum(card.cardNum);
    } else if (paymentType === '간편 계좌 이체') {
      Api.v1GetBankNumber(paymentAccountType).then((res) => {
        if (res.data.code === 200) {
          const { bankNum } = res.data.data;
          setBankNum(bankNum);
          dispatch(
            setBank({
              bankNum: bankNum,
            }),
          );
        }
      });
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
            onChange={(e) => changePassword(e)}
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
