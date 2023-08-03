import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/components/search/detail/searchDetailReservation.scss';
import Calendar from '../../../components/common/Calendar';
import SelectBox from '../../../components/common/SelectBox';
import { RootState } from '../../../store/modules';

const dataTimeList = ['1시간', '2시간', '3시간'];

const SearchDetailReservation = () => {
  const category = useSelector((state: RootState) => state.optionForm.category);
  const [isPeriod, setIsPeriod] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<Array<Date | null>>([null, null]);

  const selectTime = (time: Date | null) => {
    setTime(time);
  };

  const selectDate = (date: Date | null) => {
    setStartDate(date);
  };

  const selectDateRange = (dateRange: Array<Date | null>) => {
    setDateRange(dateRange);
  };

  useEffect(() => {
    if (['호텔/리조트', '펜션', '게스트하우스'].includes(category)) {
      setIsPeriod(true);
    } else {
      setIsPeriod(false);
    }
  }, []);

  useEffect(() => {
    if (startDate && time) {
      // api logic
    }

    if (dateRange[1] !== null) {
      // api logic
    }
  }, [startDate, time, dateRange]);

  return (
    <div className="search-detail-reservation">
      {!isPeriod ? (
        <>
          <div className="search-detail-reservation__date">
            <span className="search-detail-reservation__date--title">
              예약 날짜
            </span>
            <span className="search-detail-reservation__info">
              <Calendar calendarType="date" selectDate={selectDate} />
            </span>
          </div>
          <div className="search-detail-reservation__time">
            <span className="search-detail-reservation__time--title">
              예약 시간
            </span>
            <span className="search-detail-reservation__info">
              <Calendar calendarType="time" selectTime={selectTime} />
            </span>
            <span className="search-detail-reservation__info">
              <SelectBox defaultText="1시간" selectBoxList={dataTimeList} />
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="search-detail-reservation__date">
            <span className="search-detail-reservation__date--title">
              예약 날짜
            </span>
            <span className="search-detail-reservation__info">
              <Calendar
                calendarType="range"
                selectDateRange={selectDateRange}
              />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchDetailReservation;
