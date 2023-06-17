import React from 'react';
import { searchHeaderProps } from './types';

const SearchHeader = ({
  startDate,
  endDate,
  categoryName,
  onChangeAddress,
  onChangeStartDate,
  onChangeEndDate,
  onSearchBtnClick,
}: searchHeaderProps) => {
  return (
    <div className="container searchHeader">
      <div className="wrapper">
        <h1>{categoryName}</h1>
        <div className="container inputs">
          <input
            className="input address"
            type="text"
            placeholder="도로명/지번 주소를 입력해주세요"
            onChange={onChangeAddress}
          ></input>
          <div className="container date-input">
            <input
              className="input startDate"
              type="date"
              onChange={onChangeStartDate}
              value={startDate}
            ></input>
            <span>→</span>
            <input
              className="input endDate"
              type="date"
              onChange={onChangeEndDate}
              value={endDate}
            ></input>
            <button onClick={onSearchBtnClick}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
