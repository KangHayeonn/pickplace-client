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
  width: string;
  height: string;
  //   markerList: markerListType[];
};

const Map = ({ width, height }: mapProps) => {
  const { naver } = window;

  const getMinLng = (markerList: markerListType[]) => {
    return Math.min.apply(
      null,
      markerList.map((item) => item.lng),
    );
  };

  const getMaxLng = (markerList: markerListType[]) => {
    return Math.max.apply(
      null,
      markerList.map((item) => item.lng),
    );
  };

  const getMinLat = (markerList: markerListType[]) => {
    return Math.min.apply(
      null,
      markerList.map((item) => item.lat),
    );
  };

  const getMaxLat = (markerList: markerListType[]) => {
    return Math.max.apply(
      null,
      markerList.map((item) => item.lat),
    );
  };

  useEffect(() => {
    const markers: naver.maps.Marker[] = [];

    const map = new naver.maps.Map('map', {
      zoomControl: true,
      scaleControl: true,
      bounds: new naver.maps.PointBounds(
        new naver.maps.Point(getMinLng(markerList), getMinLat(markerList)),
        new naver.maps.Point(getMaxLng(markerList), getMaxLat(markerList)),
      ),
    });

    for (let i = 0; i < markerList.length; i++) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(markerList[i].lat, markerList[i].lng),
        map,
        icon: {
          content: [markerHtml(markerList[i].name, markerList[i].tag)].join(''),
        },
      });
      markers.push(marker);
    }

    const getClickHandler = (seq: number) => {
      return () => {
        // navigate(`/detail?id={markerList[seq].id}`)
      };
    };

    for (let i = 0; i < markers.length; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }
  }, []);

  return <div id="map" style={{ width: width, height: height }}></div>;
};

export default Map;
