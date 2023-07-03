import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../styles/components/search/detail/searchDetailTitle.scss';
import arrowLeftIcon from '../../../assets/images/arrow-left.svg';
import starIcon from '../../../assets/images/star.png';

const SearchDetailTitle = () => {
  const navigate = useNavigate();
  const { searchId } = useParams();

  const goSearchPage = () => {
    navigate('/search');
  };

  const goDetailPage = () => {
    navigate(`/search/${searchId}/detail`);
  };

  const goReviewPage = () => {
    navigate(`/search/${searchId}/review`);
  };

  return (
    <div className="top">
      <div className="top__image">
        <img
          src={arrowLeftIcon}
          width={20}
          height={20}
          alt="Back Button"
          onClick={goSearchPage}
        />
        검색 상세 이미지
      </div>
      <div className="top__content">
        <div className="top__content--title" onClick={goDetailPage}>
          서울역 공유 오피스
        </div>
        <div className="top__content--link">
          <div className="star" onClick={goReviewPage}>
            <img src={starIcon} width={20} height={20} alt="Star Icon" />
            3.5
          </div>
          <span className="review" onClick={goReviewPage}>
            리뷰 23
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailTitle;
