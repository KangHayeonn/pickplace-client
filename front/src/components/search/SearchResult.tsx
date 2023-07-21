import React, { useState, useEffect, useCallback } from 'react';
import starIcon from '../../assets/images/star-full.svg';
import { searchResultProps } from './types';
import '../../styles/components/search/searchResult.scss';
import useIntersectionObserver from './useIntersectionObserver';

const SearchResult = ({
  searchResult,
  hasNext,
  pageNum,
  setSearchResult,
  getSearchDataWithOptions,
}: searchResultProps) => {
  useEffect(() => {
    console.log(hasNext);
  }, [hasNext]);

  // const fetchMoreItems = async () => {
  //   const nextList = getSearchDataWithOptions(pageNum + 1);
  //   // setSearchResult(nextList);
  // };

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    // isIntersecting && hasNext && fetchMoreItems();
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <div className="searchResult-container">
      {searchResult.map((item, key) => (
        <div key={key} className="searchResult-card__component">
          <div className="row top">
            <h1 className="col-1 placeName">{item.placeName}</h1>
            <div className="col-2">
              <img
                className="searchResult-starIcon"
                src={starIcon}
                alt="Star Icon"
              />
              <span className="searchResult-rate">{item.placeRating}</span>
              <span className="searchResult-review">
                리뷰 {item.placeReviewCnt}
              </span>
            </div>
          </div>
          <div className="row bottom">
            <span className="col-1 address">{item.placeAddress.address}</span>
            <span className="col-2 leftRoom">남은 객실 1개</span>
          </div>
        </div>
      ))}
      <div ref={setTarget} />
    </div>
  );
};

export default SearchResult;
