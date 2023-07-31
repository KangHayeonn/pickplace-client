import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import '../../../styles/components/mypage/reservation/reservationDetail.scss';
import CreateModal from '../review/CreateModal';
import User from '../../../api/mypage';
import { reservationDetailProps, detailProps } from './types';
import ConfirmModal from '../ConfirmModal';
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
          address: res.data.data.reservation[0].placeAddress.address,
          placePhone: res.data.data.reservation[0].placePhone,
          reservationId: res.data.data.reservation[0].reservationId,
          reservationDate: res.data.data.reservation[0].reservationDate,
          startDate: res.data.data.reservation[0].startDate,
          startTime: res.data.data.reservation[0].startTime,
          endDate: res.data.data.reservation[0].endDate,
          endTime: res.data.data.reservation[0].endTime,
          nickName: res.data.data.reservation[0].nickname,
          personnel: res.data.data.reservation[0].personnel,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const onClickClose = () => {
    document.body.style.overflow = 'unset';
    setCreateModalOpen(false);
  };

  const onCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const onOpenCreateModal = (e: React.MouseEvent<HTMLSpanElement>) => {
    document.body.style.overflow = 'hidden';
    setCreateModalOpen(true);
  };

  return (
    <div className="reservation-detail">
      {confirmModalOpen && (
        <ConfirmModal
          onClose={onClickClose}
          onCloseConfirmModal={onCloseConfirmModal}
          title="리뷰 생성 취소"
          content="취소 시에 내용이 저장되지 않습니다. 정말 취소하시겠습니까?"
        />
      )}

      {createModalOpen && (
        <CreateModal
          setConfirmModalOpen={setConfirmModalOpen}
          setCreateModalOpen={setCreateModalOpen}
          reservationId={state.id}
        />
      )}
      {reservationDetail && (
        <DetailHeader
          category={reservationDetail.category}
          placeName={reservationDetail.placeName}
          placeRating={reservationDetail.placeRating}
          ReviewExistence={reservationDetail.reviewExistence}
          onOpenCreateModal={onOpenCreateModal}
        />
      )}
      {detailContentProps && <DetailContent reservation={detailContentProps} />}
    </div>
  );
};

export default ReservationDetail;
