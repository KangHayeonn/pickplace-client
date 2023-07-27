import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReviewModalHeader from './ReviewModalHeader';

import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';
import Review from '../../../api/review';

import { reviewDetailProps } from '../types';
import '../../../styles/components/mypage/review/detailModal.scss';

type DetailModalProps = {
  reviewId: number;
  onUpdateBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailModal = ({
  reviewId,
  setUpdateModalOpen,
  setDetailModalOpen,
  onDeleteBtnClick,
  onUpdateBtnClick,
}: DetailModalProps) => {
  const [reviewDetail, setReviewDetail] = useState<reviewDetailProps>({
    reviewId: 0,
    reviewDate: '',
    reviewContent: '',
    reviewRating: 0,
    reservationDate: '',
    memberName: '',
    placeAddress: '',
    placeName: '',
  });

  const onClickClose = () => {
    setDetailModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    getUserReviewDetail();
  }, []);

  const getUserReviewDetail = () => {
    Review.v1GetReviewDetail(reviewId)
      .then((res) => {
        setReviewDetail(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  return (
    <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
      <div className="DetailModal-container">
        <ReviewModalHeader
          memberName={reviewDetail.memberName}
          reviewDate={reviewDetail.reviewDate}
          placeAddress={reviewDetail.placeAddress}
          reservationDate={reviewDetail.reservationDate}
        />
        <div className="DetailModal-content">
          <div className="DetailModal-content__row1">
            <div className="DetailModal-card__rating">
              <img className="DetailModal-star" src={StarIcon} alt="star" />
              {reviewDetail.reviewRating}
            </div>
            <div className="DetailModal-btn_container">
              <button
                className="DetailModal-btn"
                onClick={onUpdateBtnClick(reviewId)}
              >
                <img src={UpdateIcon} />
              </button>
              <button
                className="DetailModal-btn"
                onClick={onDeleteBtnClick(reviewId)}
              >
                <img src={DeleteIcon} />
              </button>
            </div>
          </div>
          <div className="DetailModal-card__reviewContent">
            {reviewDetail.reviewContent}
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default DetailModal;
