import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import ReservationBtns from '../ReservationBtns';
import { reservedCardProps } from '../types';

const ReservedCard = ({ adminReservationProps }: reservedCardProps) => {
  const navigate = useNavigate();
  const onClickResevedCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      reservationId: adminReservationProps.reservationId,
    };
    navigate(
      `/mypage/manageReservation/detail/${adminReservationProps.reservationId}`,
      {
        state: state,
      },
    );
  };

  const onClickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약수락');
  };

  return (
    <div
      className="reservedCard-container"
      key={adminReservationProps.reservationId}
    >
      <div className="reservedCard-header" onClick={onClickResevedCard}>
        <h3 className="reservedCard-placeName">
          {adminReservationProps.roomName}
        </h3>
      </div>
      <div className="reservedCard-content" onClick={onClickResevedCard}>
        <ShowCardInfo
          childClassname={'checkin'}
          title={'체크인'}
          content={
            adminReservationProps.checkInDate +
            ' ' +
            adminReservationProps.checkInTime
          }
        />
        <ShowCardInfo
          childClassname={'checkout'}
          title={'체크아웃'}
          content={
            adminReservationProps.checkOutDate +
            ' ' +
            adminReservationProps.checkOutTime
          }
        />
      </div>
      <div className="reservedCard__btns">
        <ReservationBtns
          reservationStatus={adminReservationProps.reservationStatus}
          onClickAcceptBtn={onClickAcceptBtn}
        />
      </div>
    </div>
  );
};

export default ReservedCard;
