import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../../../../components/common/SearchForm';
import { addressFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/addressForm.scss';

const AddressForm = ({ newPlaceInfo, onAddressChange }: addressFormProps) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [addressSearchResults, setAddressSearchResults] = useState<
    {
      address_name: string;
      x: string;
      y: string;
    }[]
  >();
  const errMsg = '해당 주소에 대한 검색 결과가 존재하지 않습니다.';

  const getSearchResult = async (e: React.MouseEvent<HTMLButtonElement>) => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${searchKeyword}&analyze_type=${'exact'}&size=${5}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_KEY}`,
          },
        },
      )
      .then((res) => {
        if (res.data.documents.length != 0) {
          setAddressSearchResults(res.data.documents);
        } else {
          setAddressSearchResults([]);
        }
      });
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  return (
    <div className="AddressForm-container">
      <label className="AddressForm-label">주소</label>
      <div className="AddressForm-address">
        <div className="AddressForm-address__content">
          <SearchForm search={searchKeyword} onChangeSearch={onKeywordChange} />
        </div>
        <button className="AddressForm-address__btn" onClick={getSearchResult}>
          검색
        </button>
      </div>
      {addressSearchResults && (
        <div className="AddressForm-searchResults__container">
          {addressSearchResults.length > 0 ? (
            addressSearchResults.map((item, key) => (
              <div key={key} className="AddressForm-searchResults">
                <p
                  className="AddressForm-searchResults__content"
                  onClick={onAddressChange(item.address_name, item.x, item.y)}
                >
                  {item.address_name}
                </p>
              </div>
            ))
          ) : (
            <div className="AddressForm-searchResults__errMsg">{errMsg}</div>
          )}
        </div>
      )}
      <div className="AddressForm-selectedAddress__container">
        <p className="AddressForm-selectedAddress">{newPlaceInfo.address}</p>
      </div>
    </div>
  );
};

export default AddressForm;
