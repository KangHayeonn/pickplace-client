import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../../../../components/common/SearchForm';
import { addressFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/addressForm.scss';

const AddressForm = ({ newPlaceInfo, onAddressChange }: addressFormProps) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [searchPreviewList, setSearchPreviewList] = useState<
    {
      address_name: string;
      x: string;
      y: string;
    }[]
  >([]);
  useEffect(() => {
    async function getSearchList() {
      const res = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${searchKeyword}&size=${10}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_KEY}`,
          },
        },
      );
      if (res.data.documents.length > 0) {
        setSearchPreviewList(res.data.documents);
      }
    }
    if (searchKeyword != '') {
      getSearchList();
    } else {
      setSearchPreviewList([]);
    }
  }, [searchKeyword]);

  const onClickAddress = (address: string, x: string, y: string) => {
    onAddressChange(address, x, y);
    setSearchKeyword(address);
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  return (
    <div className="AddressForm-container">
      <label className="AddressForm-label">주소</label>
      <div className="AddressForm-address">
        <div className="AddressForm-address__content">
          <SearchForm
            search={searchKeyword}
            searchPreviewList={searchPreviewList}
            onChangeSearch={onKeywordChange}
            onClickAddress={onClickAddress}
          />
        </div>
        <div className="AddressForm-selectedAddress__container">
          <p className="AddressForm-selectedAddress">{newPlaceInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
