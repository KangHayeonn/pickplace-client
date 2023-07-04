import React from 'react';
import '../../../styles/components/search/detail/searchDetailReservation.scss';

const SearchDetailReservation = () => {
  return (
    <div className="search-detail-reservation">
      <div className="search-detail-reservation__date">
        <span className="search-detail-reservation__date--title">
          예약 날짜
        </span>
        <span className="search-detail-reservation__info">calendar</span>
      </div>
      <div className="search-detail-reservation__time">
        <span className="search-detail-reservation__time--title">
          예약 시간
        </span>
        <span className="search-detail-reservation__info">calendar</span>
      </div>
    </div>
  );
};

export default SearchDetailReservation;
