import React from 'react';
import articleImg from '../assets/images/main-article.png';
import mapImg from '../assets/images/dummy_map.png';
import '../styles/components/main/main.scss';
import { useNavigate } from 'react-router-dom';
import { categoryList } from '../utils/categoryList';

const MainPage = () => {
  const navigate = useNavigate();

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
                    name: item.name,
                    id: item.id,
                  },
                })
              }
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() =>
              navigate('/search', {
                state: {
                  name: categoryList[0].name,
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
