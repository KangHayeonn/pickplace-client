import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';

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
          <div className="image">image</div>
          <div className="content">
            <div className="content__title">
              {roomItem?.roomName} (최대 8인)
            </div>
            <div className="content__info">
              <span>가격</span>
              <span>{roomItem?.roomPrice}원</span>
            </div>
            <div className="content__btn">
              {roomItem?.roomStatus === 'progress' ? (
                <button type="button" className="content__btn--reservation">
                  예약하기
                </button>
              ) : (
                <div className="content__btn--closed">예약마감</div>
              )}
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailRoomInfo;
