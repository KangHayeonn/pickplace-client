import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchDetailTitle from '../components/search/detail/SearchDetailTitle';
import SearchDetailInfo from '../components/search/detail/SearchDetailInfo';
import SearchDetailList from '../components/search/detail/SearchDetailList';
import SearchDetailReservation from '../components/search/detail/SearchDetailReservation';

const SearchDetailPage = () => {
  const location = useLocation();
  const currPage = location.pathname.split('/').at(-1);

  return (
    <div>
      <SearchDetailTitle />
      <SearchDetailInfo />
      <SearchDetailReservation />
      <SearchDetailList listType={currPage} />
    </div>
  );
};

export default SearchDetailPage;
