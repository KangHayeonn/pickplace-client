import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import SearchApi from '../api/search';
import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';

import '../styles/components/search/search.scss';
import { hotelSearchResult } from '../utils/searchList';
import { optionFormProps, searchFormProps } from '../components/search/types';

const SearchPage = () => {
  const { state } = useLocation();

  const [searchResult, setSearchResult] = useState(hotelSearchResult);

  const [searchForm, setsearchForm] = useState<searchFormProps>({
    address: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    distance: 5,
    searchType: 'recommend',
  });

  const [optionForm, setOptionForm] = useState<optionFormProps>({
    startTime: '',
    endTime: '',
    category: state,
    userCnt: 1,
    tagId: [],
  });

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchForm({
      ...searchForm,
      address: e.target.value,
    });
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchForm.endDate < e.target.value) {
      setsearchForm({
        ...searchForm,
        startDate: e.target.value,
        endDate: e.target.value,
      });
    } else {
      setsearchForm({
        ...searchForm,
        startDate: e.target.value,
      });
    }
  };
  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchForm.startDate > e.target.value) {
      setsearchForm({
        ...searchForm,
        startDate: e.target.value,
        endDate: e.target.value,
      });
    } else {
      setsearchForm({
        ...searchForm,
        endDate: e.target.value,
      });
    }
  };
  const onClickFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filterValue = e.currentTarget.value;
    setsearchForm({
      ...searchForm,
      searchType: filterValue,
    });
  };
  const onSearchBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (searchForm.address == '') {
      window.alert('주소를 입력해주세요');
    } else {
      SearchApi.getSearchData(searchForm)
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };
  const onSearchWithOptionBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (searchForm.address == '') window.alert('주소를 입력해주세요');
    else {
      SearchApi.getSearchDataWithOptions({
        searchForm,
        optionForm,
      })
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };
  return (
    <div className="search">
      <SearchHeader
        startDate={searchForm.startDate}
        endDate={searchForm.endDate}
        categoryName={optionForm.category.categoryName}
        onChangeAddress={onChangeAddress}
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
        onSearchBtnClick={onSearchBtnClick}
      ></SearchHeader>

      <main>
        <SearchOptionMenu
          optionForm={optionForm}
          setOptionForm={setOptionForm}
          searchForm={searchForm}
          setsearchForm={setsearchForm}
          onSearchWithOptionBtnClick={onSearchWithOptionBtnClick}
        ></SearchOptionMenu>
        <section>
          <div className="buttons">
            <SearchFilter></SearchFilter>
            <button className="button map">지도</button>
          </div>
          <SearchResult searchResult={searchResult}></SearchResult>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
