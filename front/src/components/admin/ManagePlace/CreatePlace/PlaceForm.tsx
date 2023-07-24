import React from 'react';
import TextField from '../../../common/TextField';
import { placeFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/placeForm.scss';

const PlaceForm = ({
  newPlaceInfo,
  header,
  onPlaceNameChange,
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
        <label className="PlaceForm-textField__label">연락처</label>
        <TextField
          onChangeText={onPhoneChange}
          value={newPlaceInfo.phone}
          placeholder={'- 없이 숫자만 입력해주세요.'}
        />
      </div>
    </div>
  );
};

export default PlaceForm;
