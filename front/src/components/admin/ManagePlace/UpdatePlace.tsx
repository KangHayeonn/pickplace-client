import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceForm from './CreatePlace/PlaceForm';
import AddressForm from './CreatePlace/AddressForm';

import OptionForm from './CreatePlace/OptionForm';
import '../../../styles/components/admin/managePlace/createPlace/createPlace.scss';
import { placeProps, placeOptionsProps } from '../types';

import { confirmToPost } from './PlaceManageFunc';
import Admin from '../../../api/admin';
import axios from 'axios';

const UpdatePlace = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [placeInfo, setPlaceInfo] = useState<placeProps>({
    placeName: '',
    placeAddress: '',
    placePhone: '',
    placeXaxis: 0,
    placeYaxis: 0,
  });

  const [placeOptions, setPlaceOptions] = useState<placeOptionsProps>({
    category: {
      name: '',
      id: 0,
    },
    tagList: [],
  });

  useEffect(() => {
    getPlaceDetail();
  }, []);

  async function getXY(data: {
    placeName: string;
    placeAddress: string;
    placePhone: string;
  }) {
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${
        data.placeAddress
      }&size=${1}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_KEY}`,
        },
      },
    );

    setPlaceInfo({
      placeName: data.placeName,
      placeAddress: data.placeAddress,
      placePhone: data.placePhone,
      placeXaxis: parseFloat(res.data.documents[0].address.x),
      placeYaxis: parseFloat(res.data.documents[0].address.y),
    });
  }
  const getPlaceDetail = () => {
    Admin.v1GetPlaceDetailRoom(state.placeId)
      .then((res) => {
        getXY({
          placeName: res.data.data.place.placeName,
          placeAddress: res.data.data.place.placeAddress,
          placePhone: res.data.data.place.placePhone,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onPlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceInfo({
      ...placeInfo,
      placeName: e.currentTarget.value,
    });
  };
  const onAddressChange = (address: string, x: string, y: string) => {
    setPlaceInfo({
      ...placeInfo,
      placeAddress: address,
      placeXaxis: parseFloat(x),
      placeYaxis: parseFloat(y),
    });
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceInfo({
      ...placeInfo,
      placePhone: e.currentTarget.value,
    });
  };
  const onCancleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 수정을 취소하시겠습니까?')) {
      navigate('/mypage');
    }
  };
  const onUpdateBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirmToPost(placeInfo)) {
      const data = {
        placeId: state.placeId,
        data: {
          place: {
            placeAddress: placeInfo.placeAddress,
            placeName: placeInfo.placeName,
            placePhone: placeInfo.placePhone,
            placeXaxis: placeInfo.placeXaxis,
            placeYaxis: placeInfo.placeYaxis,
          },
          category: placeOptions.category.name,
          tagList: placeOptions.tagList,
        },
      };
      Admin.v1UpdatePlace(data)
        .then((res) => {
          const newState = {
            placeId: state.placeId,
            placeName: placeInfo.placeName,
            placeAddress: placeInfo.placeAddress,
            placePhone: placeInfo.placePhone,
            placeCategory: placeOptions.category.name,
          };
          navigate(`/mypage/managePlace/detail/${state.placeId}`, {
            state: newState,
          });
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  };
  return (
    <div className="createPlace-container">
      <PlaceForm
        newPlaceInfo={placeInfo}
        header={'공간 수정'}
        onPlaceNameChange={onPlaceNameChange}
        onPhoneChange={onPhoneChange}
      />
      <AddressForm onAddressChange={onAddressChange} newPlaceInfo={placeInfo} />
      <OptionForm
        placeOptions={placeOptions}
        setPlaceOptions={setPlaceOptions}
      />
      <div className="createPlace-btn__container">
        <button className="createPlace-cancelBtn" onClick={onCancleBtnClick}>
          등록취소
        </button>
        <button className="createPlace-createBtn" onClick={onUpdateBtnClick}>
          공간수정
        </button>
      </div>
    </div>
  );
};

export default UpdatePlace;
