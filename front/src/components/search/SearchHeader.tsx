import React, { useState, useEffect } from 'react';
import { searchHeaderProps } from './types';
import '../../styles/components/search/searchHeader.scss';
import SearchForm from '../common/SearchForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { RootState } from '../../store/modules';
import {
  setStartDate,
  setEndDate,
  setAddress,
} from '../../store/modules/searchForm';
import { searchFormProps } from '../../store/modules/searchForm';
import { optionFormProps } from '../../store/modules/optionForm';

const SearchHeader = ({ onSearchBtnClick }: searchHeaderProps) => {
  const dispatch = useDispatch();

  const searchForm: searchFormProps = useSelector(
    (state: RootState) => state.searchForm,
  );
  const optionForm: optionFormProps = useSelector(
    (state: RootState) => state.optionForm,
  );

  const [searchKeyword, setSearchKeyword] = useState<string>(
    searchForm.address,
  );
  const [searchPreviewList, setSearchPreviewList] = useState([
    {
      address_name: searchForm.address,
      x: searchForm.x.toString(),
      y: searchForm.y.toString(),
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
    dispatch(setAddress(address, parseFloat(x), parseFloat(y)));
    setSearchKeyword(address);
  };
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value;
    if (searchForm.endDate < date) {
      dispatch(setEndDate(date));
    }
    dispatch(setStartDate(date));
  };
  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value;
    if (searchForm.startDate > date) {
      dispatch(setStartDate(date));
    }
    dispatch(setEndDate(date));
  };
  return (
    <div className="searchHeader-container">
      <div className="searchHeader-wrapper">
        <h1>{optionForm.category}</h1>
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
              value={searchForm.startDate}
            />
            <span>→</span>
            <input
              className="searchHeader-endDate"
              type="date"
              onChange={onChangeEndDate}
              value={searchForm.endDate}
            />
            <button onClick={onSearchBtnClick}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
