import React from 'react';
import '../../../styles/components/search/detail/searchDetailList.scss';
import '../../../styles/components/search/detail/searchDetailReviewInfo.scss';
import starIcon from '../../../assets/images/star-full.svg';
import SearchReviewDetailModal from './SearchReviewDetailModal';
import useModals from '../../../components/common/modal/UseModals';

interface SearchDetailReviewInfoProps {
  reviewItem?: {
    reviewId: number;
    memberName: string;
    reviewContent: string;
    reviewCreatedDate: string;
    reviewRating: number;
    reservationId: number;
  };
}

const SearchDetailReviewInfo = ({
  reviewItem,
}: SearchDetailReviewInfoProps) => {
  const { openModal } = useModals();
  const handleClick = () => {
    openModal(SearchReviewDetailModal, {
      onSubmit: async () => {
        // close modal
      },
    });
  };

  return (
    <>
      {reviewItem ? (
        <li className="search-list__container--item">
          <div className="search-detail-review__list" onClick={handleClick}>
            <div className="search-detail-review__list--rating">
              <img src={starIcon} width={19} height={19} alt="Star Icon" />
              {reviewItem?.reviewRating}
            </div>
            <div className="search-detail-review__list--content">
              {reviewItem?.reviewContent}
            </div>
            <div className="search-detail-review__list--info">
              <span className="search-detail-review__list--info__writer">
                작성자 {reviewItem?.memberName}
              </span>
              <span className="search-detail-review__list--info__date">
                {reviewItem?.reviewCreatedDate}
              </span>
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailReviewInfo;
