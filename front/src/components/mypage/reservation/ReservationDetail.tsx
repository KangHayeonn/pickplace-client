import React from 'react';
import { reservationDetail } from '../../../utils/reservationDetail';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import '../../../styles/components/mypage/reservation/reservationDetail.scss';
import backArrow from '../../../assets/images/back_arrow.svg';

const ReservationDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };
  // useEffect(() => {
  //   Mypage.getReservationDetail(state.id)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return Promise.reject(err);
  //     });
  // }, []);
  return (
    <div className="reservation-detail">
      <button className="back-btn" onClick={onClickBack}>
        <img src={backArrow} />
        <label>전체 예약 내역으로 돌아가기</label>
      </button>
      <DetailHeader
        placeName={reservationDetail.placeName}
        placeRating={reservationDetail.placeRating}
        reservationStatus={reservationDetail.reservationStatus}
        ReviewExistence={reservationDetail.ReviewExistence}
      />
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
    </div>
  );
};

export default ReservationDetail;
