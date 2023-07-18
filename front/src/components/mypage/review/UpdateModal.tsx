import React, { useState } from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import useModals from '../../../components/common/modal/UseModals';
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
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const UpdateModal = ({ onClose, handleSubmit }: UpdateModalProps) => {
  const { closeModal } = useModals();

  const [reviewDetail, setReviewDetail] = useState(myReviewDetail);
  const [reviewContent, setReviewContent] = useState(reviewDetail.content);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (reviewContent.length <= 500)
      setReviewContent(e.currentTarget.value.substring(0, 500));
  };

  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    closeModal(UpdateModal);
    onClose();
  };

  return (
    <ModalForm title={reviewDetail.placeName} onClickEvent={onClickClose}>
      <div className="UpdateModal-container">
        <ReviewModalHeader reviewDetail={reviewDetail} />
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
