import React, { useEffect, useRef } from "react";

const { kakao } = window;

function Oddmap({ addressInfo }) {
  const centerX = addressInfo[0].ODD_X;
  const centerY = addressInfo[0].ODD_Y;

  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;

    const options = {
      center: new kakao.maps.LatLng(centerY, centerX),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, [addressInfo]);

  return (
    <>
      <div ref={mapRef} style={{ width: 700, height: "auto" }}></div>
    </>
  );
}

export default Oddmap;
