import React from 'react';
import ModalForm from '../common/modal/ModalForm';
import TextButton from '../common/TextButton';
import '../../styles/components/common/confirmModal.scss';

interface ConfirmModalProps {
  title: string;
  content: string;
  id: number;
  onClose: () => void;
  onSelectDelete: (id: number) => void;
}

const DeleteConfirmModal = ({
  id,
  onClose,
  onSelectDelete,
  title,
  content,
}: ConfirmModalProps) => {
  const onClickClose = () => {
    onClose();
  };

  const onClickConfirm = (e: React.MouseEvent<HTMLElement>) => {
    onSelectDelete(id);
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

export default DeleteConfirmModal;
