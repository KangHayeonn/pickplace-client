import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCardInfo from '../../mypage/ShowCardInfo';

type placeCardProps = {
  adminPlaceProps: {
    placeId: number;
    placeName: string;
    placePhone: string;
    placeAddress: {
      address: string;
      latitude: number;
      longitude: number;
    };
    placeRating: number;
    placeReviewCnt: number;
    roomList: {
      roomId: number;
      roomName: string;
      roomPrice: number;
      roomStatus: string;
    }[];
  };
};

const PlaceCard = ({ adminPlaceProps }: placeCardProps) => {
  const navigate = useNavigate();
  const onClickPlaceCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: adminPlaceProps.placeId,
    };
    navigate('/placeDetail', {
      state: state,
    });
  };
  return (
    <div
      className="placeCard-container"
      key={adminPlaceProps.placeId}
      onClick={onClickPlaceCard}
    >
      <div className="placeCard-img__container" />
      <div>
        <div className="placeCard-header">
          <h2 className="placeCard-placeName">{adminPlaceProps.placeName}</h2>
        </div>
        <div className="placeCard-content">
          <ShowCardInfo
            childClassname={'address'}
            title={'주소'}
            content={adminPlaceProps.placeAddress.address}
          />
          <ShowCardInfo
            childClassname={'phone'}
            title={'연락처'}
            content={adminPlaceProps.placePhone}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
