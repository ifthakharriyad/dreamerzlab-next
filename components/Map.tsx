import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Map, { Marker, Source, Layer, NavigationControl } from "react-map-gl";
import { dataLayer } from "./MapStyle";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY; // Set your mapbox token here

export default function HeroMap() {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    /* global fetch */
    fetch(
      "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson"
    )
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, []);

  const data = useMemo(() => {
    return allData;
  }, [allData]);

  return (
    <div style={{ marginBottom: "1.9rem" }}>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 3,
        }}
        style={{ height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={["data"]}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
        <Marker longitude={-122.4} latitude={37.8} color="red" />
        <NavigationControl />
      </Map>
    </div>
  );
}
