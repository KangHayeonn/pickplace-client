import React from 'react';
import Map from './Map';
import '../../styles/components/map/mapModal.scss';
import closeBtnIcon from '../../assets/images/close-btn.png';

type mapModalProps = {
  onCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const MapModal = ({ onCloseModal }: mapModalProps) => {
  return (
    <div className="modal-background">
      <div className="map-modal">
        <div className="map-modal__header">
          <button className="map-modal__btn--close" onClick={onCloseModal}>
            <img src={closeBtnIcon}></img>
          </button>
        </div>
        <Map></Map>
      </div>
    </div>
  );
};

export default MapModal;
