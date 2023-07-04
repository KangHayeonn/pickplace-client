import React from 'react';

type reservationBtnsProps = {
  reservationStatus: string;
  onClickRefuseBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickAcceptBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ReservationBtns = ({
  reservationStatus,
  onClickRefuseBtn,
  onClickAcceptBtn,
}: reservationBtnsProps) => {
  return (
    <div className="reservedCard-btn__container">
      {reservationStatus == '수락완료' && (
        <button className="reservedCard-btn__complete" disabled>
          수락완료
        </button>
      )}
      {reservationStatus == '수락대기' && (
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
