import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from '../../../assets/images/star-full.svg';
import { detailHeaderProps } from './types';
import '../../../styles/components/mypage/reservation/detailHeader.scss';
import leftArrow from '../../../assets/images/arrow-left.svg';

const DetailHeader = ({
  placeName,
  placeRating,
  reservationStatus,
  ReviewExistence,
  setCreateModalOpen,
}: detailHeaderProps) => {
  const navigate = useNavigate();

  const onClickCreateReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCreateModalOpen(true);
  };
  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };
  return (
    <div className="detail-header">
      <div className="detail-img__container">
        <button className="reservation-detail__back--btn" onClick={onClickBack}>
          <img src={leftArrow} className="reservation-detail__leftArrow" />
        </button>
      </div>
      <div className="detail-header__content">
        <h2 className="detail-placeName">{placeName}</h2>
        <p className="detail-star">
          <img src={StarIcon} alt="Star Icon" />
          {placeRating}
        </p>
        <p className="detail-reservationStatus">
          {reservationStatus}
          {reservationStatus == '이용 완료' &&
            (ReviewExistence ? (
              <span className="reviewCompleted">리뷰 작성 완료</span>
            ) : (
              <span className="review" onClick={onClickCreateReview}>
                리뷰 작성하기
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default DetailHeader;
