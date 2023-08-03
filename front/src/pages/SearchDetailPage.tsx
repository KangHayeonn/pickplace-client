import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useLocation, useParams } from 'react-router-dom';
import SearchDetailTemplate from '../components/search/detail/SearchDetailTemplate';
import SearchDetailTitle from '../components/search/detail/SearchDetailTitle';
import SearchDetailInfo from '../components/search/detail/SearchDetailInfo';
import SearchDetailList from '../components/search/detail/SearchDetailList';
import SearchDetailReservation from '../components/search/detail/SearchDetailReservation';
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from '../utils/dataFormat';
// api
import { SearchDetailType } from '../api/search/types';
// redux
import { RootState } from '../store/modules';
import { getPlaceReview, searchDetail } from '../store/modules/searchDetail';

const SearchDetailPage = () => {
  const location = useLocation();
  const currPage = location.pathname.split('/').at(-1);
  const { searchId } = useParams();
  const placeId = Number(searchId);
  const category = useSelector((state: RootState) => state.optionForm.category);
  const dispatch: ThunkDispatch<SearchDetailType, void, AnyAction> =
    useDispatch();

  const getPlaceDetail = async () => {
    const now = new Date();
    const tomorrow = new Date(now);

    if (['호텔/리조트', '펜션', '게스트하우스'].includes(category)) {
      const data = {
        startDate: toStringByFormatting(now),
        endDate: toStringByFormatting(
          new Date(tomorrow.setDate(now.getDate() + 1)),
        ),
      };
      await dispatch(searchDetail(placeId, data));
    } else {
      const data = {
        startDate: toStringByFormatting(now),
        endDate: toStringByFormatting(now),
        startTime: toStringByFormattingTime(now),
        endTime: '23:00',
      };
      await dispatch(searchDetail(placeId, data));
    }
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
