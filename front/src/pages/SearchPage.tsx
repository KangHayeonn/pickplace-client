import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import SearchApi from '../api/search';
import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';

import '../styles/search.scss';
import { hotelSearchResult } from '../utils/searchList';

const SearchPage: React.FC = () => {
  const [searchResult, setSearchResult] = useState(hotelSearchResult);

  const { state } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(state);
  const [date, setDate] = useState({
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
  });
  const [address, setAddress] = useState('');

  const searchform = {
    address,
    startDate: date.startDate,
    endDate: date.endDate,
    distance: 5,
    searchType: 'recommend',
  };

  const [optionForm, setOptionForm] = useState({
    startTime: '',
    endTime: '',
    category: selectedCategory,
    userCnt: 1,
    tagId: [],
  });

  const searchWithOptionForm = {
    searchform,
    optionForm,
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (date.endDate < e.target.value) {
      window.alert('시작일이 종료일보다 늦습니다.');
    } else {
      setDate({
        ...date,
        startDate: e.target.value,
      });
    }
  };
  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (date.startDate > e.target.value) {
      window.alert('종료일이 시작일보다 빠릅니다.');
    } else {
      setDate({
        ...date,
        endDate: e.target.value,
      });
    }
  };
  const onSearchBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (address == '') {
      window.alert('주소를 입력해주세요');
    } else {
      SearchApi.getSearchData(searchform)
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
    SearchApi.getSearchDataWithOptions(searchWithOptionForm)
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.options.selectedIndex];
    setSelectedCategory({
      id: selectedOption.value,
      categoryName: selectedOption.innerText,
    });
  };

  return (
    <div className="search">
      <SearchHeader
        categoryName={selectedCategory.categoryName}
        onChangeAddress={onChangeAddress}
        onChangeStartDate={onChangeStartDate}
        date={date}
        onChangeEndDate={onChangeEndDate}
        onSearchBtnClick={onSearchBtnClick}
      ></SearchHeader>

      <main>
        <SearchOptionMenu
          onChangeCategory={onChangeCategory}
          selectedCategoryId={selectedCategory.id}
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
