import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceHeader from './PlaceHeader';
import { placeCardProps } from '../types';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
const PlaceCard = ({ adminPlace }: placeCardProps) => {
  const navigate = useNavigate();
  const onClickPlaceCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = {
      placeId: adminPlace.placeId,
      placeName: adminPlace.placeName,
      placeAddress: adminPlace.placeAddress,
      placePhone: adminPlace.placePhone,
      placeCategory: adminPlace.placeCategory,
    };
    navigate(`/mypage/managePlace/detail/${adminPlace.placeId}`, {
      state: state,
    });
  };
  return (
    <div
      className="placeCard-container"
      key={adminPlace.placeId}
      onClick={onClickPlaceCard}
    >
      <div
        className="placeCard-img__container"
        style={{
          backgroundImage: `url(${GetCategoryImage(adminPlace.placeCategory)})`,
        }}
      />
      <PlaceHeader
        placeName={adminPlace.placeName}
        placePhone={adminPlace.placePhone}
        address={adminPlace.placeAddress}
        placeCategory={adminPlace.placeCategory}
      />
    </div>
  );
};

export default PlaceCard;
