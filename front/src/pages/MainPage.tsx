import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Map from '../components/map/Map';
import { markerList } from '../utils/mock/markerList';
import { categoryNameList } from '../utils/mock/categoryList';
import articleImg from '../assets/images/main-article.png';
import '../styles/components/main/main.scss';

import { resetSearchForm } from '../store/modules/searchForm';
import { resetOptionForm } from '../store/modules/optionForm';
import { markerListType } from '../components/map/types';
import { useDispatch, useSelector } from 'react-redux';

import searchApi from '../api/search';
import { searchResultListProps } from '../store/modules/searchResult';
import format from 'date-fns/format';
const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [markerList, setMarkerList] = useState<markerListType[]>([]);

  const makeMarkerList = async () => {
    const data = {
      address: '서울특별시 종로구 세종대로 172',
      x: 126.976661,
      y: 37.5706546,
      searchType: '추천순',
      pageProps: {
        countPerPage: 4,
        pageNum: 0,
      },
      category: '호텔/리조트',
      startDate: format(new Date(), 'yyyy.MM.dd'),
      endDate: format(new Date(), 'yyyy.MM.dd'),
      distance: 6,
      userCnt: 2,
      tagList: [],
    };
    const res = await searchApi.getSearchDataWithOptions(data);
    const placeList: searchResultListProps[] = res.data.data.placeList;

    const newMarkerList: markerListType[] = [];
    placeList.map((item) =>
      newMarkerList.push({
        lat: item.placeAddress.latitude,
        lng: item.placeAddress.longitude,
        id: item.placeId,
        name: item.placeName,
        category: item.category,
        tag: item.tags,
      }),
    );
    setMarkerList(newMarkerList);
  };

  useEffect(() => {
    makeMarkerList();
  }, []);

  const onClickCategoryBtn = (item: string) => {
    dispatch(resetSearchForm());
    dispatch(resetOptionForm(item));
    const state = {
      category: item,
    };
    navigate('/search', {
      state: state,
    });
  };

  return (
    <div className="main">
      <section>
        <img src={articleImg} />
        <div className="buttons">
          {categoryNameList.map((item, key) => (
            <button key={key} onClick={() => onClickCategoryBtn(item)}>
              {item}
            </button>
          ))}
        </div>
        <hr></hr>
        <article>
          <h1>나를 위한 맞춤 플레이스</h1>
          <div className="map-container">
            {markerList.length > 0 && (
              <Map width={'70vw'} height={'500px'} markerList={markerList} />
            )}
          </div>
        </article>
      </section>
    </div>
  );
};

export default MainPage;
