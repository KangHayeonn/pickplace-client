import React from 'react';
import { searchHeaderProps } from './types';
import '../../styles/components/search/searchHeader.scss';
import SearchForm from '../common/SearchForm';

const SearchHeader = ({
  startDate,
  endDate,
  category,
  address,
  onChangeAddress,
  onChangeStartDate,
  onChangeEndDate,
  onSearchBtnClick,
}: searchHeaderProps) => {
  return (
    <div className="container searchHeader">
      <div className="wrapper">
        <h1>{category}</h1>
        <div className="container inputs">
          <div className="container-searchForm">
            <SearchForm
              placeholder="도로명/지번 주소를 입력해주세요"
              onChangeSearch={onChangeAddress}
              search={address}
            ></SearchForm>
          </div>

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
