import React from 'react';
import DetailCard from './DetailCard';
import ShowUserInfo from '../ShowUserInfo';
import ShowCardInfo from '../ShowCardInfo';
import { detailContentProps } from './types';
import '../../../styles/components/mypage/reservation/detailContent.scss';

const DetailContent = ({
  address,
  placePhone,
  reservationId,
  reservationDate,
  startDate,
  startTime,
  endDate,
  endTime,
  nickName,
  personnel,
  roomPrice,
}: detailContentProps) => {
  return (
    <>
      <DetailCard>
        <ShowCardInfo
          parentClassname={'detail-address__container'}
          childClassname={'detail-address'}
          title={'주소'}
          content={address}
        />
        <ShowCardInfo
          parentClassname={'detail-phone__container'}
          childClassname={'detail-phone'}
          title={'연락처'}
          content={placePhone}
        />
      </DetailCard>
      <DetailCard title={'예약 정보'}>
        <ShowCardInfo
          parentClassname={'detail-reservationInfo'}
          childClassname={'detail-reservationId'}
          title={'예약 번호 : ' + reservationId}
          content={'예약 일시 : ' + reservationDate.replace('T', ' ')}
        />
        <ShowCardInfo
          childClassname={'detail-checkin'}
          title={'체크인'}
          content={startDate + ' ' + startTime}
        />
        <ShowCardInfo
          childClassname={'detail-checkout'}
          title={'체크아웃'}
          content={endDate + ' ' + endTime}
        />
      </DetailCard>
      <DetailCard title={'고객 정보'}>
        <ShowUserInfo
          childClassname={'detail-nickName'}
          title={'예약자'}
          content={nickName}
        />
        <hr />
        <ShowUserInfo
          childClassname={'detail-personnel'}
          title={'총 예약 인원'}
          content={personnel}
        />
      </DetailCard>
      {roomPrice && (
        <DetailCard title={'결제 정보'}>
          <ShowUserInfo
            childClassname={'detail-roomPrice'}
            title={'총 결제 금액'}
            content={roomPrice}
          />
          <hr />
          <ShowUserInfo
            childClassname={'detail-roomPrice'}
            title={'결제 방법'}
            content={'현장 결제'}
          />
        </DetailCard>
      )}
    </>
  );
};

export default DetailContent;
