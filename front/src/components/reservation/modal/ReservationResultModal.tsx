import React from 'react';
import { useSelector } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/reservationResultModal.scss';
import { RootState } from '../../../store/modules';

interface ReservationResultModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const ReservationResultModal = ({
  onClose,
  handleSubmit,
}: ReservationResultModalProps) => {
  const { payment, place, reservationDate, paymentType } = useSelector(
    (state: RootState) => state.reservation,
  );
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title={`${paymentType} 결제`} onClickEvent={onClickClose}>
      <div className="reservation-result-modal-form">
        <div className="reservation-result-modal-form__top">
          <div className="reservation-result-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="reservation-result-modal-form__top--text">
            {payment.roomPrice.toLocaleString()}원
          </div>
        </div>
        <div className="reservation-result-modal-form__text">
          결제가 완료되었습니다.
        </div>
        <div className="reservation-result-modal-form__detail">
          <div className="reservation-result-modal-form__title">
            {place.placeName}
          </div>
          <div className="reservation-result-modal-form__title-sub">
            [{place.roomName}]
          </div>
          <div className="reservation-result-modal-form__date">
            <div className="reservation-result-modal__title">체크인</div>
            <div className="reservation-result-modal__text">
              {reservationDate.checkInTime}
            </div>
          </div>
          <div className="reservation-result-modal-form__date">
            <div className="reservation-result-modal__title">체크아웃</div>
            <div className="reservation-result-modal__text">
              {reservationDate.checkOutTime}
            </div>
          </div>
        </div>
        <div className="reservation-result-modal-form__footer">
          <div className="reservation-result-modal-form__footer--btn">
            <TextButton
              text="확인"
              classType="secondary long"
              onClick={onClickEvent}
            />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default ReservationResultModal;
