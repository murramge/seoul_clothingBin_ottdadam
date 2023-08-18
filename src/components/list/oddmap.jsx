import React, { useEffect, useState } from "react";
const { kakao } = window;

function KaKao({ arran }) {
  const [ader, setAder] = useState([{ x: [], y: [] }]);
  const [l, setL] = useState([]);
  const a = arran.x;
  const c = arran.y;
  const b = Array.from(a).map((item) => parseFloat(item));
  const d = Array.from(c).map((item) => parseFloat(item));

  useEffect(() => {
    setAder([{ x: b, y: d }]);
  }, [a]);

  const positions = ader.map((item) => item);

  const p = [];
  useEffect(() => {
    for (let i = 0; i < b.length; i++) {
      const latlng = new kakao.maps.LatLng(
        parseFloat(positions[0].y[i]),
        parseFloat(positions[0].x[i])
      );
      p.push({ ...latlng });
    }
    setL(p);
  }, [a]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.4895985406094, 126.832408881422),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    for (let i = 0; i < b.length; i++) {
      const latlng = new kakao.maps.LatLng(
        parseFloat(positions[0].y[i]),
        parseFloat(positions[0].x[i])
      );
      p.push({ ...latlng });
    }
    console.log(p);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}

export default KaKao;
