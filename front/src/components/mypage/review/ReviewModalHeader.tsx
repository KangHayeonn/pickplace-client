import React from 'react';
import PinIcon from '../../../assets/images/pin.svg';
import ClockIcon from '../../../assets/images/clock.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import '../../../styles/components/mypage/review/reviewModalHeader.scss';

interface ReviewModalHeaderProps {
  nickname?: string;
  date?: string;
  placeAddress: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

const ReviewModalHeader = ({
  nickname,
  date,
  placeAddress,
  startDate,
  endDate,
  startTime,
  endTime,
}: ReviewModalHeaderProps) => {
  return (
    <>
      <div className="ReviewModalHeader-top">
        {nickname && (
          <span className="ReviewModalHeader-nickname">
            <img className="ReviewModalHeader-profileIcon" src={ProfileIcon} />
            {nickname} 님이 작성함
          </span>
        )}
        {date && <span className="ReviewModalHeader-date">{date}</span>}
      </div>
      <div className="ReviewModalHeader-header">
        <div className="ReviewModalHeader-img__container"></div>
        <div className="ReviewModalHeader-reviewInfo">
          <div className="ReviewModalHeader-address">
            <img className="ReviewModalHeader-pinIcon" src={PinIcon} />
            {placeAddress}
          </div>
          <div className="ReviewModalHeader-dateOfUse">
            <img className="ReviewModalHeader-clockIcon" src={ClockIcon} />
            {startDate == endDate ? (
              <div>
                <span>{startDate} </span>
                <span>
                  {startTime} ~ {endTime}
                </span>
              </div>
            ) : (
              <div className="ReviewModalHeader-dateRange">
                <p>
                  {startDate} {startTime}
                </p>
                <p>
                  {endDate} {endTime}
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
