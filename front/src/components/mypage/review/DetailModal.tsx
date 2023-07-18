import React, { useState } from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import UpdateModal from './UpdateModal';
import useModals from '../../../components/common/modal/UseModals';
import ReviewModalHeader from './ReviewModalHeader';

import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';

import { reviewDetailProps } from '../types';
import {
  myReviewDetail,
  myReviewDetail2,
} from '../../../utils/mock/myReviewList';
import '../../../styles/components/mypage/review/detailModal.scss';

interface DetailModalProps {
  onClose: () => void;
  reviewId: number;
}

const DetailModal = ({ onClose, reviewId }: DetailModalProps) => {
  const [reviewDetail, setReviewDetail] =
    useState<reviewDetailProps>(myReviewDetail2);
  const { openModal } = useModals();
  const { closeModal } = useModals();

  const onClickClose = () => {
    closeModal(DetailModal);
    onClose();
  };
  const onDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      //delete api
    }
  };
  const onUpdateBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickClose();
    openModal(UpdateModal, {
      onSubmit: async () => {
        // update api
      },
    });
  };

  return (
    <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
      <div className="DetailModal-container">
        <ReviewModalHeader reviewDetail={reviewDetail} />
        <div className="DetailModal-content">
          <div className="DetailModal-content__row1">
            <div className="DetailModal-card__rating">
              <img className="DetailModal-star" src={StarIcon} alt="star" />
              {reviewDetail.rating}
            </div>
            <div className="DetailModal-btn_container">
              <button className="DetailModal-btn" onClick={onUpdateBtnClick}>
                <img src={UpdateIcon} />
              </button>
              <button className="DetailModal-btn" onClick={onDeleteBtnClick}>
                <img src={DeleteIcon} />
              </button>
            </div>
          </div>

          <div className="DetailModal-card__reviewContent">
            {reviewDetail.content}
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default DetailModal;
