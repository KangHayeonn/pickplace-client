import React from 'react';
import { addressModalProps } from '../types';
import DaumPostcode, { Address } from 'react-daum-postcode';
import closeBtnIcon from '../../../assets/images/close_big.svg';
import '../../../styles/components/admin/managePlace/addressModal.scss';

const AddressModal = ({
  onAddressChange,
  setAddressModal,
}: addressModalProps) => {
  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'unset';
    setAddressModal(false);
  };

  const handleComplete = (data: Address) => {
    onAddressChange(data.address);
    document.body.style.overflow = 'unset';
    setAddressModal(false);
  };
  return (
    <div className="address-background">
      <div className="address-modal__container">
        <div className="address-modal__header">
          <button className="address-modal__btn--close" onClick={onCloseModal}>
            <img src={closeBtnIcon}></img>
          </button>
        </div>
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default AddressModal;
