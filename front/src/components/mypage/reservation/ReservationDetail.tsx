import React, { useState } from 'react';
import { reservationDetail } from '../../../utils/mock/reservationDetail';
import { useLocation } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import '../../../styles/components/mypage/reservation/reservationDetail.scss';
import CreateModal from '../review/CreateModal';

const ReservationDetail = () => {
  const { state } = useLocation();
  const [createModalOpen, setCreateModalOpen] = useState(false);

  //   const [reservationDetail, setReservationDetail] = useState();
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
      {createModalOpen && (
        <CreateModal
          setCreateModalOpen={setCreateModalOpen}
          reservationId={state.id}
        />
      )}
      <DetailHeader
        placeName={reservationDetail.placeName}
        placeRating={reservationDetail.placeRating}
        reservationStatus={reservationDetail.reservationStatus}
        ReviewExistence={reservationDetail.ReviewExistence}
        setCreateModalOpen={setCreateModalOpen}
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
