import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/reservation/reservationTemplate.scss';
import { RootState } from '../../store/modules';
import { isShowError } from '../../components/common/ToastBox';
import useModals from '../common/modal/UseModals';
import ReservationInfoModal from './modal/ReservationInfoModal';
import CardValidationModal from './modal/CardValidationModal';
import AccountModal from './modal/AccountModal';
import QRCodeModal from './modal/QRCodeModal';
import PaymentModal from './modal/PaymentModal';

interface ReservationTemplateProps {
  children?: React.ReactNode;
}

const ReservationTemplate = ({ children }: ReservationTemplateProps) => {
  const navigate = useNavigate();
  const { agreement, payment, paymentType } = useSelector(
    (state: RootState) => state.reservation,
  );
  const { openModal } = useModals();

  // 예약 내역 확인
  const handleClick = () => {
    openModal(ReservationInfoModal, {
      onSubmit: async () => {
        handleClickPay();
      },
    });
  };

  // 결제 페이지
  const handleClickPay = () => {
    if (paymentType === '일반') {
      openModal(CardValidationModal, {
        onSubmit: async () => {
          handleClickPayPassword();
        },
      });
    } else if (paymentType === '간편 계좌 이체') {
      openModal(AccountModal, {
        onSubmit: async () => {
          handleClickPayPassword();
        },
      });
    } else {
      openModal(QRCodeModal, {
        onSubmit: async () => {
          handleClickPayPassword();
        },
      });
    }
  };

  // 결제 비밀번호
  const handleClickPayPassword = () => {
    openModal(PaymentModal, {
      onSubmit: async () => {
        navigate('/main');
      },
    });
  };

  const pay = async () => {
    if (paymentType === '') {
      isShowError('결제 수단을 입력하세요');
      return;
    }

    if (!agreement[0] || !agreement[1] || !agreement[2]) {
      isShowError('필수항목에 동의해주세요');
      return;
    }

    handleClick();
  };

  return (
    <div className="reservation-container">
      <form className="reservation-container__form">
        {children}
        <button
          type="button"
          className="reservation__btn"
          onClick={() => pay()}
        >
          {payment.roomPrice.toLocaleString()}원 결제하기
        </button>
      </form>
    </div>
  );
};

export default ReservationTemplate;
