import React from 'react';
import { optionFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/optionForm.scss';
import '../../../../styles/components/search/searchOptionMenu.scss';
import CategorySelector from '../../../../components/search/CategorySelector';
import TagSelector from '../../../../components/search/TagSelector';
import { categoryList } from '../../../../utils/mock/categoryList';

const OptionForm = ({ placeOptions, setPlaceOptions }: optionFormProps) => {
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
    <div className="OptionForm-container">
      <div className="OptionForm-categorySelector__container">
        <CategorySelector
          categoryName={placeOptions.category.name}
          onChangeCategory={onChangeCategory}
        />
      </div>
      <div className="OptionForm-tagSelector__container">
        <h3 className="OptionForm-tagSelector__header">태그</h3>
        <TagSelector onClickTagButton={onClickTagButton} />
      </div>
    </div>
  );
};

export default OptionForm;
