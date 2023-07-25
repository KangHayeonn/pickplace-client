import React, { useEffect } from 'react';
import { markerHtml } from './MarkerHtml';
import { markerListType } from './types';
import { useNavigate } from 'react-router-dom';

type mapProps = {
  width: string;
  height: string;
  markerList: markerListType[];
};

const Map = ({ width, height, markerList }: mapProps) => {
  const { naver } = window;
  const navigate = useNavigate();

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
        new naver.maps.Point(getMinLat(markerList), getMinLng(markerList)),
        new naver.maps.Point(getMaxLat(markerList), getMaxLng(markerList)),
      ),
    });
    for (let i = 0; i < markerList.length; i++) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(markerList[i].lng, markerList[i].lat),
        map,
        icon: {
          content: [
            markerHtml(
              markerList[i].name,
              markerList[i].category,
              markerList[i].tag,
            ),
          ].join(''),
        },
      });
      markers.push(marker);
    }

    const getClickHandler = (seq: number) => {
      return () => {
        navigate(`/search/:${markerList[seq].id}/detail`);
      };
    };

    for (let i = 0; i < markers.length; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }
  }, []);
  return <div id="map" style={{ width: width, height: height }} />;
};

export default Map;
