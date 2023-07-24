import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailContent from '../../mypage/reservation/DetailContent';
import ReservationBtns from '../ReservationBtns';
import '../../../styles/components/admin/manageReservation/manageReservationDetail.scss';
import '../../../styles/components/admin/reservationBtn.scss';
import leftArrow from '../../../assets/images/arrow-left.svg';
import Admin from '../../../api/admin';
import { adminReservationDetail } from '../types';

const ManageReservationDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [adminReservationDetail, setAdminReservationDetail] =
    useState<adminReservationDetail>({
      member: {
        memberName: '',
      },
      reservation: {
        reservationId: 0,
        roomName: '',
        checkInDate: '',
        checkInTime: '',
        checkOutDate: '',
        checkOutTime: '',
        reservationStatus: '',
        createdDate: '',
        updatedDate: '',
        reservationPeopleNum: 0,
      },
      place: {
        placeAddress: '',
        placePhone: '',
        placeName: '',
        placeId: 0,
      },
    });

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };

  useEffect(() => {
    getAdminReservationDetail();
  }, []);

  const getAdminReservationDetail = () => {
    Admin.v1GetReservationDetail(state.reservationId)
      .then((res) => {
        setAdminReservationDetail(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onClickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약수락');
  };
  const onClickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약취소');
  };
  return (
    <div className="manageReservation-detail">
      <div className="manageReservation-detail__header">
        <div className="manageReservation-detail__img--container">
          <button
            className="manageReservation-detail__back--btn"
            onClick={onClickBack}
          >
            <img
              className="manageReservation-detail__leftArrow"
              src={leftArrow}
            />
          </button>
        </div>
        <div className="manageReservation-detail__header--content">
          <h2 className="manageReservation-detail__placeName">
            {adminReservationDetail.place.placeName}
          </h2>
          <ReservationBtns
            reservationStatus={
              adminReservationDetail.reservation.reservationStatus
            }
            onClickAcceptBtn={onClickAcceptBtn}
          />
        </div>
      </div>
      <DetailContent
        address={adminReservationDetail.place.placeAddress}
        placePhone={adminReservationDetail.place.placePhone}
        reservationId={adminReservationDetail.reservation.reservationId}
        reservationDate={adminReservationDetail.reservation.createdDate}
        startDate={adminReservationDetail.reservation.checkInDate}
        startTime={adminReservationDetail.reservation.checkInTime}
        endDate={adminReservationDetail.reservation.checkOutDate}
        endTime={adminReservationDetail.reservation.checkOutTime}
        nickName={adminReservationDetail.member.memberName}
        personnel={adminReservationDetail.reservation.reservationPeopleNum}
      />
    </div>
  );
};

export default ManageReservationDetail;
