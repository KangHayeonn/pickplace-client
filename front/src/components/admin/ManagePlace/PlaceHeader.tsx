import React from 'react';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import '../../../styles/components/admin/managePlace/placeHeader.scss';
import { placeHeaderProps } from '../types';

const PlaceHeader = ({
  placeName,
  placePhone,
  address,
  placeCategory,
}: placeHeaderProps) => {
  return (
    <div className="placeCard">
      <div className="placeCard-header">
        <h2 className="placeCard-placeName">{placeName}</h2>
      </div>
      <div className="placeCard-content">
        <ShowCardInfo
          parentClassname={'placeCard-address__container'}
          childClassname={'placeCard-address'}
          title={'주소'}
          content={address}
        />
        <ShowCardInfo
          childClassname={'placeCard-phone'}
          title={'연락처'}
          content={placePhone}
        />
      </div>
    </div>
  );
};

export default PlaceHeader;
