import React from 'react';
import starIcon from '../../assets/images/star.png';
import { searchResultProps } from './types';

const SearchResult = ({ searchResult }: searchResultProps) => {
  return (
    <div className="container searchResult">
      {searchResult.map((item) => (
        <div key={item.placeId} className="card-component">
          <div className="row top">
            <h1 className="col-1 placeName">{item.placeName}</h1>
            <div className="col-2">
              <img src={starIcon}></img>
              <span className="rate">{item.placeRating}</span>
              <span className="review">리뷰 {item.placeReviewCnt}</span>
            </div>
          </div>
          <div className="row bottom">
            <span className="col-1 address">{item.placeAddress.address}</span>
            <span className="col-2 leftRoom">남은 객실 1개</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
