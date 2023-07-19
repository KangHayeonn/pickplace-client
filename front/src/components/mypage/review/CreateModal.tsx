import React, { useState } from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import ReviewModalHeader from './ReviewModalHeader';
import FullStarIcon from '../../../assets/images/star-full.svg';
import EmptyStarIcon from '../../../assets/images/star-empty.svg';
import CheckIcon from '../../../assets/images/check.svg';
import { reservationDetail } from '../../../utils/mock/reservationDetail';
import '../../../styles/components/mypage/review/updateModal.scss';

interface CreateModalProps {
  reservationId: number;
  setCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateModal = ({
  reservationId,
  setCreateModalOpen,
}: CreateModalProps) => {
  const [reviewContent, setReviewContent] = useState('');
  const [resevationInfo, setReservationInfo] = useState(reservationDetail);

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

  return (
    <ModalForm title={resevationInfo.placeName} onClickEvent={onClickClose}>
      <div className="UpdateModal-container">
        <ReviewModalHeader
          placeAddress={resevationInfo.placeAddress.address}
          startDate={resevationInfo.startDate}
          endDate={resevationInfo.endDate}
          startTime={resevationInfo.startTime}
          endTime={resevationInfo.endTime}
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

export default CreateModal;
