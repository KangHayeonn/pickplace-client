import React, { useState, useEffect } from 'react';
import { searchHeaderProps } from './types';
import '../../styles/components/search/searchHeader.scss';
import SearchForm from '../common/SearchForm';
import axios from 'axios';

const SearchHeader = ({
  startDate,
  endDate,
  category,
  address,
  x,
  y,
  onChangeAddress,
  onChangeStartDate,
  onChangeEndDate,
  onSearchBtnClick,
}: searchHeaderProps) => {
  const [searchKeyword, setSearchKeyword] = useState<string>(address);
  const [searchPreviewList, setSearchPreviewList] = useState([
    {
      address_name: address,
      x: x.toString(),
      y: y.toString(),
    },
  ]);

  useEffect(() => {
    async function getSearchList() {
      const res = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${searchKeyword}&size=${10}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_KEY}`,
          },
        },
      );
      if (res.data.documents.length > 0) {
        setSearchPreviewList(res.data.documents);
      }
    }
    if (searchKeyword != '') {
      getSearchList();
    } else {
      setSearchPreviewList([]);
    }
  }, [searchKeyword]);

  const onClickAddress = (address: string, x: string, y: string) => {
    onChangeAddress(address, x, y);
    setSearchKeyword(address);
  };
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };
  return (
    <div className="searchHeader-container">
      <div className="searchHeader-wrapper">
        <h1>{category}</h1>
        <div className="searchHeader-inputs__container">
          <div className="searchHeader-searchForm__container">
            <SearchForm
              placeholder="도로명/지번 주소를 입력해주세요"
              onChangeSearch={onKeywordChange}
              onClickAddress={onClickAddress}
              search={searchKeyword}
              searchPreviewList={searchPreviewList}
            />
          </div>

          <div className="searchHeader-dateInput__container">
            <input
              className="searchHeader-startDate"
              type="date"
              onChange={onChangeStartDate}
              value={startDate}
            />
            <span>→</span>
            <input
              className="searchHeader-endDate"
              type="date"
              onChange={onChangeEndDate}
              value={endDate}
            />
            <button onClick={onSearchBtnClick}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
