import React from 'react';
import TextField from '../../../common/TextField';
import { placeFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/placeForm.scss';

const PlaceForm = ({
  header,
  newPlaceInfo,
  onPlaceNameChange,
  onAddressChange,
  onPhoneChange,
}: placeFormProps) => {
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
        <label className="PlaceForm-textField__label">주소</label>
        <TextField
          onChangeText={onAddressChange}
          value={newPlaceInfo.address}
          placeholder={'도로명 또는 지번을 입력해주세요'}
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
    </div>
  );
};

export default PlaceForm;
