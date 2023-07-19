import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';
import '../../../styles/components/search/detail/searchDetailReviewInfo.scss';
import starIcon from '../../../assets/images/star-full.svg';

interface SearchDetailReviewInfoProps {
  reviewItem?: {
    reviewId: number;
    nickName: string;
    content: string;
    updatedDate: string;
    rating: number;
  };
}

const SearchDetailReviewInfo = ({
  reviewItem,
}: SearchDetailReviewInfoProps) => {
  return (
    <>
      {reviewItem ? (
        <li className="search-list__container--item">
          <div className="search-detail-review__list">
            <div className="search-detail-review__list--rating">
              <img src={starIcon} width={19} height={19} alt="Star Icon" />
              {reviewItem.rating}
            </div>
            <div className="search-detail-review__list--content">
              {reviewItem.content}
            </div>
            <div className="search-detail-review__list--info">
              <span className="search-detail-review__list--info__writer">
                작성자 {reviewItem.nickName}
              </span>
              <span className="search-detail-review__list--info__date">
                {reviewItem.updatedDate}
              </span>
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailReviewInfo;
