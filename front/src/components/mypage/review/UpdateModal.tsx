import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReviewModalHeader from './ReviewModalHeader';
import CheckIcon from '../../../assets/images/check.svg';
import StarRate from '../../../components/common/StarRate';
import { isShowError } from '../../../components/common/ToastBox';
import Review from '../../../api/review';
import '../../../styles/components/mypage/review/reviewModal.scss';
import { UpdateModalProps, reviewDetailProps } from '../types';

const UpdateModal = ({
  reviewId,
  setUpdateModalOpen,
  getUserReviews,
  setConfirmModalOpen,
}: UpdateModalProps) => {
  const [reviewDetail, setReviewDetail] = useState<reviewDetailProps>({
    reviewId: 0,
    reviewDate: '',
    reviewContent: '',
    reviewRating: 0,
    reservationDate: '',
    memberName: '',
    placeAddress: '',
    placeName: '',
    placeCategory: '',
  });
  const [reviewContent, setReviewContent] = useState<string>('');
  const [starRate, setStarRate] = useState<number>(0);

  useEffect(() => {
    getUserReviewDetail();
  }, []);

  const getUserReviewDetail = () => {
    Review.v1GetReviewDetail(reviewId)
      .then((res) => {
        setReviewDetail(res.data.data);
        setReviewContent(res.data.data.reviewContent);
        setStarRate(res.data.data.reviewRating);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onClickStar = (rate: number) => {
    setStarRate(rate);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (reviewContent.length <= 500)
      setReviewContent(e.currentTarget.value.substring(0, 500));
  };

  const onUpdateBtnClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (starRate == 0) {
      isShowError('별점을 입력해주세요.');
    } else if (reviewContent == '') {
      isShowError('리뷰 내용을 입력해주세요');
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
          isShowError('리뷰 수정 완료');
          getUserReviews();
          setUpdateModalOpen(false);
          document.body.style.overflow = 'unset';
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };

  return (
    <ModalForm
      title={reviewDetail.placeName}
      onClickEvent={() => setConfirmModalOpen(true)}
    >
      <div className="ReviewModal-container">
        <ReviewModalHeader
          category={reviewDetail.placeCategory}
          memberName={reviewDetail.memberName}
          reviewDate={reviewDetail.reviewDate}
          placeAddress={reviewDetail.placeAddress}
          reservationDate={reviewDetail.reservationDate}
        />
        <div className="ReviewModal-content">
          <div className="ReviewModal-starRate__container">
            {reviewDetail.reviewRating > 0 && (
              <StarRate
                onClickStar={onClickStar}
                defaultStar={reviewDetail.reviewRating}
              />
            )}
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
