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
  const selectedCategory: {
    categoryName: string;
    id: number;
  } = state;

  const [searchForm, setsearchForm] = useState({
    address: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    distance: 5,
    searchType: 'recommend',
  });

  const [optionForm, setOptionForm] = useState<{
    startTime: string;
    endTime: string;
    category: { categoryName: string; id: number };
    userCnt: number;
    tagId: Array<number>;
  }>({
    startTime: '',
    endTime: '',
    category: selectedCategory,
    userCnt: 1,
    tagId: [],
  });

  const searchWithOptionForm = {
    searchForm,
    optionForm,
  };

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
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.options.selectedIndex];
    setOptionForm({
      ...optionForm,
      category: {
        id: parseInt(selectedOption.value),
        categoryName: selectedOption.innerText,
      },
    });
  };
  const onDecreaseUserCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (optionForm.userCnt <= 1) {
      window.alert('최소 인원은 1명 입니다.');
    } else {
      setOptionForm({
        ...optionForm,
        userCnt: optionForm.userCnt - 1,
      });
    }
  };
  const onIncreaseUserCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptionForm({
      ...optionForm,
      userCnt: optionForm.userCnt + 1,
    });
  };
  const onChangeUserRangeInput = (value: number) => {
    setsearchForm({
      ...searchForm,
      distance: value,
    });
  };
  const onClickTagButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagId = e.currentTarget.value;
    const clickedButton = e.currentTarget;
    if (clickedButton.classList.contains('clicked')) {
      e.currentTarget.classList.remove('clicked');
      setOptionForm({
        ...optionForm,
        tagId: optionForm.tagId.filter((id) => id !== parseInt(tagId)),
      });
    } else {
      e.currentTarget.classList.add('clicked');
      setOptionForm({
        ...optionForm,
        tagId: [...optionForm.tagId, parseInt(tagId)],
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
    if (searchForm.address == '') {
      window.alert('주소를 입력해주세요');
    } else {
      SearchApi.getSearchDataWithOptions(searchWithOptionForm)
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
          onChangeCategory={onChangeCategory}
          onSearchWithOptionBtnClick={onSearchWithOptionBtnClick}
          onDecreaseUserCount={onDecreaseUserCount}
          onIncreaseUserCount={onIncreaseUserCount}
          onChangeUserRangeInput={onChangeUserRangeInput}
          onClickTagButton={onClickTagButton}
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
