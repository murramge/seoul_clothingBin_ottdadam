import React, { useEffect, useRef, useState } from "react";
import styles from "../map/oddmap.module.css";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Oddlist from "../list/oddlist";

const { kakao } = window;

function Oddmap({
  addressInfo,
  setSelectAddress,
  AddressInfo,
  odd_address,
  DongInfo,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState();
  const [markerselect, setMarkerSelect] = useState();
  let maplist = [];

  addressInfo.map((item) => {
    const mapPositions = {
      title: item.ODD_FULLNAME,
      latlng: { lat: item.ODD_Y, lng: item.ODD_X },
    };
    maplist.push(mapPositions);
  });

  const handleMarkerBtn = (e) => {
    console.log(e);
    setMarkerSelect((prev) => {
      return e;
    });
    setSelect((prev) => {
      return e.Gb;
    });
    setSelectAddress(e.Gb);
    setIsOpen(true);
  };

  console.log(markerselect);

  return (
    <>
      <div className={styles.layout}>
        <Oddlist
          oddaddress={odd_address}
          setSelectAddress={setSelectAddress}
          setIsOpen={setIsOpen}
          DongInfo={DongInfo}
          setSelect={setSelect}
          select={select}></Oddlist>
        <div className={styles.box}>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat:
                AddressInfo.length == 0
                  ? addressInfo[0].ODD_Y
                  : AddressInfo[0].ODD_Y,
              lng:
                AddressInfo.length == 0
                  ? addressInfo[0].ODD_X
                  : AddressInfo[0].ODD_X,
            }}
            style={{
              // 지도의 크기
              width: "auto",
              height: "100%",
            }}
            level={2} // 지도의 확대 레벨
          >
            {maplist.map((maplist, index) => (
              <MapMarker
                key={index}
                position={maplist.latlng} // 마커를 표시할 위치
                onClick={handleMarkerBtn}
                value={index}
                image={{
                  src: "clothafter.png",
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={maplist.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))}
            {isOpen && (
              <CustomOverlayMap
                position={{
                  lat: AddressInfo[0].ODD_Y,
                  lng: AddressInfo[0].ODD_X,
                }}
                xAnchor="0.5"
                yAnchor="1.2">
                <div className={styles.infobox}>
                  <div
                    className={styles.closebox}
                    onClick={() => setIsOpen(false)}>
                    ✕
                  </div>
                  <div className={styles.mainbox}>
                    <div className={styles.textwrap}>
                      {" "}
                      <p className={styles.oddTitle}>의류수거함</p>
                    </div>
                    <div className={styles.textbox}>
                      <p>
                        {AddressInfo[0].ODD_CITY}시{" "}
                        {AddressInfo[0].ODD_DISTRICT} {AddressInfo[0].ODD_DONG}
                      </p>
                      <p>{AddressInfo[0].ODD_FULLNAME}</p>
                    </div>
                  </div>
                  <div className={styles.buttonbox}>
                    <button
                      className={styles.button}
                      onClick={() =>
                        window.open(
                          `https://map.kakao.com/link/map/${AddressInfo[0].ODD_FULLNAME},${AddressInfo[0].ODD_Y},${AddressInfo[0].ODD_X}`
                        )
                      }>
                      {" "}
                      <img src="view.png" width="20" height="20" alt="testA" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() =>
                        window.open(
                          `https://map.kakao.com/link/to/${AddressInfo[0].ODD_FULLNAME},${AddressInfo[0].ODD_Y},${AddressInfo[0].ODD_X}`
                        )
                      }>
                      <img src="map.png" width="30" height="30" alt="testB" />
                    </button>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </Map>
        </div>
      </div>
    </>
  );
}

export default Oddmap;
