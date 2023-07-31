import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../common/TextButton';
import '../../../styles/components/common/confirmModal.scss';

interface ConfirmModalProps {
  reviewId: number;
  onClose: () => void;
  onDeleteReview: (reviewId: number) => void;
}

const DeleteConfirmModal = ({
  reviewId,
  onClose,
  onDeleteReview,
}: ConfirmModalProps) => {
  const onClickClose = () => {
    onClose();
  };

  const onClickConfirm = (e: React.MouseEvent<HTMLElement>) => {
    onDeleteReview(reviewId);
    onClose();
  };

  return (
    <ModalForm title="" onClickEvent={onClickClose}>
      <div>
        <p>삭제 시 리뷰를 복구할 수 없습니다.</p>
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
