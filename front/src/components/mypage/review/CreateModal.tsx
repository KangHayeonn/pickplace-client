import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import ReviewModalHeader from './ReviewModalHeader';
import StarRate from '../../../components/common/StarRate';
import CheckIcon from '../../../assets/images/check.svg';
import { reservationDetail } from '../../../utils/mock/reservationDetail';
import '../../../styles/components/mypage/review/reviewModal.scss';
import Review from '../../../api/review';
import { CreateModalProps } from '../types';
import User from '../../../api/mypage';

export type resevationInfoProps = {
  placeName: string;
  address: string;
  reservationDate: string;
};
const CreateModal = ({
  reservationId,
  setCreateModalOpen,
}: CreateModalProps) => {
  const [reviewContent, setReviewContent] = useState('');
  const [resevationInfo, setReservationInfo] = useState<resevationInfoProps>({
    placeName: '',
    address: '',
    reservationDate: '',
  });
  const [starRate, setStarRate] = useState(0);

  useEffect(() => {
    getUserReservationDetail();
  }, []);

  const getUserReservationDetail = () => {
    User.v1GetUserReservationDetail(reservationId)
      .then((res) => {
        setReservationInfo({
          placeName: res.data.data.reservation[0].placeName,
          address: res.data.data.reservation[0].placeAddress.address,
          reservationDate: res.data.data.reservation[0].reservationDate.replace(
            'T',
            ' ',
          ),
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
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
      setCreateModalOpen(false);
    }
  };
  const onClickStar = (rate: number) => {
    setStarRate(rate);
  };
  const onCreateBtnClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (starRate == 0) {
      window.alert('별점을 입력해주세요.');
    } else if (reviewContent == '') {
      window.alert('리뷰 내용을 입력해주세요');
    } else {
      const data = {
        reservationId: reservationId,
        content: reviewContent,
        rating: starRate,
      };
      Review.v1CreateReview(data)
        .then((res) => {
          setCreateModalOpen(false);
          document.body.style.overflow = 'unset';
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };

  return (
    <ModalForm title={resevationInfo.placeName} onClickEvent={onClickClose}>
      <div className="ReviewModal-container">
        <ReviewModalHeader
          placeAddress={resevationInfo.address}
          reservationDate={resevationInfo.reservationDate}
        />
        <div className="ReviewModal-content">
          <div className="ReviewModal-starRate__container">
            <StarRate onClickStar={onClickStar} />
            {starRate != 0 && <img src={CheckIcon} alt="checked icon" />}
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
            onClick={onCreateBtnClicked}
          >
            작성완료
          </button>
        </div>
      </div>
    </ModalForm>
  );
};

export default CreateModal;
