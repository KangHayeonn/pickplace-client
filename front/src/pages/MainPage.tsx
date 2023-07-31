import React from 'react';
import { useNavigate } from 'react-router-dom';

import Map from '../components/map/Map';
import { markerList } from '../utils/mock/markerList';
import { categoryList } from '../utils/mock/categoryList';
import articleImg from '../assets/images/main-article.png';
import '../styles/components/main/main.scss';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickCategryBtn = (item: { name: string; id: number }) => {
    const state = {
      name: item.name,
      id: item.id,
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
          {categoryList.map((item) => (
            <button key={item.id} onClick={() => onClickCategryBtn(item)}>
              {item.name}
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
