import { placeProps, newRoomProps } from '../types';
import { isShowError } from '../../../components/common/ToastBox';
export const confirmToPost = (placeInfo: placeProps) => {
  if (placeInfo.placeName == '') {
    isShowError('공간 이름을 입력해주세요');
  } else if (placeInfo.placePhone == '') {
    isShowError('연락처를 입력해주세요');
  } else if (placeInfo.placeAddress == '') {
    isShowError('주소를 입력해주세요');
  } else return true;
  return false;
};

export const confirmToAddRoom = (newRoomInfo: newRoomProps) => {
  if (newRoomInfo.roomName == '') isShowError('방 이름을 입력해주세요');
  else if (newRoomInfo.roomPrice == '') isShowError('방 가격을 입력해주세요');
  else if (newRoomInfo.roomMaxNum == '') isShowError('방 인원을 입력해주세요');
  else if (newRoomInfo.roomAmount == '') isShowError('방 개수를 입력해주세요');
  else if (isNaN(parseInt(newRoomInfo.roomPrice))) {
    isShowError('방 가격을 숫자로 입력해주세요');
  } else if (isNaN(parseInt(newRoomInfo.roomMaxNum))) {
    isShowError('방 인원을 숫자로 입력해주세요');
  } else if (isNaN(parseInt(newRoomInfo.roomAmount))) {
    isShowError('방 개수를 숫자로 입력해주세요');
  } else return true;
  return false;
};
