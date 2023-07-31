import React from 'react';
import { useNavigate } from 'react-router-dom';

import Map from '../components/map/Map';
import { markerList } from '../utils/mock/markerList';
import { categoryNameList } from '../utils/mock/categoryList';
import articleImg from '../assets/images/main-article.png';
import '../styles/components/main/main.scss';
import { useDispatch } from 'react-redux';
import { resetSearchForm } from '../store/modules/searchForm';
import { resetOptionForm } from '../store/modules/optionForm';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <img src={articleImg}></img>
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
            <Map width={'70vw'} height={'500px'} markerList={markerList} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default MainPage;
