export const adminRoomList = [
  {
    roomId: 10,
    roomName: '201호(최대 4명 / 인원 추가 시 추가요금)',
    roomPrice: 15000,
    roomStatus: 'available',
  },
  {
    roomId: 20,
    roomName: '202호(최대 8명)',
    roomPrice: 18000,
    roomStatus: 'unavailable',
  },
  {
    roomId: 30,
    roomName: '203호(최대 12명 최소 4명)',
    roomPrice: 20000,
    roomStatus: 'available',
  },
];
export const adminPlaceList = [
  {
    placeId: 10,
    placeName: '공유 오피스 - 회의실 201호(최대 12명 최소 4명)',
    placePhone: '02-123-4567',
    placeAddress: {
      address: '서울특별시 중구 345-34',
      latitude: 58.42432,
      longitude: 126.22346,
    },
    placeRating: 3.5,
    placeReviewCnt: 15,

    roomList: adminRoomList,
  },
  {
    placeId: 30,
    placeName: '종로구 비즈니스 호텔',
    placePhone: '02-987-6543',
    placeAddress: {
      address: '서울특별시 종로구 123-56',
      latitude: 58.42432,
      longitude: 126.22346,
    },
    placeRating: 4.1,
    placeReviewCnt: 10,

    roomList: [
      {
        roomId: 10,
        roomName: '디럭스 룸',
        roomPrice: 80000,
        roomStatus: 'available',
      },
      {
        roomId: 20,
        roomName: '트윈 룸',
        roomPrice: 80000,
        roomStatus: 'unavailable',
      },
      {
        roomId: 30,
        roomName: '슈페리얼 룸',
        roomPrice: 100000,
        roomStatus: 'available',
      },
    ],
  },
];