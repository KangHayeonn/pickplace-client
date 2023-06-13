import React from 'react';
import articleImg from '../assets/images/main-article.png';
import mapImg from '../assets/images/dummy_map.png';
import '../styles/main.scss';
import { useNavigate } from 'react-router-dom';
import CATEGORYLIST from '../utils/categoryList';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const categoryList = CATEGORYLIST;

  return (
    <div className="main">
      <section>
        <img src={articleImg}></img>
        <div className="buttons">
          {categoryList.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                navigate('/search', {
                  state: {
                    categoryName: item.categoryName,
                    id: item.id,
                  },
                })
              }
            >
              {item.categoryName}
            </button>
          ))}
          <button
            onClick={() =>
              navigate('/search', {
                state: {
                  categoryName: categoryList[0].categoryName,
                  id: categoryList[0].id,
                },
              })
            }
          >
            더보기
          </button>
        </div>
        <hr></hr>
        <article>
          <h1>나를 위한 맞춤 플레이스</h1>
          <img src={mapImg} />
        </article>
      </section>
    </div>
  );
};

export default MainPage;
