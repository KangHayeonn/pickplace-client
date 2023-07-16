import React from 'react';
import articleImg from '../assets/images/main-article.png';
import mapImg from '../assets/images/dummy_map.png';
import '../styles/components/main/main.scss';
import { useNavigate } from 'react-router-dom';
import { categoryList } from '../utils/mock/categoryList';
import Map from '../components/map/Map';
import { markerList } from '../utils/mock/markerList';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickCategryBtn = (item?: { name: string; id: number }) => {
    const state = item
      ? {
          name: item.name,
          id: item.id,
        }
      : {
          name: categoryList[0].name,
          id: categoryList[0].id,
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
          <button onClick={() => onClickCategryBtn()}>더보기</button>
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
