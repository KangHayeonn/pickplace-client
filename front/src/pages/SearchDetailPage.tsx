import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchDetailTemplate from '../components/search/detail/SearchDetailTemplate';
import SearchDetailTitle from '../components/search/detail/SearchDetailTitle';
import SearchDetailInfo from '../components/search/detail/SearchDetailInfo';
import SearchDetailList from '../components/search/detail/SearchDetailList';
import SearchDetailReservation from '../components/search/detail/SearchDetailReservation';

const SearchDetailPage = () => {
  const location = useLocation();
  const currPage = location.pathname.split('/').at(-1);

  return (
    <SearchDetailTemplate>
      <SearchDetailTitle />
      {currPage === 'detail' ? (
        <>
          <SearchDetailInfo />
          <SearchDetailReservation />
        </>
      ) : null}
      <SearchDetailList listType={currPage} />
    </SearchDetailTemplate>
  );
};

export default SearchDetailPage;
