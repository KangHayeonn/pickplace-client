import React from 'react';
import { useSelector } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/reservationInfoModal.scss';
import { RootState } from '../../../store/modules';

interface ReservationInfoModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const ReservationInfoModal = ({
  onClose,
  handleSubmit,
}: ReservationInfoModalProps) => {
  const { place, reservationDate } = useSelector(
    (state: RootState) => state.reservation,
  );

  const onClickEvent = () => {
    handleSubmit();
    onClickClose();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="예약내역 확인" onClickEvent={onClickClose}>
      <div className="reservation-info-modal-form">
        <div className="reservation-info-modal-form__top">
          <div className="reservation-info-modal-form__title">
            {place.placeName}
          </div>
          <div className="reservation-info-modal-form__title-sub">
            [{place.roomName}]
          </div>
          <div className="reservation-info-modal-form__date">
            <div className="reservation-info-modal__title">체크인</div>
            <div className="reservation-info-modal__text">
              {reservationDate.checkInTime}
            </div>
          </div>
          <div className="reservation-info-modal-form__date">
            <div className="reservation-info-modal__title">체크아웃</div>
            <div className="reservation-info-modal__text">
              {reservationDate.checkOutTime}
            </div>
          </div>
          <div className="reservation-info-modal-form__description">
            <b className="reservation-info-modal-form__highlight">
              취소/환불 규정
            </b>
            에 따라 예약취소 가능한 상품입니다. 예약취소 시 취소수수료가 발생할
            수 있습니다.
          </div>
        </div>
        <div className="reservation-info-modal-form__footer">
          <div className="reservation-info-modal-form__footer--btn">
            <TextButton text="취소" onClick={onClickClose} />
          </div>
          <div className="reservation-info-modal-form__footer--btn">
            <TextButton
              text="동의 후 결제"
              classType="secondary long"
              onClick={onClickEvent}
            />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default ReservationInfoModal;
