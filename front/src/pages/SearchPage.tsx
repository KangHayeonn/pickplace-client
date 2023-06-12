import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import { increase } from '../store/modules/sample';
import Sample from '../api/sample';
import starIcon from '../assets/images/star.png';
import '../styles/search.scss';
const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const placeList = [
    { placeName: '호텔/리조트' },
    { placeName: '펜션' },
    { placeName: '게스트하우스' },
    { placeName: '스터디룸' },
    { placeName: '파티룸' },
  ];
  const tagList = [
    { tagName: '애견동반' },
    { tagName: '조용한' },
    { tagName: '연인추천' },
    { tagName: '신나는' },
  ];
  const searchResult = [
    {
      placeId: 0,
      placeName: '비즈니스 호텔A',
      placeAddress: {
        address: '강남구',
        latitude: 0,
        longitude: 0,
      },
      placeRating: 3.5,
      placeReviewCnt: 13,
    },
    {
      placeId: 1,
      placeName: '비즈니스 호텔B',
      placeAddress: {
        address: '강남구',
        latitude: 0,
        longitude: 0,
      },
      placeRating: 4.5,
      placeReviewCnt: 5,
    },
    {
      placeId: 2,
      placeName: '비즈니스 호텔C',
      placeAddress: {
        address: '강남구',
        latitude: 0,
        longitude: 0,
      },
      placeRating: 3.0,
      placeReviewCnt: 2,
    },
    {
      placeId: 3,
      placeName: '비즈니스 호텔D',
      placeAddress: {
        address: '강남구',
        latitude: 0,
        longitude: 0,
      },
      placeRating: 3.0,
      placeReviewCnt: 2,
    },
  ];
  useEffect(() => {
    Sample.getSampleData()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }, []);

  return (
    <div className="search">
      <header>
        <div className="wrapper">
          <h1>호텔∙리조트</h1>
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
            <select>
              {placeList.map((item, key) => (
                <option key={key}>{item.placeName}</option>
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
