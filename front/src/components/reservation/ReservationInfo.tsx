import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/reservationInfo.scss';
import { RootState } from '../../store/modules';

const ReservationInfo = () => {
  const { place, payment, member } = useSelector(
    (state: RootState) => state.reservation,
  );

  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <span>예약 정보</span>
      </div>
      <div className="reservation__info--form">
        <div className="reservation__info--form__title">
          호텔 더 스테이트 선유도점
        </div>
        <div className="reservation__info--form__detail">[스탠다드 퀸]</div>
        <div>
          <span className="reservation__info--form__detail--title">인원</span>
          <span>최대 2인</span>
        </div>
        <div>
          <span className="reservation__info--form__detail--title">주소</span>
          <span>서울 영등포구 양평동5가 62</span>
        </div>
      </div>
      <div className="reservation__info--detail">
        <div className="reservation__info--detail__box">
          <div className="title">체크인</div>
          <div className="text">2023.6.11(일) 15:00</div>
        </div>
        <div className="reservation__info--detail__box">
          <div className="title">체크아웃</div>
          <div className="text">2023.6.11(월) 10:00</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
