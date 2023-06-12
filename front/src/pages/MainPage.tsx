import React from 'react';
import articleImg from '../assets/images/main-article.png';
import mapImg from '../assets/images/dummy_map.png';
import '../styles/main.scss';
const MainPage: React.FC = () => {
  const placeList = [
    { placeName: '호텔/리조트' },
    { placeName: '펜션' },
    { placeName: '게스트하우스' },
    { placeName: '스터디룸' },
    { placeName: '파티룸' },
    { placeName: '더보기' },
  ];
  return (
    <div className="main">
      <section>
        <img src={articleImg}></img>
        <div className="buttons">
          {placeList.map((item, key) => (
            <button key={key}>{item.placeName}</button>
          ))}
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
