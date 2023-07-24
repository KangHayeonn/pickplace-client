import React, { useState, useEffect } from 'react';
import DetailModal from './DetailModal';
import UpdateModal from './UpdateModal';

import { myReviewList } from '../../../utils/mock/myReviewList';
import { reviewProps } from '../types';
import '../../../styles/components/mypage/review/myReview.scss';
import Review from '../../../api/review';
import ReviewCard from './ReviewCard';

const MyReview = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // const [myReviewList, setMyReviewList] = useState<reviewProps[]>();
  const [clickedReviewId, setClickedReviewId] = useState(-1);

  useEffect(() => {
    // getUserReviews();
  }, []);

  const getUserReviews = () => {
    Review.v1GetUserReview()
      .then((res) => {
        //setMyReviewList(res.data.data)
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
  const onDeleteBtnClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        Review.v1DetleteReview(reviewId)
          .then((res) => {
            setDetailModalOpen(false);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
    };
  };
  const onUpdateBtnClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      document.body.style.overflow = 'hidden';
      setUpdateModalOpen(true);
      setDetailModalOpen(false);
      setClickedReviewId(reviewId);
    };
  };

  return (
    <div className="MyReview">
      {detailModalOpen && (
        <DetailModal
          reviewId={clickedReviewId}
          onUpdateBtnClick={onUpdateBtnClick}
          onDeleteBtnClick={onDeleteBtnClick}
          setUpdateModalOpen={setUpdateModalOpen}
          setDetailModalOpen={setDetailModalOpen}
        />
      )}
      {updateModalOpen && (
        <UpdateModal
          reviewId={clickedReviewId}
          setUpdateModalOpen={setUpdateModalOpen}
        />
      )}
      {myReviewList?.map((item, key) => (
        <ReviewCard
          item={item}
          key={key}
          onCardClick={onCardClick}
          onDeleteBtnClick={onDeleteBtnClick}
          onUpdateBtnClick={onUpdateBtnClick}
        />
      ))}
    </div>
  );
};

export default MyReview;
