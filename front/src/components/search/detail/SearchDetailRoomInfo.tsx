import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';
import '../../../styles/components/search/detail/searchDetailRoomInfo.scss';

interface SearchDetailRoomInfoProps {
  roomItem?: {
    roomId: number;
    roomName: string;
    roomPrice: number;
    roomStatus: string;
  };
}

const SearchDetailRoomInfo = ({ roomItem }: SearchDetailRoomInfoProps) => {
  return (
    <>
      {roomItem ? (
        <li className="search-list__container--item">
          <div className="search-detail-room__image">image</div>
          <div className="search-detail-room__content">
            <div className="search-detail-room__content--title">
              {roomItem?.roomName} (최대 8인)
            </div>
            <div className="search-detail-room__content--info">
              <span>가격</span>
              <span>{roomItem?.roomPrice}원</span>
            </div>
            <div className="search-detail-room__content--btn">
              {roomItem?.roomStatus ? (
                <button
                  type="button"
                  className="search-detail-room__content--btn__reservation"
                >
                  예약하기
                </button>
              ) : (
                <div className="search-detail-room__content--btn__closed">
                  예약마감
                </div>
              )}
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailRoomInfo;
