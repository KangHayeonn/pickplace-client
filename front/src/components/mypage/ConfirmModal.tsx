import React from 'react';
import ModalForm from '../common/modal/ModalForm';
import TextButton from '../common/TextButton';
import '../../styles/components/common/confirmModal.scss';

interface ConfirmModalProps {
  title: string;
  content: string;
  onClose: () => void;
  onCloseConfirmModal: () => void;
}

const ConfirmModal = ({
  title,
  content,
  onClose,
  onCloseConfirmModal,
}: ConfirmModalProps) => {
  const onClickClose = () => {
    onCloseConfirmModal();
  };

  const onClickConfirm = (e: React.MouseEvent<HTMLElement>) => {
    onCloseConfirmModal();
    onClose();
  };

  return (
    <ModalForm title={title} onClickEvent={onClickClose}>
      <div>
        <p>{content}</p>
        <div className="modal-form__footer">
          <div className="modal-form__footer--btn">
            <TextButton text="취소" onClick={onClickClose} />
          </div>
          <div className="modal-form__footer--btn">
            <TextButton text="확인" onClick={onClickConfirm} />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default ConfirmModal;
