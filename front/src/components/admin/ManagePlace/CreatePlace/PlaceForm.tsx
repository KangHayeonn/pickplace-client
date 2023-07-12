import React from 'react';
import TextField from '../../../common/TextField';
import { placeFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/placeForm.scss';
import '../../../../styles/components/search/searchOptionMenu.scss';
import CategorySelector from '../../../../components/search/CategorySelector';
import TagSelector from '../../../../components/search/TagSelector';
import { categoryList } from '../../../../utils/mock/categoryList';

const PlaceForm = ({
  header,
  newPlaceInfo,
  placeOptions,
  setPlaceOptions,
  onPlaceNameChange,
  onAddressChange,
  onPhoneChange,
}: placeFormProps) => {
  const onChangeCategory = (category: string) => {
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].name == category) {
        setPlaceOptions({
          ...placeOptions,
          category: {
            id: categoryList[i].id,
            name: categoryList[i].name,
          },
        });
      }
    }
  };
  const onClickTagButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagId = e.currentTarget.value;
    const clickedButton = e.currentTarget;
    if (clickedButton.classList.contains('clicked')) {
      e.currentTarget.classList.remove('clicked');
      setPlaceOptions({
        ...placeOptions,
        tagId: placeOptions.tagId.filter((id) => id !== parseInt(tagId)),
      });
    } else {
      e.currentTarget.classList.add('clicked');
      setPlaceOptions({
        ...placeOptions,
        tagId: [...placeOptions.tagId, parseInt(tagId)],
      });
    }
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
      <div className="PlaceForm-categorySelector__container">
        <CategorySelector
          categoryName={placeOptions.category.name}
          onChangeCategory={onChangeCategory}
        />
      </div>
      <div className="PlaceForm-tagSelector__container">
        <h3 className="PlaceForm-tagSelector__header">태그</h3>
        <TagSelector onClickTagButton={onClickTagButton} />
      </div>
    </div>
  );
};

export default PlaceForm;
