import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import '../../../styles/components/mypage/reservation/reservationDetail.scss';
import CreateModal from '../review/CreateModal';
import User from '../../../api/mypage';
import { reservationDetailProps, detailProps } from './types';

const ReservationDetail = () => {
  const { state } = useLocation();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [reservationDetail, setReservationDetail] =
    useState<reservationDetailProps>();

  const [detailContentProps, setDetailContentProps] = useState<detailProps>();
  useEffect(() => {
    getUserReservationDetail();
  }, []);

  const getUserReservationDetail = () => {
    User.v1GetUserReservationDetail(state.id)
      .then((res) => {
        setReservationDetail(res.data.data.reservation[0]);
        setDetailContentProps({
          address: res.data.data.reservation[0].place.placeAddress,
          placePhone: res.data.data.reservation[0].place.placePhone,
          reservationId: res.data.data.reservation[0].reservation.reservationId,
          reservationDate: res.data.data.reservation[0].reservation.createdDate,
          startDate: res.data.data.reservation[0].reservation.checkInDate,
          startTime: res.data.data.reservation[0].reservation.checkInTime,
          endDate: res.data.data.reservation[0].reservation.checkOutDate,
          endTime: res.data.data.reservation[0].reservation.checkOutTime,
          nickName: res.data.data.reservation[0].member.memberName,
          personnel:
            res.data.data.reservation[0].reservation.reservationPeopleNum,
        });
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
          ReviewExistence={reservationDetail.reviewExistence}
          setCreateModalOpen={setCreateModalOpen}
        />
      )}
      {detailContentProps && <DetailContent reservation={detailContentProps} />}
    </div>
  );
};

export default ReservationDetail;
