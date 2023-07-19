import React, { useState } from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import ReviewModalHeader from './ReviewModalHeader';
import FullStarIcon from '../../../assets/images/star-full.svg';
import EmptyStarIcon from '../../../assets/images/star-empty.svg';
import CheckIcon from '../../../assets/images/check.svg';

import '../../../styles/components/mypage/review/updateModal.scss';
import {
  myReviewDetail,
  myReviewDetail2,
} from '../../../utils/mock/myReviewList';

interface UpdateModalProps {
  reviewId: number;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateModal = ({ reviewId, setUpdateModalOpen }: UpdateModalProps) => {
  const [reviewDetail, setReviewDetail] = useState(myReviewDetail);
  const [reviewContent, setReviewContent] = useState(reviewDetail.content);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (reviewContent.length <= 500)
      setReviewContent(e.currentTarget.value.substring(0, 500));
  };

  const onClickClose = () => {
    if (
      window.confirm(
        '취소 시 내용이 저장되지 않습니다. 작성을 취소하시겠습니까?',
      )
    ) {
      setUpdateModalOpen(false);
    }
  };

  return (
    <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
      <div className="UpdateModal-container">
        <ReviewModalHeader
          nickname={reviewDetail.nickname}
          date={reviewDetail.date}
          placeAddress={reviewDetail.placeAddress}
          startDate={reviewDetail.startDate}
          endDate={reviewDetail.endDate}
          startTime={reviewDetail.startTime}
          endTime={reviewDetail.endTime}
        />
        <div className="UpdateModal-content">
          <div className="UpdateModal-starRate__container">
            <div>
              <span>
                <img src={EmptyStarIcon} />
              </span>
              <span>
                <img src={EmptyStarIcon} />
              </span>
              <span>
                <img src={EmptyStarIcon} />
              </span>
              <span>
                <img src={EmptyStarIcon} />
              </span>
              <span>
                <img src={EmptyStarIcon} />
              </span>
            </div>
            <img src={CheckIcon} alt="checked icon" />
          </div>
          <div className="UpdateModal-textArea__container">
            <textarea
              className="UpdateModal-textArea"
              onChange={onChangeContent}
              value={reviewContent}
            />
            <div className="UpdateModal-count__container">
              <span>{reviewContent.length}/500</span>
            </div>
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default UpdateModal;