import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../ShowCardInfo';
import * as type from '../types';

const ResevationCard = ({ reservationProps }: type.cardProps) => {
  const navigate = useNavigate();
  const onClickResevationCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: reservationProps.reservationId,
    };
    navigate('/detail', {
      state: state,
    });
  };
  return (
    <div
      className="card-container"
      key={reservationProps.placeId}
      onClick={onClickResevationCard}
    >
      <div className="img-container">{/* <img/> */}</div>
      <div className="card-content">
        <h2 className="card-placeName">{reservationProps.placeName}</h2>
        <p className="card-reservationId">
          예약 번호 : {reservationProps.reservationId}
        </p>
        <p className="card-reservationStatus">
          {reservationProps.reservationStatus}
          {reservationProps.reservationStatus == '이용 완료' &&
            (reservationProps.ReviewExistence ? (
              <span className="review">리뷰 작성 완료</span>
            ) : (
              <span className="review">리뷰 작성하기</span>
            ))}
          {reservationProps.reservationStatus == '이용 전' && (
            <span className="review">예약 취소</span>
          )}
        </p>
        <div className="row-bottom">
          <div className="bottom-left">
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
              content={
                reservationProps.endDate + ' ' + reservationProps.endTime
              }
            />
          </div>
          <div className="bottom-right">
            <ShowCardInfo
              childClassname={'reservation-time'}
              title={'예약 일시'}
              content={reservationProps.reservationDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResevationCard;
