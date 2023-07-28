export interface CreatePlaceType {
  place: {
    placeAddress: string;
    placeName: string;
    placePhone: string;
    placeXaxis: number;
    placeYaxis: number;
  };
  rooms: {
    roomAmount: number;
    roomMaxNum: number;
    roomName: string;
    roomPrice: number;
  }[];
}

export interface UpdatePlaceType {
  placeId: number;
  data: {
    place: {
      placeAddress: string;
      placeName: string;
      placePhone: string;
      placeXaxis: number;
      placeYaxis: number;
    };
    category: string;
    tagList: string[];
  };
}

export interface UpdateRoomType {
  roomId: number;
  data: {
    roomAmount: number;
    roomMaxNum: number;
    roomName: string;
    roomPrice: number;
  };
}
