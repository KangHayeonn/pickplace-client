import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/reservationInfoModal.scss';

interface ReservationInfoModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const ReservationInfoModal = ({
  onClose,
  handleSubmit,
}: ReservationInfoModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="예약내역 확인" onClickEvent={onClickClose}>
      <div className="reservation-info-modal-form">
        <div className="reservation-info-modal-form__top">
          <div className="reservation-info-modal-form__title">유니언 호텔</div>
          <div className="reservation-info-modal-form__title-sub">
            [스탠다드 퀸]
          </div>
          <div className="reservation-info-modal-form__date">
            <div className="reservation-info-modal__title">체크인</div>
            <div className="reservation-info-modal__text">
              06월 11일(일) 15:00
            </div>
          </div>
          <div className="reservation-info-modal-form__date">
            <div className="reservation-info-modal__title">체크아웃</div>
            <div className="reservation-info-modal__text">
              06월 12일(월) 11:00
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
