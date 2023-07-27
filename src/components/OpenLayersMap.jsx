import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import '../css/Map.css'
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';

const OpenLayersMap = ({ center }) => {
  const mapRef = useRef(null);


  useEffect(() => {
    if (!mapRef.current) return;

    // Create the map
    const map = new Map({
      target: mapRef.current,
      controls: defaultControls({ zoom: false }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(center),
        zoom: 10,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, [center]);

  return (
    <div
      ref={mapRef}
      id="map"
    />
  );
};

export default OpenLayersMap;
