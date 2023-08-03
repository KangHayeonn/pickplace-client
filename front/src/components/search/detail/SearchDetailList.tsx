import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/components/search/detail/searchDetailList.scss';
import SearchDetailRoomInfo from '../../../components/search/detail/SearchDetailRoomInfo';
import SearchDetailReviewInfo from '../../../components/search/detail/SearchDetailReviewInfo';
import { RootState } from '../../../store/modules';

interface SearchDetailListProps {
  listType: string | undefined;
}

const SearchDetailList = ({ listType }: SearchDetailListProps) => {
  const searchDetail = useSelector((state: RootState) => state.searchDetail);

  if (listType === 'detail') {
    return (
      <div className="search-list__container">
        <ul className="search-list__container--items">
          {searchDetail.roomList.length > 0 ? (
            searchDetail.roomList.map((item, index) => {
              return <SearchDetailRoomInfo key={index} roomItem={item} />;
            })
          ) : (
            <div className="search-list__container--isEmpty">
              예약 가능한 방이 없습니다.
            </div>
          )}
        </ul>
      </div>
    );
  }

  return (
    <div className="search-list__container">
      <ul className={`search-list__container--items ${listType}`}>
        {searchDetail.reviewList.length > 0 ? (
          searchDetail.reviewList.map((item, index) => {
            return <SearchDetailReviewInfo key={index} reviewItem={item} />;
          })
        ) : (
          <div className="search-list__container--isEmpty">
            리뷰가 없습니다.
          </div>
        )}
      </ul>
    </div>
  );
};

export default SearchDetailList;
