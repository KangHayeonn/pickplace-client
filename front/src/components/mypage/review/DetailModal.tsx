import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReviewModalHeader from './ReviewModalHeader';

import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';
import Review from '../../../api/review';

import { reviewDetailProps } from '../types';
import {
  myReviewDetail,
  myReviewDetail2,
} from '../../../utils/mock/myReviewList';
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
  const [reviewDetail, setReviewDetail] =
    useState<reviewDetailProps>(myReviewDetail2);

  const onClickClose = () => {
    setDetailModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    // getUserReviewDetail();
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
          nickname={reviewDetail.nickname}
          date={reviewDetail.date}
          placeAddress={reviewDetail.placeAddress}
          startDate={reviewDetail.startDate}
          endDate={reviewDetail.endDate}
          startTime={reviewDetail.startTime}
          endTime={reviewDetail.endTime}
        />
        <div className="DetailModal-content">
          <div className="DetailModal-content__row1">
            <div className="DetailModal-card__rating">
              <img className="DetailModal-star" src={StarIcon} alt="star" />
              {reviewDetail.rating}
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
            {reviewDetail.content}
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default DetailModal;
