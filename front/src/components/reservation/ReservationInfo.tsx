import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/reservationInfo.scss';
import { RootState } from '../../store/modules';

const ReservationInfo = () => {
  const { place, reservationDate } = useSelector(
    (state: RootState) => state.reservation,
  );

  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <span>예약 정보</span>
      </div>
      <div className="reservation__info--form">
        <div className="reservation__info--form__title">{place.placeName}</div>
        <div className="reservation__info--form__detail">
          [{place.roomName}]
        </div>
        <div>
          <span className="reservation__info--form__detail--title">인원</span>
          <span>최대 {place.roomMaxNum}인</span>
        </div>
        <div>
          <span className="reservation__info--form__detail--title">주소</span>
          <span>{place.address}</span>
        </div>
      </div>
      <div className="reservation__info--detail">
        <div className="reservation__info--detail__box">
          <div className="title">체크인</div>
          <div className="text">{reservationDate.checkInTime}</div>
        </div>
        <div className="reservation__info--detail__box">
          <div className="title">체크아웃</div>
          <div className="text">{reservationDate.checkOutTime}</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
