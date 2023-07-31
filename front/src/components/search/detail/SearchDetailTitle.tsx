import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../styles/components/search/detail/searchDetailTitle.scss';
import arrowLeftIcon from '../../../assets/images/arrow-left.svg';
import starIcon from '../../../assets/images/star-full.svg';
import Api from '../../../api/search';

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

  const getPlaceDetail = () => {
    const data = {
      startDate: '2023.06.30',
      endDate: '2023.07.01',
      startTime: '11:00',
      endTime: '12:00',
    };
    Api.v1SearchDetail(Number(searchId), data);
  };

  useEffect(() => {
    getPlaceDetail;
  }, []);

  return (
    <div className="search-detail-top">
      <div className="search-detail-top__image">
        <img
          src={arrowLeftIcon}
          width={20}
          height={20}
          alt="Back Button"
          onClick={goSearchPage}
        />
        검색 상세 이미지
      </div>
      <div className="search-detail-top__content">
        <div
          className="search-detail-top__content--title"
          onClick={goDetailPage}
        >
          서울역 공유 오피스
        </div>
        <div className="search-detail-top__content--link">
          <div
            className="search-detail-top__content--link__star"
            onClick={goReviewPage}
          >
            <img src={starIcon} width={20} height={20} alt="Star Icon" />
            3.5
          </div>
          <span
            className="search-detail-top__content--link__review"
            onClick={goReviewPage}
          >
            리뷰 23
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailTitle;
