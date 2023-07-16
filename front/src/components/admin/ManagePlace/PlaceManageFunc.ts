import { placeProps, newRoomProps } from '../types';

export const confirmToPost = (placeInfo: placeProps) => {
  if (placeInfo.placeName == '') {
    window.alert('공간 이름을 입력해주세요');
  } else if (placeInfo.phone == '') {
    window.alert('연락처를 입력해주세요');
  } else if (placeInfo.address == '') {
    window.alert('주소를 입력해주세요');
  } else return true;
  return false;
};

export const confirmToAddRoom = (newRoomInfo: newRoomProps) => {
  if (newRoomInfo.roomName == '') window.alert('방 이름을 입력해주세요');
  else if (newRoomInfo.roomPrice == '') window.alert('방 가격을 입력해주세요');
  else if (newRoomInfo.roomPersonnel == '')
    window.alert('방 인원을 입력해주세요');
  else if (newRoomInfo.roomCount == '') window.alert('방 개수를 입력해주세요');
  else if (isNaN(parseInt(newRoomInfo.roomPrice))) {
    window.alert('방 가격을 숫자로 입력해주세요');
  } else if (isNaN(parseInt(newRoomInfo.roomPersonnel))) {
    window.alert('방 인원을 숫자로 입력해주세요');
  } else if (isNaN(parseInt(newRoomInfo.roomCount))) {
    window.alert('방 개수를 숫자로 입력해주세요');
  } else return true;
  return false;
};
