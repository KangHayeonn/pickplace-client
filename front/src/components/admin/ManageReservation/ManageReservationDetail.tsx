import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailContent from '../../mypage/reservation/DetailContent';
import ReservationBtns from '../ReservationBtns';
import { adminReservationDetail } from '../../../utils/mock/adminReservationDetail';
import '../../../styles/components/admin/manageReservation/manageReservationDetail.scss';
import '../../../styles/components/admin/reservationBtn.scss';
import leftArrow from '../../../assets/images/arrow-left.svg';
import Admin from '../../../api/admin';

const ManageReservationDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const [adminReservationDetailm, setAdminReservationDetail] = useState();

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };

  useEffect(() => {
    getAdminReservationDetail();
  }, []);

  const getAdminReservationDetail = () => {
    Admin.v1GetReservationDetail(state.placeId)
      .then((res) => {
        // console.log(res.data.data);
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
