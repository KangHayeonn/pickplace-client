import React from 'react';
import { useSelector } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/cardValidationModal.scss';
import { RootState } from '../../../store/modules';

interface CardValidationModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const CardValidationModal = ({
  onClose,
  handleSubmit,
}: CardValidationModalProps) => {
  const { payment } = useSelector((state: RootState) => state.reservation);

  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="일반 결제" onClickEvent={onClickClose}>
      <div>
        <div className="card-validation-modal-form__top">
          <div className="card-validation-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="card-validation-modal-form__top--text">
            {payment.roomPrice.toLocaleString()}원
          </div>
        </div>
        <div className="card-validation-modal-form__content">
          <div className="card-validation-modal-form__content--text">
            카드 번호
          </div>
          <input
            type="text"
            className="card-validation-modal-form__content--input"
            placeholder="카드번호 - 없이 입력"
            autoComplete="off"
            maxLength={16}
          />
        </div>
        <div className="card-validation-modal-form__content">
          <div className="card-validation-modal-form__content--text">
            CVC 번호
          </div>
          <input
            type="text"
            className="card-validation-modal-form__content--input"
            placeholder="CVC번호 뒤 3자리"
            autoComplete="off"
            maxLength={3}
          />
        </div>
        <div className="card-validation-modal-form__footer">
          <div className="card-validation-modal-form__footer--btn">
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

export default CardValidationModal;
