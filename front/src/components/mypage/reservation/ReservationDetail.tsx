import React, { useState, useEffect } from 'react';
import { reservationDetail } from '../../../utils/mock/reservationDetail';
import { useLocation } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import '../../../styles/components/mypage/reservation/reservationDetail.scss';
import CreateModal from '../review/CreateModal';
import User from '../../../api/mypage';

const ReservationDetail = () => {
  const { state } = useLocation();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  // const [reservationDetail, setReservationDetail] = useState();

  useEffect(() => {
    getUserReservationDetail();
  }, []);

  const getUserReservationDetail = () => {
    User.v1GetUserReservationDetail(state.id)
      .then((res) => {
        // setReservationDetail(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  return (
    <div className="reservation-detail">
      {createModalOpen && (
        <CreateModal
          setCreateModalOpen={setCreateModalOpen}
          reservationId={state.id}
        />
      )}
      {reservationDetail && (
        <DetailHeader
          placeName={reservationDetail.placeName}
          placeRating={reservationDetail.placeRating}
          reservationStatus={reservationDetail.reservationStatus}
          ReviewExistence={reservationDetail.ReviewExistence}
          setCreateModalOpen={setCreateModalOpen}
        />
      )}
      {reservationDetail && (
        <DetailContent
          address={reservationDetail.placeAddress.address}
          placePhone={reservationDetail.placePhone}
          reservationId={reservationDetail.reservationId}
          reservationDate={reservationDetail.reservationDate}
          startDate={reservationDetail.startDate}
          startTime={reservationDetail.startTime}
          endDate={reservationDetail.endDate}
          endTime={reservationDetail.endTime}
          nickName={reservationDetail.nickName}
          personnel={reservationDetail.personnel}
          roomPrice={reservationDetail.roomPrice}
        />
      )}
    </div>
  );
};

export default ReservationDetail;
