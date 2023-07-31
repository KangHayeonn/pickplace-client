import React, { useState, useEffect } from 'react';
import DetailModal from './DetailModal';
import UpdateModal from './UpdateModal';
import ReviewCard from './ReviewCard';
import Review from '../../../api/review';
import { isShowError } from '../../../components/common/ToastBox';
import { reviewCardItemProps } from '../types';
import '../../../styles/components/mypage/review/myReview.scss';
import ConfirmModal from '../review/ConfirmModal';

const MyReview = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [myReviewList, setMyReviewList] = useState<reviewCardItemProps[]>();
  const [clickedReviewId, setClickedReviewId] = useState(-1);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  useEffect(() => {
    getUserReviews();
  }, []);

  const getUserReviews = () => {
    Review.v1GetUserReview()
      .then((res) => {
        setMyReviewList(res.data.data.reviewList);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onCardClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      document.body.style.overflow = 'hidden';
      setDetailModalOpen(true);
      setClickedReviewId(reviewId);
    };
  };
  const onDeleteReview = (reviewId: number) => {
    Review.v1DetleteReview(reviewId)
      .then((res) => {
        isShowError('리뷰 삭제 완료');
        getUserReviews();
        setDetailModalOpen(false);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onUpdateBtnClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      document.body.style.overflow = 'hidden';
      setUpdateModalOpen(true);
      setDetailModalOpen(false);
      setClickedReviewId(reviewId);
    };
  };
  const onClickClose = () => {
    setUpdateModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  const onCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  return (
    <div className="MyReview">
      {confirmModalOpen && (
        <ConfirmModal
          onClose={onClickClose}
          onCloseConfirmModal={onCloseConfirmModal}
          title="리뷰 수정 취소"
          content="취소 시에 내용이 저장되지 않습니다. 정말 취소하시겠습니까?"
        />
      )}
      {detailModalOpen && (
        <DetailModal
          reviewId={clickedReviewId}
          onUpdateBtnClick={onUpdateBtnClick}
          onDeleteReview={onDeleteReview}
          getUserReviews={getUserReviews}
          setDetailModalOpen={setDetailModalOpen}
        />
      )}
      {updateModalOpen && (
        <UpdateModal
          reviewId={clickedReviewId}
          setUpdateModalOpen={setUpdateModalOpen}
          getUserReviews={getUserReviews}
          setConfirmModalOpen={setConfirmModalOpen}
        />
      )}

      {myReviewList && myReviewList.length > 0 ? (
        myReviewList.map((item, key) => (
          <ReviewCard
            reviewItem={item}
            key={key}
            onCardClick={onCardClick}
            onDeleteReview={onDeleteReview}
            onUpdateBtnClick={onUpdateBtnClick}
          />
        ))
      ) : (
        <div>리뷰가 아직 없습니다.</div>
      )}
    </div>
  );
};

export default MyReview;
