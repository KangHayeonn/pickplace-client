import React from 'react';
import { useNavigate } from 'react-router-dom';
import useIntersectionObserver from './useIntersectionObserver';
import useViewportObserver from './useViewportObserver';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import { searchResultListProps } from '../../store/modules/searchResult';

import { GetCategoryImage } from '../common/GetCategoryImage';
import { searchResultProps } from './types';
import starIcon from '../../assets/images/star-full.svg';
import '../../styles/components/search/searchResult.scss';

const SearchResult = ({
  checkOptionFormIsEmpty,
  checkSearchFormIsEmpty,
  getCategoryData,
  getSearchDataWithOptions,
}: searchResultProps) => {
  const navigate = useNavigate();
  const searchForm = useSelector((state: RootState) => state.searchForm);
  const optionForm = useSelector((state: RootState) => state.optionForm);
  const searchResult = useSelector(
    (state: RootState) => state.searchResultReducer,
  );
  const hasNext = useSelector(
    (state: RootState) => state.searchApiReducer.hasNext,
  );
  const pageNum = useSelector(
    (state: RootState) => state.searchApiReducer.pageNum,
  );

  const fetchMoreItems = async () => {
    const data = {
      searchForm,
      optionForm,
      pagination: { newPageNum: pageNum + 1 },
    };
    if (checkOptionFormIsEmpty()) {
      if (checkSearchFormIsEmpty()) {
        getCategoryData(data);
      }
    } else {
      getSearchDataWithOptions(data);
    }
  };
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    isIntersecting && hasNext && fetchMoreItems();
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  const onIntersectViewport: IntersectionObserverCallback = ([
    { isIntersecting },
  ]) => {
    isIntersecting;
  };
  const { setShownCard } = useViewportObserver({ onIntersectViewport });

  const onResultCardClick = (item: searchResultListProps) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      navigate(`/search/${item.placeId}/detail`);
    };
  };

  return (
    <div className="searchResult-container">
      {searchResult.length > 0 ? (
        searchResult.map((item, key) => (
          <div
            key={key}
            className="searchResult-card__component"
            ref={setShownCard}
            id={key.toString()}
            data-id={item.placeId}
            data-name={item.placeName}
            data-lat={item.placeAddress.latitude}
            data-lng={item.placeAddress.longitude}
            data-category={item.category}
            data-tag={item.tags}
            onClick={onResultCardClick(item)}
          >
            <img
              className="searchResult-img"
              src={GetCategoryImage(item.category)}
            />
            <div className="searchResult-innerContent">
              <div className="row top">
                <h1 className="col-1 placeName">{item.placeName}</h1>
                <div className="col-2">
                  <img
                    className="searchResult-starIcon"
                    src={starIcon}
                    alt="Star Icon"
                  />
                  <span className="searchResult-rate">
                    {isNaN(item.placeRating) ? 0 : item.placeRating}
                  </span>
                  <span className="searchResult-review">
                    리뷰 {item.placeReviewCnt}
                  </span>
                </div>
              </div>
              <div className="row bottom">
                <span className="col-1 address">
                  {item.placeAddress.address}
                </span>
                <span className="col-2 leftRoom">남은 객실 1개</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
      <div ref={setTarget} />
    </div>
  );
};

export default SearchResult;
