import React from 'react';
import Map from './Map';
import '../../styles/components/map/mapModal.scss';
import closeBtnIcon from '../../assets/images/close_big.svg';
import { markerListType } from './types';

type mapModalProps = {
  onCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mapList: markerListType[];
};

const MapModal = ({ onCloseModal, mapList }: mapModalProps) => {
  return (
    <div className="modal-background">
      <div className="map-modal">
        <div className="map-modal__header">
          <button className="map-modal__btn--close" onClick={onCloseModal}>
            <img src={closeBtnIcon}></img>
          </button>
        </div>
        <Map width={'100%'} height={'700px'} markerList={mapList} />
      </div>
    </div>
  );
};

export default MapModal;
