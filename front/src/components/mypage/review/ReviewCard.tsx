import React from 'react';
import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';
import { reviewProps } from '../types';

export type ReviewCardProps = {
  item: reviewProps;
  onUpdateBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCardClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLDivElement>) => void;
};
const ReviewCard = ({
  item,
  onUpdateBtnClick,
  onDeleteBtnClick,
  onCardClick,
}: ReviewCardProps) => {
  return (
    <div className="MyReview-card__container">
      <div className="MyReview-card__header">
        <div
          className="MyReview-card__header--col1"
          onClick={onCardClick(item.reviewId)}
        >
          <div className="detail-img__container"></div>
        </div>
        <div
          className="MyReview-card__header--col2"
          onClick={onCardClick(item.reviewId)}
        >
          <div className="MyReview-card__header--row1">
            <h4 className="MyReview-placeName">{item.placeName}</h4>
          </div>
          <p className="MyReview-reservationId">
            예약 번호 : {item.reservationId}
          </p>
        </div>
        <div className="MyReview-btn_container">
          <button
            className="MyReview-btn"
            onClick={onUpdateBtnClick(item.reviewId)}
          >
            <img src={UpdateIcon} />
          </button>
          <button
            className="MyReview-btn"
            onClick={onDeleteBtnClick(item.reviewId)}
          >
            <img src={DeleteIcon} />
          </button>
        </div>
      </div>
      <div
        className="MyReview-card__content"
        onClick={onCardClick(item.reviewId)}
      >
        <p className="MyReview-card__rating">
          <img className="MyReview-star" src={StarIcon} alt="star" />
          {item.rating}
        </p>
        <div className="MyReview-card__reviewContent">{item.content}</div>
      </div>
      <div className="MyReview-card__info">
        <span className="MyReview-nickname">작성자 {item.nickname}</span>
        <span className="MyReview-date">{item.date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
