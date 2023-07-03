import React from 'react';
import StarIcon from '../../../assets/images/star.png';
import * as type from '../types';
import '../../../styles/components/mypage/reservation/detailHeader.scss';

const DetailHeader = ({
  placeName,
  placeRating,
  reservationStatus,
  ReviewExistence,
}: type.detailHeaderProps) => {
  return (
    <div className="detail-header">
      <div className="detail-img__container">{/* <img /> */}</div>
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
              <span className="review">리뷰 작성 완료</span>
            ) : (
              <span className="review">리뷰 작성하기</span>
            ))}
          {reservationStatus == '이용 전' && (
            <span className="review">예약 취소</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default DetailHeader;
