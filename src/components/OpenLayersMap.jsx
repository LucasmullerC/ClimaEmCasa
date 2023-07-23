import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import '../css/Map.css'
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';

const OpenLayersMap = () => {
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
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
    />
  );
};

export default OpenLayersMap;
