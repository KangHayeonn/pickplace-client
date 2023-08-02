import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailContent from '../../mypage/reservation/DetailContent';
import ReservationBtns from '../ReservationBtns';
import '../../../styles/components/admin/manageReservation/manageReservationDetail.scss';
import '../../../styles/components/admin/reservationBtn.scss';
import leftArrow from '../../../assets/images/arrow-left.svg';
import Admin from '../../../api/admin';
import { adminReservationDetail } from '../types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import { detailProps } from '../../../components/mypage/reservation/types';

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
        placeCategory: '',
      },
    });
  const [detailContentProps, setDetailContentProps] = useState<detailProps>();

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    const state = {
      placeId: adminReservationDetail.place.placeId,
      placeName: adminReservationDetail.place.placeName,
      placeAddress: adminReservationDetail.place.placeAddress,
      placePhone: adminReservationDetail.place.placePhone,
      placeCategory: adminReservationDetail.place.placeCategory,
    };
    navigate(
      `/mypage/managePlace/detail/${adminReservationDetail.place.placeId}`,
      {
        state: state,
      },
    );
  };

  useEffect(() => {
    getAdminReservationDetail();
  }, []);

  const getAdminReservationDetail = () => {
    Admin.v1GetReservationDetail(state.reservationId)
      .then((res) => {
        setAdminReservationDetail(res.data.data);
        setDetailContentProps({
          address: res.data.data.place.placeAddress,
          placePhone: res.data.data.place.placePhone,
          reservationId: res.data.data.reservation.reservationId,
          reservationDate: res.data.data.reservation.createdDate,
          startDate: res.data.data.reservation.checkInDate,
          startTime: res.data.data.reservation.checkInTime,
          endDate: res.data.data.reservation.checkOutDate,
          endTime: res.data.data.reservation.checkOutTime,
          nickName: res.data.data.member.memberName,
          personnel: res.data.data.reservation.reservationPeopleNum,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onClickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약수락');
  };

  return (
    <div className="manageReservation-detail">
      <div className="manageReservation-detail__header">
        <div
          className="manageReservation-detail__img--container"
          style={{
            backgroundImage: `url(${GetCategoryImage(
              adminReservationDetail.place.placeCategory,
            )})`,
          }}
        >
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
      {detailContentProps && <DetailContent reservation={detailContentProps} />}
    </div>
  );
};

export default ManageReservationDetail;
