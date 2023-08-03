import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/reservationForm.scss';
import { RootState } from '../../store/modules';

const ReservationForm = () => {
  const { member } = useSelector((state: RootState) => state.reservation);
  const [name, setName] = useState<string>(member.memberName);
  const [phone, setPhone] = useState<string>(member.memberPhone);

  const setMemberDefault = () => {
    setName(member.memberName);
    setPhone(member.memberPhone);
  };

  const setMemberNew = () => {
    setName('');
    setPhone('');
  };

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
              onChange={() => setMemberDefault()}
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
              onChange={() => setMemberNew()}
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
              value={name}
              placeholder="이름을 입력하세요"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="reservation__form--input__text--box">
            <span className="title">
              휴대폰 번호<span className="star">*</span>
            </span>
            <input
              type="text"
              className="input-text"
              value={phone}
              placeholder="휴대폰 번호를 입력하세요"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
