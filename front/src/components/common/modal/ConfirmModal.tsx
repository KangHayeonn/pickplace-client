import React from 'react';
import ModalForm from './ModalForm';
import TextButton from '../TextButton';
import '../../../styles/components/common/confirmModal.scss';
// import useModals from '../../../components/common/modal/UseModals';

interface ConfirmModalProps {
  onClose: () => void;
  handleSubmit: () => void;
}

const ConfirmModal = ({ onClose, handleSubmit }: ConfirmModalProps) => {
  // const { closeModal } = useModals();
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    // closeModal(ConfirmModal);
    onClose();
  };

  return (
    <ModalForm title="정말 탈퇴하시겠습니까?" onClickEvent={onClickClose}>
      <div>
        <p>회원 탈퇴시 모든 정보가 삭제되며 복구되지 않습니다.</p>
        <p>그래도 탈퇴하시겠습니까?</p>
        <div className="modal-form__footer">
          <div className="modal-form__footer--btn">
            <TextButton text="네" onClick={onClickEvent} />
          </div>
          <div className="modal-form__footer--btn">
            <TextButton text="아니요" onClick={onClickClose} />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default ConfirmModal;
