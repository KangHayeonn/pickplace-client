import React from 'react';
import { useNavigate } from 'react-router-dom';
import useIntersectionObserver from './useIntersectionObserver';
import useViewportObserver from './useViewportObserver';

import { searchResultProps } from './types';
import starIcon from '../../assets/images/star-full.svg';
import '../../styles/components/search/searchResult.scss';
import { GetCategoryImage } from '../common/GetCategoryImage';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/modules';

const SearchResult = ({
  hasNext,
  pageNum,
  checkOptionFormIsEmpty,
  checkSearchFormIsEmpty,
  getCategoryData,
  getSearchData,
  getSearchDataWithOptions,
}: searchResultProps) => {
  const navigate = useNavigate();
  const searchResult = useSelector(
    (state: RootState) => state.searchResultReducer,
  );
  const fetchMoreItems = async () => {
    if (checkOptionFormIsEmpty()) {
      if (checkSearchFormIsEmpty()) {
        getCategoryData({ newPageNum: pageNum + 1 });
      } else {
        getSearchData({ newPageNum: pageNum + 1 });
      }
    } else {
      getSearchDataWithOptions({ newPageNum: pageNum + 1 });
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

  const onResultCardClick = (placeId: number) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      navigate(`/search/:${placeId}/detail`);
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
            onClick={onResultCardClick(item.placeId)}
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
