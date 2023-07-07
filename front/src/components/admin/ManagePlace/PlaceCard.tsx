import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceHeader from './PlaceHeader';
import { placeCardProps } from '../types';

const PlaceCard = ({ adminPlaceProps }: placeCardProps) => {
  const navigate = useNavigate();
  const onClickPlaceCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      id: adminPlaceProps.placeId,
    };
    navigate(`/mypage/managePlace/detail/${adminPlaceProps.placeId}`, {
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
      <PlaceHeader
        placeName={adminPlaceProps.placeName}
        placePhone={adminPlaceProps.placePhone}
        address={adminPlaceProps.placeAddress.address}
      />
    </div>
  );
};

export default PlaceCard;
