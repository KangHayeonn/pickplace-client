import React, { useState } from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import useModals from '../../../components/common/modal/UseModals';

import PinIcon from '../../../assets/images/pin.svg';
import ClockIcon from '../../../assets/images/clock.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import '../../../styles/components/mypage/review/reviewModalHeader.scss';
import {
  myReviewDetail,
  myReviewDetail2,
} from '../../../utils/mock/myReviewList';
import { reviewDetailProps } from '../types';

interface ReviewModalHeaderProps {
  reviewDetail: reviewDetailProps;
}

const ReviewModalHeader = ({ reviewDetail }: ReviewModalHeaderProps) => {
  return (
    <>
      <div className="ReviewModalHeader-top">
        <span className="ReviewModalHeader-nickname">
          <img className="ReviewModalHeader-profileIcon" src={ProfileIcon} />
          {reviewDetail.nickname} 님이 작성함
        </span>
        <span className="ReviewModalHeader-date">{reviewDetail.date}</span>
      </div>
      <div className="ReviewModalHeader-header">
        <div className="ReviewModalHeader-img__container"></div>
        <div className="ReviewModalHeader-reviewInfo">
          <div className="ReviewModalHeader-address">
            <img className="ReviewModalHeader-pinIcon" src={PinIcon} />
            {reviewDetail.placeAddress}
          </div>
          <div className="ReviewModalHeader-dateOfUse">
            <img className="ReviewModalHeader-clockIcon" src={ClockIcon} />
            {reviewDetail.startDate == reviewDetail.endDate ? (
              <div>
                <span>{reviewDetail.startDate} </span>
                <span>
                  {reviewDetail.startTime} ~ {reviewDetail.endTime}
                </span>
              </div>
            ) : (
              <div className="ReviewModalHeader-dateRange">
                <p>
                  {reviewDetail.startDate} {reviewDetail.startTime}
                </p>
                <p>
                  {reviewDetail.endDate} {reviewDetail.endTime}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModalHeader;
