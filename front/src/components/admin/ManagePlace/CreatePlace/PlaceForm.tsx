import React from 'react';
import TextField from '../../../common/TextField';
import { placeFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/placeForm.scss';
import '../../../../styles/components/search/searchOptionMenu.scss';

const PlaceForm = ({
  header,
  newPlaceInfo,
  setAddressModal,
  onPlaceNameChange,
  onPhoneChange,
}: placeFormProps) => {
  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setAddressModal(true);
  };

  return (
    <div className="PlaceForm-container">
      <h3 className="PlaceForm-header">{header}</h3>
      <div className="PlaceForm-textField__container">
        <label className="PlaceForm-textField__label">공간 이름</label>
        <TextField
          onChangeText={onPlaceNameChange}
          value={newPlaceInfo.placeName}
          placeholder={'공간 이름을 입력해주세요'}
        />
      </div>
      <div className="PlaceForm-textField__container">
        <label className="PlaceForm-textField__label">연락처</label>
        <TextField
          onChangeText={onPhoneChange}
          value={newPlaceInfo.phone}
          placeholder={'010-1234-5678'}
        />
      </div>
      <div className="PlaceForm-address__container">
        <label className="PlaceForm-address__label">주소</label>
        <div className="PlaceForm-address">
          <p className="PlaceForm-address__content">{newPlaceInfo.address}</p>
          <button className="PlaceForm-address__btn" onClick={onOpenModal}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceForm;
