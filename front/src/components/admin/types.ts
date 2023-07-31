export type reservedCardProps = {
  adminReservationProps: reservedRoom;
};

export type reservedRoom = {
  reservationId: number;
  roomName: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  createdDate: string;
  updatedDated: string;
  reservationStatus: string;
  reservationPeopleNum: string;
};

export type adminReservation = {
  placeName: string;
  reservations: reservedRoom[];
};

export type adminReservationDetail = {
  member: {
    memberName: string;
  };

  reservation: {
    reservationId: number;
    roomName: string;
    checkInDate: string;
    checkInTime: string;
    checkOutDate: string;
    checkOutTime: string;
    reservationStatus: string;
    createdDate: string;
    updatedDate: string;
    reservationPeopleNum: number;
  };

  place: {
    placeAddress: string;
    placePhone: string;
    placeName: string;
    placeId: number;
    placeCategory: string;
  };
};
export type reservationBtnsProps = {
  reservationStatus: string;
  onClickAcceptBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type adminPlaceProps = {
  placeName: string;
  placeAddress: string;
  placePhone: string;
  placeCategory: string;
  placeId: number;
};

export type placeCardProps = {
  adminPlace: adminPlaceProps;
};
export type placeHeaderProps = {
  placeName: string;
  placePhone: string;
  placeCategory: string;
  address: string;
};

export type roomCardProps = {
  roomProps: roomProps;
  getAdminDetailRoom: () => void;
  placeCategory: string;
};

export type updateRoomInfoProps = {
  roomInfo: roomProps;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onClickUpdateBtn: (
    newRoomName: string,
    newRoomPrice: number,
    newroomMaxNum: number,
    newroomAmount: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type newRoomProps = {
  roomName: string;
  roomPrice: string;
  roomMaxNum: string;
  roomAmount: string;
  roomId: undefined | number;
};

export type roomProps = {
  roomName: string;
  roomPrice: number;
  roomMaxNum: number;
  roomAmount: number;
  roomId: number;
};

export type placeProps = {
  placeName: string;
  placeAddress: string;
  placePhone: string;
  placeXaxis: number;
  placeYaxis: number;
};

export type addedRoomProps = {
  newRoomList: roomProps[];
  onClickDeleteRoomBtn: (
    roomId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type roomFormProps = {
  newRoomInfo: newRoomProps;
  onRoomNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoomPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPersonnelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onroomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddNewRoom: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type placeFormProps = {
  newPlaceInfo: {
    placeName: string;
    placeAddress: string;
    placePhone: string;
  };
  header: string;
  onPlaceNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type addressFormProps = {
  newPlaceInfo: {
    placeName: string;
    placeAddress: string;
    placePhone: string;
  };
  onAddressChange: (address: string, x: string, y: string) => void;
};

export type placeOptionsProps = {
  category: {
    name: string;
    id: number;
  };
  tagList: Array<string>;
};

export type optionFormProps = {
  placeOptions: placeOptionsProps;
  setPlaceOptions: React.Dispatch<React.SetStateAction<placeOptionsProps>>;
};
