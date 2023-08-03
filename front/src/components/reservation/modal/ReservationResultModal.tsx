import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/reservationResultModal.scss';

interface ReservationResultModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const ReservationResultModal = ({
  onClose,
  handleSubmit,
}: ReservationResultModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="네이버페이 결제" onClickEvent={onClickClose}>
      <div className="reservation-result-modal-form">
        <div className="reservation-result-modal-form__top">
          <div className="reservation-result-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="reservation-result-modal-form__top--text">
            99,000원
          </div>
        </div>
        <div className="reservation-result-modal-form__text">
          결제가 완료되었습니다.
        </div>
        <div className="reservation-result-modal-form__detail">
          <div className="reservation-result-modal-form__title">
            유니언 호텔
          </div>
          <div className="reservation-result-modal-form__title-sub">
            [스탠다드 퀸]
          </div>
          <div className="reservation-result-modal-form__date">
            <div className="reservation-result-modal__title">체크인</div>
            <div className="reservation-result-modal__text">
              06월 11일(일) 15:00
            </div>
          </div>
          <div className="reservation-result-modal-form__date">
            <div className="reservation-result-modal__title">체크아웃</div>
            <div className="reservation-result-modal__text">
              06월 12일(월) 11:00
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
