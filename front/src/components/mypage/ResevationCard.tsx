import React from 'react';
import * as type from './types';

const CardComponent = ({ key, reservationProps }: type.cardProps) => {
  return (
    <div className="card-container" key={key}>
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
        </p>
        <div className="row-bottom">
          <div className="bottom-left">
            <p>
              <span className="checkin">체크인</span>
              <span>{reservationProps.startDate} </span>
              <span>{reservationProps.startTime}</span>
            </p>
            <p>
              <span className="checkout">체크아웃</span>
              <span>{reservationProps.endDate} </span>
              <span>{reservationProps.endTime}</span>
            </p>
          </div>
          <div className="bottom-right">
            <p>
              <span className="reservation-time">예약 일시</span>
              <span>{reservationProps.reservationDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
