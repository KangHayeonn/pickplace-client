import React from 'react';
import '../../../styles/components/search/detail/searchDetailReservation.scss';
import Calendar from '../../../components/common/Calendar';

const SearchDetailReservation = () => {
  return (
    <div className="search-detail-reservation">
      <div className="search-detail-reservation__date">
        <span className="search-detail-reservation__date--title">
          예약 날짜
        </span>
        <span className="search-detail-reservation__info">
          <Calendar calendarType="date" />
        </span>
      </div>
      <div className="search-detail-reservation__time">
        <span className="search-detail-reservation__time--title">
          예약 시간
        </span>
        <span className="search-detail-reservation__info">
          <Calendar calendarType="time" />
        </span>
      </div>
    </div>
  );
};

export default SearchDetailReservation;
