import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';
import starIcon from '../../../assets/images/star.png';

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
        <li className="search-list__container--item ">
          <div className="review-list">
            <div className="review-list__rating">
              <img src={starIcon} width={19} height={19} alt="Star Icon" />
              {reviewItem.rating}
            </div>
            <div className="review-list__content">{reviewItem.content}</div>
            <div className="review-list__info">
              <span className="writer">작성자 {reviewItem.nickName}</span>
              <span className="date">{reviewItem.updatedDate}</span>
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailReviewInfo;
