import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import { reservedCardProps } from '../types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';

const ReservedCard = ({
  adminReservationProps,
  placeCategory,
  placeName,
}: reservedCardProps) => {
  const navigate = useNavigate();
  const onClickResevedCard = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(
      `/mypage/manageReservation/detail/${adminReservationProps.reservationId}`,
    );
  };
  return (
    <div
      className="reservedCard-container"
      key={adminReservationProps.reservationId}
    >
      <div className="reservedCard-header" onClick={onClickResevedCard}>
        <div
          className="reservedCard__img--container"
          style={{
            backgroundImage: `url(${GetCategoryImage(placeCategory)})`,
          }}
        ></div>
        <div className="reservedCard-content" onClick={onClickResevedCard}>
          <h3 className="reservedCard-placeName">
            {adminReservationProps.roomName}
          </h3>
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
      </div>
    </div>
  );
};

export default ReservedCard;
