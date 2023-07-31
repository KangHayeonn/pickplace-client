import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SearchDetailTemplate from '../components/search/detail/SearchDetailTemplate';
import SearchDetailTitle from '../components/search/detail/SearchDetailTitle';
import SearchDetailInfo from '../components/search/detail/SearchDetailInfo';
import SearchDetailList from '../components/search/detail/SearchDetailList';
import SearchDetailReservation from '../components/search/detail/SearchDetailReservation';
// api
import Search from '../api/search';
import Review from '../api/review';

const SearchDetailPage = () => {
  const location = useLocation();
  const currPage = location.pathname.split('/').at(-1);
  const { searchId } = useParams();

  const getPlaceDetail = async () => {
    const data = {
      startDate: '2023.06.30',
      endDate: '2023.07.01',
      startTime: '11:00',
      endTime: '12:00',
    };
    await Search.v1SearchDetail(Number(searchId), data);
  };

  const getPlaceReview = async () => {
    await Review.v1GetPlaceReview(Number(searchId));
  };

  useEffect(() => {
    getPlaceDetail();
    getPlaceReview();
  }, []);

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
