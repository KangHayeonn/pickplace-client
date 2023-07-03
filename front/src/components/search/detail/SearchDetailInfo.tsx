import React from 'react';
import '../../../styles/components/search/detail/searchDetailInfo.scss';
import mapIcon from '../../../assets/images/map.svg';

const SearchDetailInfo = () => {
  const onClickMap = () => {
    // TODO : open map logic
  };

  return (
    <div className="info">
      <div className="info__content">
        <div className="info__content--item">
          <div className="title">주소</div>
          <div className="address">서울특별시 중구 345-34</div>
        </div>
        <div className="info__content--item">
          <div className="title">연락처</div>
          <div className="number">02-0000-0000</div>
        </div>
      </div>
      <div className="info__map">
        <button className="info__map--btn">
          <img
            src={mapIcon}
            width={14}
            height={14}
            alt="Map Icon"
            onClick={onClickMap}
          />
          지도
        </button>
      </div>
    </div>
  );
};

export default SearchDetailInfo;
