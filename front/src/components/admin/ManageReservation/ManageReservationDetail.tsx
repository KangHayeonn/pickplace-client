import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { adminReservationDetail } from '../../../utils/mock/adminReservationDetail';
import DetailContent from '../../mypage/reservation/DetailContent';
import ReservationBtns from '../ReservationBtns';
import '../../../styles/components/admin/manageReservation/manageReservationDetail.scss';
import '../../../styles/components/admin/reservationBtn.scss';
import leftArrow from '../../../assets/images/arrow-left.svg';

const ManageReservationDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };
  // useEffect(() => {
  //   Mypage.getAdminReservationDetail(state.id)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return Promise.reject(err);
  //     });
  // }, []);
  const onClickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('수락완료');
  };
  const onClickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약취소');
  };
  return (
    <div className="manageReservation-detail">
      <button
        className="manageReservation-detail__back--btn"
        onClick={onClickBack}
      >
        <img className="manageReservation-detail__leftArrow" src={leftArrow} />
      </button>
      <div className="manageReservation-detail__header">
        <div className="manageReservation-detail__img--container" />
        <div className="manageReservation-detail__header--content">
          <h2 className="manageReservation-detail__placeName">
            {adminReservationDetail.placeName}
          </h2>
          <ReservationBtns
            reservationStatus={adminReservationDetail.reservationStatus}
            onClickAcceptBtn={onClickAcceptBtn}
            onClickRefuseBtn={onClickRefuseBtn}
          />
        </div>
      </div>
      <DetailContent
        address={adminReservationDetail.placeAddress.address}
        placePhone={adminReservationDetail.placePhone}
        reservationId={adminReservationDetail.reservationId}
        reservationDate={adminReservationDetail.reservationDate}
        startDate={adminReservationDetail.startDate}
        startTime={adminReservationDetail.startTime}
        endDate={adminReservationDetail.endDate}
        endTime={adminReservationDetail.endTime}
        nickName={adminReservationDetail.nickName}
        personnel={adminReservationDetail.personnel}
        roomPrice={adminReservationDetail.roomPrice}
      />
    </div>
  );
};

export default ManageReservationDetail;
