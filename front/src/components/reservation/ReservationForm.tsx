import React from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/reservationForm.scss';

const ReservationForm = () => {
  return (
    <div className="reservation__item">
      <div className="reservation__item--title secondary">
        <span>예약자 정보</span>
      </div>
      <div className="reservation__form--input">
        <div className="reservation__form--input__radio">
          <div className="reservation__form--input__radio-btn">
            <input
              type="radio"
              id="origin"
              name="reservation_radio"
              value="origin"
              className="reservation__radio-btn"
              defaultChecked
            />
            <label htmlFor="origin">예약자 정보와 동일</label>
          </div>
          <div className="reservation__form--input__radio-btn">
            <input
              type="radio"
              id="new"
              name="reservation_radio"
              value="new"
              className="reservation__radio-btn"
            />
            <label htmlFor="new">새로운 정보 입력</label>
          </div>
        </div>
        <div className="reservation__form--input__text">
          <div className="reservation__form--input__text--box">
            <span className="title">
              예약자<span className="star">*</span>
            </span>
            <input
              type="text"
              className="input-text"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="reservation__form--input__text--box">
            <span className="title">
              휴대폰 번호<span className="star">*</span>
            </span>
            <input
              type="text"
              className="input-text"
              placeholder="휴대폰 번호를 입력하세요"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
