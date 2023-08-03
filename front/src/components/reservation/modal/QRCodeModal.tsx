import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/qrCodeModal.scss';
import { RootState } from '../../../store/modules';
import { getUserId } from '../../../utils/tokenControl';
import Api from '../../../api/reservation';
import { setQRCode } from '../../../store/modules/reservation';

interface QRCodeModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const QRCodeModal = ({ onClose, handleSubmit }: QRCodeModalProps) => {
  const dispatch = useDispatch();
  const { payment, paymentType } = useSelector(
    (state: RootState) => state.reservation,
  );
  const [qrCodeUrl, setQRCodeUrl] = useState<string>('');
  const userId = typeof window !== 'undefined' && getUserId();

  const styleType =
    paymentType === '토스페이'
      ? 'toss'
      : paymentType === '카카오페이'
      ? 'kakao'
      : 'naver';

  const onClickEvent = () => {
    handleSubmit();
  };

  const onClickClose = () => {
    onClose();
  };

  useEffect(() => {
    Api.v1GetQRCodeImage(Number(userId), {
      height: 180,
      width: 180,
      roomPrice: payment.roomPrice,
    }).then((res) => {
      if (res.data.code === 200) {
        const { qrImage, qrPaymentCode } = res.data.data;
        setQRCodeUrl(`data:image/png;base64,${qrImage}`);
        dispatch(
          setQRCode({
            qrPaymentCode: qrPaymentCode,
          }),
        );
      }
    });
  }, []);

  return (
    <ModalForm title={paymentType} onClickEvent={onClickClose}>
      <div>
        <div className="qrcode-modal-form__top">
          <div className="qrcode-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="qrcode-modal-form__top--text">
            {payment.roomPrice.toLocaleString()}원
          </div>
        </div>
        <div className="qrcode-modal-form__wrapper">
          <div className={`qrcode-modal-form__box ${styleType}`}>
            <img src={qrCodeUrl} alt="QRCode" />
          </div>
        </div>
        <div className="qrcode-modal-form__footer">
          <div className="qrcode-modal-form__footer--btn">
            <TextButton text="다음" onClick={onClickEvent} />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default QRCodeModal;
