import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../styles/components/search/detail/searchDetailTitle.scss';
import arrowLeftIcon from '../../../assets/images/arrow-left.svg';
import starIcon from '../../../assets/images/star-full.svg';
import Api from '../../../api/search';
import { RootState } from '../../../store/modules';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';

const SearchDetailTitle = () => {
  const navigate = useNavigate();
  const { searchId } = useParams();
  const searchDetail = useSelector(
    (state: RootState) => state.searchDetail.place,
  );
  const category = useSelector((state: RootState) => state.optionForm.category);

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
      <div
        className="search-detail-top__image"
        style={{
          backgroundImage: `url(${GetCategoryImage(category)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
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
          {searchDetail.placeName}
        </div>
        <div className="search-detail-top__content--link">
          <div
            className="search-detail-top__content--link__star"
            onClick={goReviewPage}
          >
            <img src={starIcon} width={20} height={20} alt="Star Icon" />
            {searchDetail.placeRating.toFixed(1)}
          </div>
          <span
            className="search-detail-top__content--link__review"
            onClick={goReviewPage}
          >
            리뷰 {searchDetail.placeReviewCnt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailTitle;
