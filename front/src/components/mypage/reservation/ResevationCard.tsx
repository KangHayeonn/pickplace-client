import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../ShowCardInfo';
import * as type from '../types';
import placeSmallImg from '../../../assets/images/place-default-small.svg';
const ResevationCard = ({ reservationProps }: type.cardProps) => {
  const navigate = useNavigate();
  const onClickResevationCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: reservationProps.reservationId,
    };
    navigate(`/reservation/detail/${reservationProps.reservationId}`, {
      state: state,
    });
  };
  const onClickCreateReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('리뷰작성');
  };
  const onClickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('예약취소');
  };
  return (
    <div className="reservationCard-container" key={reservationProps.placeId}>
      <div className="img-container" onClick={onClickResevationCard}></div>
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
            content={reservationProps.reservationDate}
          />
        </div>
        <div className="reservationCard-reservationStatus">
          <span className="reservationCard-status">
            {reservationProps.reservationStatus}
          </span>
          {reservationProps.reservationStatus == '이용 완료' &&
            (reservationProps.ReviewExistence ? (
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
            ))}
          {reservationProps.reservationStatus == '이용 전' && (
            <span className="reservationCard-review" onClick={onClickRefuseBtn}>
              예약 취소
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResevationCard;
