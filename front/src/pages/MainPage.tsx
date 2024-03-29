import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/map/Map';
import { defaultMarkerList } from '../utils/mock/markerList';
import { categoryNameList } from '../utils/mock/categoryList';
import articleImg from '../assets/images/main-article.png';
import '../styles/components/main/main.scss';
import { resetSearchForm } from '../store/modules/searchForm';
import { resetOptionForm } from '../store/modules/optionForm';
import { useDispatch } from 'react-redux';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickCategoryBtn = (item: string) => {
    dispatch(resetSearchForm());
    dispatch(resetOptionForm(item));
    navigate('/search');
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
        <hr />
        <article>
          <h1>나를 위한 맞춤 플레이스</h1>
          <div className="map-container">
            <Map
              width={'70vw'}
              height={'500px'}
              markerList={defaultMarkerList}
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default MainPage;
