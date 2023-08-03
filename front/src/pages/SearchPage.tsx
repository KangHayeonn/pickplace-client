import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/modules';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';
import MapModal from '../components/map/MapModal';

import { categoryNameList } from '../utils/mock/categoryList';
import { markerListType } from '../components/map/types';
import '../styles/components/search/search.scss';
import { setSearchType } from '../store/modules/searchForm';
import { setSearchResult } from '../store/modules/searchResult';
import {
  getCategoryResults,
  getBasicResults,
  getDetailResults,
  setHasNext,
  setPageNum,
} from '../store/modules/search';
import { searchProps } from '../store/modules/search';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [onMapOpen, setOnMapOpen] = useState(false);
  const [markerList, setMarkerList] = useState<markerListType[]>([]);

  const searchForm = useSelector((state: RootState) => state.searchForm);
  const optionForm = useSelector((state: RootState) => state.optionForm);
  const searchResult = useSelector(
    (state: RootState) => state.searchResultReducer,
  );
  const dispatchSearch: ThunkDispatch<searchProps, void, AnyAction> =
    useDispatch();

  useEffect(() => {
    getCategoryData({ searchForm, optionForm, pagination: undefined });
  }, []);

  const getCategoryData = async (item: searchProps) => {
    await dispatchSearch(getCategoryResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item?.pagination?.newPageNum === undefined) {
            dispatch(setSearchResult(result));
          } else {
            if (item?.pagination?.newPageNum == 0) {
              dispatch(setSearchResult(result));
            } else {
              dispatch(setSearchResult([...searchResult, ...result]));
            }
            dispatch(setPageNum(item?.pagination?.newPageNum));
          }
        }
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchData = async (item: searchProps) => {
    await dispatchSearch(getBasicResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item?.pagination?.newPageNum === undefined) {
            dispatch(setSearchResult(result));
            dispatch(setPageNum(0));
          } else {
            if (item?.pagination?.newPageNum == 0) {
              dispatch(setSearchResult(result));
            } else {
              dispatch(setSearchResult([...searchResult, ...result]));
            }
            dispatch(setPageNum(item?.pagination?.newPageNum));
          }
        }
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchDataWithOptions = async (item: searchProps) => {
    await dispatchSearch(getDetailResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item?.pagination?.newPageNum === undefined) {
            dispatch(setSearchResult(result));
            dispatch(setPageNum(0));
          } else {
            if (item.pagination?.newPageNum == 0) {
              dispatch(setSearchResult(result));
            } else {
              dispatch(setSearchResult([...searchResult, ...result]));
            }
            dispatch(setPageNum(item.pagination?.newPageNum));
          }
        }
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'unset';
    setOnMapOpen(false);
  };
  const onOpenMapModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setOnMapOpen(true);

    const newMarkerList: markerListType[] = [];
    document.querySelectorAll('.active').forEach((item) => {
      const tags = item.attributes.getNamedItem('data-tag')?.nodeValue;
      const placeDetail = {
        lat: Number(item.attributes.getNamedItem('data-lat')?.nodeValue),
        lng: Number(item.attributes.getNamedItem('data-lng')?.nodeValue),
        id: Number(item.attributes.getNamedItem('data-id')?.nodeValue),
        name: item.attributes.getNamedItem('data-name')?.nodeValue || '',
        category:
          item.attributes.getNamedItem('data-category')?.nodeValue || '',
        tag: tags ? tags.split(',') : [''],
      };
      const marker = placeDetail;
      newMarkerList.push(marker);
    });
    setMarkerList(newMarkerList);
  };
  const onClickFilterButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchType(e.currentTarget.value));
    if (checkOptionFormIsEmpty()) {
      if (checkSearchFormIsEmpty()) {
        getCategoryData({
          searchForm,
          optionForm,
          pagination: { searchType: e.currentTarget.value, newPageNum: 0 },
        });
      } else {
        getSearchData({
          searchForm,
          optionForm,
          pagination: { searchType: e.currentTarget.value, newPageNum: 0 },
        });
      }
    } else {
      getSearchDataWithOptions({
        searchForm,
        optionForm,
        pagination: { searchType: e.currentTarget.value, newPageNum: 0 },
      });
    }
  };
  const checkAddressExist = () => {
    if (searchForm.address == '') {
      window.alert('주소를 입력해주세요');
      return false;
    }
    return true;
  };
  const checkSearchFormIsEmpty = () => {
    if (
      searchForm.address == '서울 중구 창경궁로 62-29' &&
      searchForm.startDate == format(new Date(), 'yyyy-MM-dd') &&
      searchForm.endDate == format(new Date(), 'yyyy-MM-dd')
    )
      return true;
    return false;
  };
  const checkOptionFormIsEmpty = () => {
    if (
      optionForm.category == state.category
        ? state.category
        : categoryNameList[0] &&
          optionForm.userCnt == 1 &&
          optionForm.tagList.length == 0 &&
          searchForm.distance == 5
    )
      return true;
    return false;
  };
  const onSearchBtnClick = () => {
    checkOptionFormIsEmpty() &&
      checkAddressExist() &&
      getSearchData({
        searchForm,
        optionForm,
        pagination: { newPageNum: 0 },
      });
    !checkOptionFormIsEmpty() &&
      checkAddressExist() &&
      getSearchDataWithOptions({
        searchForm,
        optionForm,
        pagination: { newPageNum: 0 },
      });
  };
  const onSearchWithOptionBtnClick = () => {
    checkAddressExist() &&
      getSearchDataWithOptions({
        searchForm,
        optionForm,
        pagination: { newPageNum: 0 },
      });
  };
  return (
    <div className="search">
      {onMapOpen && markerList && (
        <MapModal onCloseModal={onCloseModal} mapList={markerList} />
      )}
      <SearchHeader onSearchBtnClick={onSearchBtnClick} />
      <main>
        <SearchOptionMenu
          onSearchWithOptionBtnClick={onSearchWithOptionBtnClick}
        />
        <section>
          <div className="search-tabBtns">
            <SearchFilter onClickFilterButton={onClickFilterButton} />
            <button className="search-tabBtns__mapBtn" onClick={onOpenMapModal}>
              지도
            </button>
          </div>
          <SearchResult
            checkOptionFormIsEmpty={checkOptionFormIsEmpty}
            checkSearchFormIsEmpty={checkSearchFormIsEmpty}
            getCategoryData={getCategoryData}
            getSearchData={getSearchData}
            getSearchDataWithOptions={getSearchDataWithOptions}
          />
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
