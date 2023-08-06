import React, { useState, useEffect } from 'react';
import StarIcon from '../../../assets/images/star-full.svg';
import PinIcon from '../../../assets/images/pin.svg';
import ClockIcon from '../../../assets/images/clock.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import ModalForm from '../../../components/common/modal/ModalForm';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import Api from '../../../api/review';

interface SearchReviewDetailProps {
  id?: number;
  onClose: () => void;
}

interface ReviewDetailProps {
  reviewId: number;
  placeName: string;
  placeCategory: string;
  memberName: string;
  reviewDate: string;
  placeAddress: string;
  reservationDate: string;
  reviewRating: number;
  reviewContent: string;
}

const SearchReviewDetailModal = ({ id, onClose }: SearchReviewDetailProps) => {
  const [reviewDetail, setReviewDetail] = useState<ReviewDetailProps>({
    reviewId: 7,
    placeName: '글래드 여의도',
    placeCategory: '호텔/리조트',
    memberName: '리디아',
    reviewDate: '2023년 07월 31일',
    placeAddress: '서울 영등포구 의사당대로 16',
    reservationDate: '2023/07/25 15:33',
    reviewRating: 5.0,
    reviewContent: '너무 좋아요!',
  });

  const onClickClose = () => {
    onClose();
  };

  useEffect(() => {
    if (id) {
      Api.v1GetReviewDetail(id).then((res) => {
        if (res.data.code === 200) {
          setReviewDetail(res.data.data);
        }
      });
    }
  }, [id]);

  return (
    <>
      <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
        <div className="DetailModal-container">
          <div className="ReviewModalHeader-top">
            {reviewDetail?.memberName && (
              <span className="ReviewModalHeader-nickname">
                <img
                  className="ReviewModalHeader-profileIcon"
                  src={ProfileIcon}
                />
                {reviewDetail.memberName} 님이 작성함
              </span>
            )}
            {reviewDetail.reviewDate && (
              <span className="ReviewModalHeader-date">
                {reviewDetail.reviewDate}
              </span>
            )}
          </div>
          <div className="ReviewModalHeader-header">
            <div
              className="ReviewModalHeader-img__container"
              style={{
                backgroundImage: `url(${GetCategoryImage(
                  reviewDetail.placeCategory,
                )})`,
              }}
            ></div>
            <div className="ReviewModalHeader-reviewInfo">
              <div className="ReviewModalHeader-address">
                <img className="ReviewModalHeader-pinIcon" src={PinIcon} />
                {reviewDetail.placeAddress}
              </div>
              <div className="ReviewModalHeader-dateOfUse">
                <img className="ReviewModalHeader-clockIcon" src={ClockIcon} />
                <div>
                  <span>{reviewDetail.reservationDate} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="DetailModal-content">
            <div className="DetailModal-content__row1">
              <div className="DetailModal-card__rating">
                <img className="DetailModal-star" src={StarIcon} alt="star" />
                {reviewDetail.reviewRating}
              </div>
            </div>
            <div className="DetailModal-card__reviewContent">
              {reviewDetail.reviewContent}
            </div>
          </div>
        </div>
      </ModalForm>
    </>
  );
};

export default SearchReviewDetailModal;
