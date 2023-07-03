import React from 'react';
import '../../../styles/components/search/detail/searchDetailReservation.scss';

const SearchDetailReservation = () => {
  return (
    <div className="reservation">
      <div className="reservation__date">
        <span className="title">예약 날짜</span>
        <span>calendar</span>
      </div>
      <div className="reservation__time">
        <span className="title">예약 시간</span>
        <span>calendar</span>
      </div>
    </div>
  );
};

export default SearchDetailReservation;
