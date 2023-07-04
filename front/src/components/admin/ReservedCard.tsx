import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../mypage/ShowCardInfo';

type reservedCardProps = {
  adminReservationProps: {
    reservationId: number;
    placeId: number;
    placeName: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    reservationStatus: string;
  };
};

const ReservedCard = ({ adminReservationProps }: reservedCardProps) => {
  const navigate = useNavigate();
  const onClickResevedCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: adminReservationProps.reservationId,
    };
    navigate('/reservationDetail', {
      state: state,
    });
  };
  const onClickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('수락완료');
  };
  const onClickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약취소');
  };
  return (
    <div className="reservedCard-container" key={adminReservationProps.placeId}>
      <div className="reservedCard-header" onClick={onClickResevedCard}>
        <h3 className="reservedCard-placeName">
          {adminReservationProps.placeName}
        </h3>
      </div>
      <div className="reservedCard-content" onClick={onClickResevedCard}>
        <ShowCardInfo
          childClassname={'checkin'}
          title={'체크인'}
          content={
            adminReservationProps.startDate +
            ' ' +
            adminReservationProps.startTime
          }
        />
        <ShowCardInfo
          childClassname={'checkout'}
          title={'체크아웃'}
          content={
            adminReservationProps.endDate + ' ' + adminReservationProps.endTime
          }
        />
      </div>
      <div className="reservedCard-btn__container">
        {adminReservationProps.reservationStatus == '수락완료' && (
          <button className="reservedCard-btn__complete" disabled>
            수락완료
          </button>
        )}
        {adminReservationProps.reservationStatus == '수락대기' && (
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
    </div>
  );
};

export default ReservedCard;
