import React, { useState } from 'react';
import '../../../styles/components/search/detail/searchDetailInfo.scss';
import mapIcon from '../../../assets/images/map.svg';
import mapHoverIcon from '../../../assets/images/map-white.svg';
import MapModal from '../../map/MapModal';
import { markerData } from '../../../utils/mock/markerList';

const SearchDetailInfo = () => {
  const [openMap, setOpenMap] = useState<boolean>(false);

  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setOpenMap(true);
  };

  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'unset';
    setOpenMap(false);
  };

  return (
    <div className="search-detail-info">
      <div className="search-detail-info__content">
        <div className="search-detail-info__content--item">
          <div className="search-detail-info__title">주소</div>
          <div className="search-detail-info__address">
            서울특별시 중구 345-34
          </div>
        </div>
        <div className="search-detail-info__content--item">
          <div className="search-detail-info__title">연락처</div>
          <div className="search-detail-info__number">02-0000-0000</div>
        </div>
      </div>
      <div className="search-detail-info__map">
        <button className="search-detail-info__map--btn" onClick={onOpenModal}>
          <img
            src={mapIcon}
            width={14}
            height={14}
            alt="Map Icon"
            className="map-icon"
          />
          <img
            src={mapHoverIcon}
            width={14}
            height={14}
            alt="Map Hover Icon"
            className="map-white-icon"
          />
          지도
        </button>
      </div>
      {openMap && (
        <MapModal onCloseModal={onCloseModal} mapList={markerData}></MapModal>
      )}
    </div>
  );
};

export default SearchDetailInfo;
