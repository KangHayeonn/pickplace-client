import React, { useState } from 'react';
import ModalForm from './ModalForm';
import ReviewModalHeader from './ReviewModalHeader';
import CheckIcon from '../../../assets/images/check.svg';
import StarRate from '../../../components/common/StarRate';
import Review from '../../../api/review';
import '../../../styles/components/mypage/review/reviewModal.scss';
import { myReviewDetail } from '../../../utils/mock/myReviewList';

interface UpdateModalProps {
  reviewId: number;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateModal = ({ reviewId, setUpdateModalOpen }: UpdateModalProps) => {
  const [reviewDetail, setReviewDetail] = useState(myReviewDetail);
  const [reviewContent, setReviewContent] = useState(reviewDetail.content);
  const [starRate, setStarRate] = useState(reviewDetail.rating);

  const onClickStar = (rate: number) => {
    setStarRate(rate);
  };
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
      document.body.style.overflow = 'unset';
    }
  };
  const onUpdateBtnClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (starRate == 0) {
      window.alert('별점을 입력해주세요.');
    } else if (reviewContent == '') {
      window.alert('리뷰 내용을 입력해주세요');
    } else {
      const data = {
        reviewId: reviewId,
        data: {
          content: reviewContent,
          rating: starRate,
        },
      };
      Review.v1UpdateReview(data)
        .then((res) => {
          setUpdateModalOpen(false);
          document.body.style.overflow = 'unset';
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };

  return (
    <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
      <div className="ReviewModal-container">
        <ReviewModalHeader
          nickname={reviewDetail.nickname}
          date={reviewDetail.date}
          placeAddress={reviewDetail.placeAddress}
          startDate={reviewDetail.startDate}
          endDate={reviewDetail.endDate}
          startTime={reviewDetail.startTime}
          endTime={reviewDetail.endTime}
        />
        <div className="ReviewModal-content">
          <div className="ReviewModal-starRate__container">
            <StarRate
              onClickStar={onClickStar}
              defaultStar={reviewDetail.rating}
            />
            <img src={CheckIcon} alt="checked icon" />
          </div>
          <div className="ReviewModal-textArea__container">
            <textarea
              className="ReviewModal-textArea"
              onChange={onChangeContent}
              value={reviewContent}
            />
            <div className="ReviewModal-count__container">
              <span>{reviewContent.length}/500</span>
            </div>
          </div>
        </div>
        <div className="ReviewModal-btn__container">
          <button
            className="ReviewModal-submitBtn"
            onClick={onUpdateBtnClicked}
          >
            작성완료
          </button>
        </div>
      </div>
    </ModalForm>
  );
};

export default UpdateModal;
