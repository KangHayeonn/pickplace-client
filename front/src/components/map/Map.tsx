import React from 'react';
import { useRef, useEffect } from 'react';
import { markerHtml } from './MarkerHtml';
import { markerList } from '../../utils/markerList';

type markerListType = {
  lat: number;
  lng: number;
  name: string;
  tag: string[];
};
type mapProps = {
  //   markerList: markerListType[];
};

const Map = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef = useRef<any | null>(null);
  const { naver } = window;

  const getMinLng = (markerList: markerListType[]) => {
    return Math.min(markerList[0].lng, markerList[1].lng, markerList[2].lng);
  };

  const getMaxLng = (markerList: markerListType[]) => {
    return Math.max(markerList[0].lng, markerList[1].lng, markerList[2].lng);
  };

  const getMinLat = (markerList: markerListType[]) => {
    return Math.min(markerList[0].lat, markerList[1].lat, markerList[2].lat);
  };

  const getMaxLat = (markerList: markerListType[]) => {
    return Math.max(markerList[0].lat, markerList[1].lat, markerList[2].lat);
  };

  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      zoomControl: true,
      scaleControl: true,
      bounds: new naver.maps.PointBounds(
        new naver.maps.Point(getMinLng(markerList), getMinLat(markerList)),
        new naver.maps.Point(getMaxLng(markerList), getMaxLat(markerList)),
      ),
    });

    markerList?.map((item: markerListType) => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(item?.lat, item?.lng),
        map: mapRef.current,
        icon: {
          content: [markerHtml(item.name, item.tag)].join(''),
          anchor: new naver.maps.Point(19, 58),
        },
      });
    });
  }, [mapRef]);

  return (
    <div id="map" ref={mapRef} style={{ width: '100%', height: '600px' }}></div>
  );
};

export default Map;
