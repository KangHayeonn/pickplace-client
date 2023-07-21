import React, { useState } from 'react';
import DetailModal from './DetailModal';
import UpdateModal from './UpdateModal';

import StarIcon from '../../../assets/images/star-full.svg';
import DeleteIcon from '../../../assets/images/trash.svg';
import UpdateIcon from '../../../assets/images/edit.svg';
import { myReviewList } from '../../../utils/mock/myReviewList';
import { reviewProps } from '../types';
import '../../../styles/components/mypage/review/myReview.scss';

const MyReview = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // document.body.style.overflow = 'hidden';
  // document.body.style.overflow = 'unset';

  const [myReview, setMyReview] = useState<reviewProps[]>(myReviewList);
  const [clickedReviewId, setClickedReviewId] = useState(-1);

  const onCardClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      document.body.style.overflow = 'hidden';
      setDetailModalOpen(true);
      setClickedReviewId(reviewId);
    };
  };
  const onDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      //delete api
    }
  };
  const onUpdateBtnClick = (reviewId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      document.body.style.overflow = 'hidden';
      setUpdateModalOpen(true);
      setClickedReviewId(reviewId);
    };
  };

  return (
    <div className="MyReview">
      {detailModalOpen && (
        <DetailModal
          reviewId={clickedReviewId}
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
      {myReviewList.map((item, key) => (
        <div className="MyReview-card__container" key={key}>
          <div className="MyReview-card__header">
            <div
              className="MyReview-card__header--col1"
              onClick={onCardClick(item.reviewId)}
            >
              <div className="detail-img__container"></div>
            </div>
            <div
              className="MyReview-card__header--col2"
              onClick={onCardClick(item.reviewId)}
            >
              <div className="MyReview-card__header--row1">
                <h4 className="MyReview-placeName">{item.placeName}</h4>
              </div>
              <p className="MyReview-reservationId">
                예약 번호 : {item.reservationId}
              </p>
            </div>
            <div className="MyReview-btn_container">
              <button
                className="MyReview-btn"
                onClick={onUpdateBtnClick(item.reviewId)}
              >
                <img src={UpdateIcon} />
              </button>
              <button className="MyReview-btn" onClick={onDeleteBtnClick}>
                <img src={DeleteIcon} />
              </button>
            </div>
          </div>
          <div
            className="MyReview-card__content"
            onClick={onCardClick(item.reviewId)}
          >
            <p className="MyReview-card__rating">
              <img className="MyReview-star" src={StarIcon} alt="star" />
              {item.rating}
            </p>
            <div className="MyReview-card__reviewContent">{item.content}</div>
          </div>
          <div className="MyReview-card__info">
            <span className="MyReview-nickname">작성자 {item.nickname}</span>
            <span className="MyReview-date">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReview;
