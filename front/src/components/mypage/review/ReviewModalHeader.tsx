import React from 'react';
import PinIcon from '../../../assets/images/pin.svg';
import ClockIcon from '../../../assets/images/clock.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import '../../../styles/components/mypage/review/reviewModalHeader.scss';
import { ReviewModalHeaderProps } from '../types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';

const ReviewModalHeader = ({
  memberName,
  reviewDate,
  placeAddress,
  reservationDate,
  category,
}: ReviewModalHeaderProps) => {
  return (
    <>
      <div className="ReviewModalHeader-top">
        {memberName && (
          <span className="ReviewModalHeader-nickname">
            <img className="ReviewModalHeader-profileIcon" src={ProfileIcon} />
            {memberName} 님이 작성함
          </span>
        )}
        {reviewDate && (
          <span className="ReviewModalHeader-date">{reviewDate}</span>
        )}
      </div>
      <div className="ReviewModalHeader-header">
        <div
          className="ReviewModalHeader-img__container"
          style={{
            backgroundImage: `url(${GetCategoryImage(category)})`,
          }}
        ></div>
        <div className="ReviewModalHeader-reviewInfo">
          <div className="ReviewModalHeader-address">
            <img className="ReviewModalHeader-pinIcon" src={PinIcon} />
            {placeAddress}
          </div>
          <div className="ReviewModalHeader-dateOfUse">
            <img className="ReviewModalHeader-clockIcon" src={ClockIcon} />
            <div>
              <span>{reservationDate} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModalHeader;
