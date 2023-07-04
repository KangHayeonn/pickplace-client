import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import ReservationBtns from '../ReservationBtns';

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
    navigate(
      `/manage/reservation/detail/${adminReservationProps.reservationId}`,
      {
        state: state,
      },
    );
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
      <div className="reservedCard__btns">
        <ReservationBtns
          reservationStatus={adminReservationProps.reservationStatus}
          onClickAcceptBtn={onClickAcceptBtn}
          onClickRefuseBtn={onClickRefuseBtn}
        />
      </div>
    </div>
  );
};

export default ReservedCard;
