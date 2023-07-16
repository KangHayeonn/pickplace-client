import React from 'react';
import { reservationBtnsProps } from './types';

const ReservationBtns = ({
  reservationStatus,
  onClickRefuseBtn,
  onClickAcceptBtn,
}: reservationBtnsProps) => {
  return (
    <div className="reservedCard-btn__container">
      {reservationStatus == 'Approval' && (
        <button className="reservedCard-btn__complete" disabled>
          수락완료
        </button>
      )}
      {reservationStatus == 'Payment' && (
        <>
          <button
            className="reservedCard-btn__refuse"
            onClick={onClickRefuseBtn}
          >
            예약거절
          </button>
          <button
            className="reservedCard-btn__accept"
            onClick={onClickAcceptBtn}
          >
            예약수락
          </button>
        </>
      )}
    </div>
  );
};

export default ReservationBtns;
