import React, { useState, useEffect } from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useParams } from 'react-router-dom';
import '../../../styles/components/search/detail/searchDetailReservation.scss';
import Calendar from '../../../components/common/Calendar';
import SelectBox from '../../../components/common/SelectBox';
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from '../../../utils/dataFormat';
// api
import { SearchDetailType } from '../../../api/search/types';
// redux
import { RootState } from '../../../store/modules';
import { searchDetail } from '../../../store/modules/searchDetail';

const dataTimeList = ['1시간', '2시간', '3시간'];

const SearchDetailReservation = () => {
  const { searchId } = useParams();
  const placeId = Number(searchId);
  const category = useSelector((state: RootState) => state.optionForm.category);
  const [isPeriod, setIsPeriod] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<Array<Date | null>>([null, null]);
  const [perTime, setPerTime] = useState<string>('1시간');
  const dispatch: ThunkDispatch<SearchDetailType, void, AnyAction> =
    useDispatch();

  const selectTime = (time: Date | null) => {
    setTime(time);
  };

  const selectDate = (date: Date | null) => {
    setStartDate(date);
  };

  const selectDateRange = (dateRange: Array<Date | null>) => {
    setDateRange(dateRange);
  };

  const onChangePerTime = (newTime: string) => {
    setPerTime(newTime);
  };

  const getPlaceDetail = async () => {
    if (['호텔/리조트', '펜션', '게스트하우스'].includes(category)) {
      if (dateRange[0] !== null && dateRange[1] !== null) {
        const data = {
          startDate: toStringByFormatting(dateRange[0]),
          endDate: toStringByFormatting(dateRange[1]),
        };
        await dispatch(searchDetail(placeId, data));
      }
    } else {
      if (startDate && time) {
        const tempTime = new Date(time);
        const newTime = new Date(
          tempTime.setHours(
            time.getHours() + Number(perTime.replace('시간', '')),
          ),
        );

        const data = {
          startDate: toStringByFormatting(startDate),
          endDate: toStringByFormatting(startDate),
          startTime: toStringByFormattingTime(time),
          endTime: toStringByFormattingTime(newTime),
        };
        await dispatch(searchDetail(placeId, data));
      }
    }
  };

  useEffect(() => {
    if (['호텔/리조트', '펜션', '게스트하우스'].includes(category)) {
      setIsPeriod(true);
    } else {
      setIsPeriod(false);
    }
  }, []);

  useEffect(() => {
    getPlaceDetail();
  }, [startDate, time, dateRange, perTime]);

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
              <SelectBox
                defaultText="1시간"
                selectBoxList={dataTimeList}
                onChangeCategory={onChangePerTime}
              />
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
