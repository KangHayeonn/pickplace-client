import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import starIcon from '../assets/images/star.png';
import '../styles/search.scss';
import CATEGORYLIST from '../utils/categoryList';
import TAGLIST from '../utils/tagList';
import SEARCHRESULT from '../utils/searchList';

const SearchPage: React.FC = () => {
  const tagList = TAGLIST;
  const categoryList = CATEGORYLIST;
  const searchResult = SEARCHRESULT;

  const { state } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(state);

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.options.selectedIndex];
    setSelectedCategory({
      id: selectedOption.value,
      categoryName: selectedOption.innerText,
    });
  };

  return (
    <div className="search">
      <header>
        <div className="wrapper">
          <h1>{selectedCategory.categoryName}</h1>
          <div className="container inputs">
            <input
              type="text"
              placeholder="도로명/지번 주소를 입력해주세요"
            ></input>
            <div className="container date-input">
              <h3>날짜</h3>
              <input type="date"></input>
            </div>
          </div>
        </div>
      </header>

      <main>
        <aside>
          <hr />
          <div className="container category">
            <h3>카테고리</h3>
            <select onChange={onChangeCategory} value={selectedCategory.id}>
              {categoryList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className="container personnel">
            <h3>인원</h3>
            <div className="counter">
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </div>
          </div>

          <div className="container distance">
            <h3>거리</h3>
            <p>slider</p>
          </div>
          <hr />
          <div className="container buttons">
            {tagList.map((item, key) => (
              <button key={key}>{item.tagName}</button>
            ))}
            <button>더보기</button>
          </div>
          <hr />
          <button className="button submit">옵션적용</button>
        </aside>
        <section>
          <div className="buttons">
            <div className="buttons filter">
              <button>추천순</button>
              <button>낮은가격순</button>
              <button>높은가격순</button>
            </div>
            <button className="button map">지도</button>
          </div>
          <article>
            {searchResult.map((item) => (
              <div key={item.placeId} className="card-component">
                <div className="row top">
                  <h1 className="col-1 placeName">{item.placeName}</h1>
                  <div className="col-2">
                    <img src={starIcon}></img>
                    <span className="rate">{item.placeRating}</span>
                    <span className="review">리뷰 {item.placeReviewCnt}</span>
                  </div>
                </div>
                <div className="row bottom">
                  <span className="col-1 address">
                    {item.placeAddress.address}
                  </span>
                  <span className="col-2 leftRoom">남은 객실 1개</span>
                </div>
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
