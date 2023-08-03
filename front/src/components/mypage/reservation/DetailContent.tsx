import React from 'react';
import DetailCard from './DetailCard';
import ShowUserInfo from '../ShowUserInfo';
import ShowCardInfo from '../ShowCardInfo';
import { detailContentProps } from './types';
import '../../../styles/components/mypage/reservation/detailContent.scss';

const DetailContent = ({ reservation }: detailContentProps) => {
  return (
    <>
      <DetailCard>
        <ShowCardInfo
          parentClassname={'detail-address__container'}
          childClassname={'detail-address'}
          title={'주소'}
          content={reservation.address}
        />
        <ShowCardInfo
          parentClassname={'detail-phone__container'}
          childClassname={'detail-phone'}
          title={'연락처'}
          content={reservation.placePhone}
        />
      </DetailCard>
      <DetailCard title={'예약 정보'}>
        <ShowCardInfo
          parentClassname={'detail-reservationInfo'}
          childClassname={'detail-reservationId'}
          title={'예약 번호 : ' + reservation.reservationId}
          content={
            '예약 일시 : ' + reservation.reservationDate.replace('T', ' ')
          }
        />
        <ShowCardInfo
          childClassname={'detail-checkin'}
          title={'체크인'}
          content={reservation.startDate + ' ' + reservation.startTime}
        />
        <ShowCardInfo
          childClassname={'detail-checkout'}
          title={'체크아웃'}
          content={reservation.endDate + ' ' + reservation.endTime}
        />
      </DetailCard>
      <DetailCard title={'고객 정보'}>
        <ShowUserInfo
          childClassname={'detail-nickName'}
          title={'예약자'}
          content={reservation.nickName}
        />
        <hr />
        <ShowUserInfo
          childClassname={'detail-personnel'}
          title={'총 예약 인원'}
          content={reservation.personnel}
        />
      </DetailCard>
      {reservation.roomPrice && (
        <DetailCard title={'결제 정보'}>
          <ShowUserInfo
            childClassname={'detail-roomPrice'}
            title={'총 결제 금액'}
            content={reservation.roomPrice}
          />
        </DetailCard>
      )}
    </>
  );
};

export default DetailContent;
