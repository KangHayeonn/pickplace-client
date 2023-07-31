import React, { useState } from 'react';
import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';
import { ReviewCardProps } from '../types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import DeleteConfirmModal from '../DeleteConfirmModal';

const ReviewCard = ({
  reviewItem,
  onUpdateBtnClick,
  onDeleteReview,
  onCardClick,
}: ReviewCardProps) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const onCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  return (
    <>
      {confirmModalOpen && (
        <DeleteConfirmModal
          title={'리뷰 삭제'}
          content={'삭제 시 리뷰를 복구할 수 없습니다. 정말 삭제하시겠습니까?'}
          id={reviewItem.reviewId}
          onClose={onCloseConfirmModal}
          onSelectDelete={onDeleteReview}
        />
      )}
      <div className="MyReview-card__container">
        <div className="MyReview-card__header">
          <div
            className="MyReview-card__header--col1"
            onClick={onCardClick(reviewItem.reviewId)}
          >
            <div
              className="detail-img__container"
              style={{
                backgroundImage: `url(${GetCategoryImage(
                  reviewItem.placeCategory,
                )})`,
              }}
            ></div>
          </div>
          <div
            className="MyReview-card__header--col2"
            onClick={onCardClick(reviewItem.reviewId)}
          >
            <div className="MyReview-card__header--row1">
              <h4 className="MyReview-placeName">{reviewItem.placeName}</h4>
            </div>
            <p className="MyReview-reservationId">
              예약 번호 : {reviewItem.reservationId}
            </p>
          </div>
          <div className="MyReview-btn_container">
            <button
              className="MyReview-btn"
              onClick={onUpdateBtnClick(reviewItem.reviewId)}
            >
              <img src={UpdateIcon} />
            </button>
            <button
              className="MyReview-btn"
              onClick={() => setConfirmModalOpen(true)}
            >
              <img src={DeleteIcon} />
            </button>
          </div>
        </div>
        <div
          className="MyReview-card__content"
          onClick={onCardClick(reviewItem.reviewId)}
        >
          <p className="MyReview-card__rating">
            <img className="MyReview-star" src={StarIcon} alt="star" />
            {reviewItem.reviewRating}
          </p>
          <div className="MyReview-card__reviewContent">
            {reviewItem.reviewContent}
          </div>
        </div>
        <div className="MyReview-card__info">
          <span className="MyReview-nickname">
            작성자 {reviewItem.memberName}
          </span>
          <span className="MyReview-date">{reviewItem.reviewCreatedDate}</span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
