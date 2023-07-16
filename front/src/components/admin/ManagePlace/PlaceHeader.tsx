import React from 'react';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import '../../../styles/components/admin/managePlace/placeHeader.scss';
import { placeHeaderProps } from '../types';

const PlaceHeader = ({ placeName, placePhone, address }: placeHeaderProps) => {
  return (
    <div>
      <div className="placeCard-header">
        <h2 className="placeCard-placeName">{placeName}</h2>
      </div>
      <div className="placeCard-content">
        <ShowCardInfo
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
