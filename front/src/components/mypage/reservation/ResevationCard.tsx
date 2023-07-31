import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../ShowCardInfo';
import CreateModal from '../review/CreateModal';
import { cardProps } from './types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import ConfirmModal from '../ConfirmModal';

const ResevationCard = ({ reservationProps }: cardProps) => {
  const navigate = useNavigate();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const onClickResevationCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: reservationProps.reservationId,
    };
    navigate(`/mypage/reservationDetail/${reservationProps.reservationId}`, {
      state: state,
    });
  };
  const onClickCreateReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setCreateModalOpen(true);
  };
  const onClickClose = () => {
    setCreateModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  const onCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };
  return (
    <div className="reservationCard-container" key={reservationProps.placeId}>
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
          reservationId={reservationProps.reservationId}
        />
      )}
      <div
        className="img-container"
        onClick={onClickResevationCard}
        style={{
          backgroundImage: `url(${GetCategoryImage(
            reservationProps.category,
          )})`,
        }}
      ></div>
      <div className="reservationCard">
        <div className="reservationCard-header" onClick={onClickResevationCard}>
          <h2 className="card-placeName">{reservationProps.placeName}</h2>
          <p className="card-reservationId">
            예약 번호 : {reservationProps.reservationId}
          </p>
        </div>
        <div
          className="reservationCard-content"
          onClick={onClickResevationCard}
        >
          <ShowCardInfo
            childClassname={'checkin'}
            title={'체크인'}
            content={
              reservationProps.startDate + ' ' + reservationProps.startTime
            }
          />
          <ShowCardInfo
            childClassname={'checkout'}
            title={'체크아웃'}
            content={reservationProps.endDate + ' ' + reservationProps.endTime}
          />
          <ShowCardInfo
            childClassname={'reservation-time'}
            title={'예약 일시'}
            content={reservationProps.reservationDate.replace('T', ' ')}
          />
        </div>
        <div className="reservationCard-reservationStatus">
          {reservationProps.reviewExistence == true ? (
            <span className="reservationCard-reviewCompleted">
              리뷰 작성 완료
            </span>
          ) : (
            <span
              className="reservationCard-review"
              onClick={onClickCreateReview}
            >
              리뷰 작성하기
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResevationCard;
