import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/components/common/calendar.scss';
import { ko } from 'date-fns/esm/locale';
import { setHours, setMinutes } from 'date-fns';

interface CalendarProps {
  calendarType?: string;
  selectTime?: (time: Date | null) => void;
  selectDate?: (date: Date | null) => void;
  selectDateRange?: (dateRange: Array<Date | null>) => void;
}

const Calendar = ({
  calendarType,
  selectTime,
  selectDate,
  selectDateRange,
}: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<Array<Date | null>>([null, null]);
  const [startDateRange, endDateRange] = dateRange;

  const onClickTime = (date: Date | null) => {
    if (selectTime) selectTime(date);
    setTime(date);
  };

  const onClickDate = (date: Date | null) => {
    if (selectDate) selectDate(date);
    setStartDate(date);
  };

  const onClickDateRange = (range: Array<Date | null>) => {
    if (selectDateRange) selectDateRange(range);
    setDateRange(range);
  };

  if (calendarType === 'time') {
    return (
      <div className="calendar-wrapper">
        <DatePicker
          showIcon
          locale={ko}
          selected={time}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          minTime={setHours(setMinutes(new Date(), 0), 15)}
          maxTime={setHours(setMinutes(new Date(), 0), 23)}
          dateFormat="h:mm aa"
          onChange={(date) => onClickTime(date)}
          className="calendar-time"
          placeholderText="시간 입력"
        />
      </div>
    );
  }

  if (calendarType === 'range') {
    return (
      <div className="calendar-wrapper">
        <DatePicker
          showIcon
          locale={ko}
          selectsRange={true}
          startDate={startDateRange}
          endDate={endDateRange}
          minDate={new Date()}
          dateFormat="yyyy.MM.dd"
          onChange={(update) => {
            onClickDateRange(update);
          }}
          className="calendar-range"
          placeholderText="기간 입력"
        />
      </div>
    );
  }

  return (
    <div className="calendar-wrapper">
      <DatePicker
        showIcon
        locale={ko}
        selected={startDate}
        minDate={new Date()}
        dateFormat="yyyy.MM.dd"
        onChange={(date) => {
          onClickDate(date);
        }}
        placeholderText="날짜 입력"
      />
    </div>
  );
};

export default Calendar;
