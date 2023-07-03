import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';
import SearchDetailRoomInfo from '../../../components/search/detail/SearchDetailRoomInfo';
import SearchDetailReviewInfo from '../../../components/search/detail/SearchDetailReviewInfo';
import { searchDetailList, searchReviewList } from '../../../utils/mock/search';

interface SearchDetailListProps {
  listType: string | undefined;
}

const SearchDetailList = ({ listType }: SearchDetailListProps) => {
  if (listType === 'detail') {
    return (
      <div className="search-list__container">
        <ul className="search-list__container--items">
          {searchDetailList &&
            searchDetailList.map((item, index) => {
              return <SearchDetailRoomInfo key={index} roomItem={item} />;
            })}
        </ul>
      </div>
    );
  }

  return (
    <div className="search-list__container">
      <ul className={`search-list__container--items ${listType}`}>
        {searchReviewList &&
          searchReviewList.map((item, index) => {
            return <SearchDetailReviewInfo key={index} reviewItem={item} />;
          })}
      </ul>
    </div>
  );
};

export default SearchDetailList;
