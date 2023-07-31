import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useLocation, useParams } from 'react-router-dom';
import SearchDetailTemplate from '../components/search/detail/SearchDetailTemplate';
import SearchDetailTitle from '../components/search/detail/SearchDetailTitle';
import SearchDetailInfo from '../components/search/detail/SearchDetailInfo';
import SearchDetailList from '../components/search/detail/SearchDetailList';
import SearchDetailReservation from '../components/search/detail/SearchDetailReservation';
// api
import { SearchDetailType } from '@/api/search/types';
// redux
import { getPlaceReview, searchDetail } from '../store/modules/searchDetail';

const SearchDetailPage = () => {
  const location = useLocation();
  const currPage = location.pathname.split('/').at(-1);
  const { searchId } = useParams();
  const placeId = Number(searchId);
  const dispatch: ThunkDispatch<SearchDetailType, void, AnyAction> =
    useDispatch();

  const getPlaceDetail = async () => {
    const data = {
      startDate: '2023.06.30',
      endDate: '2023.07.01',
      startTime: '11:00',
      endTime: '12:00',
    };
    await dispatch(searchDetail(placeId, data));
  };

  const getPlaceReviewList = async () => {
    await dispatch(getPlaceReview(placeId));
  };

  useEffect(() => {
    getPlaceDetail();
    getPlaceReviewList();
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
