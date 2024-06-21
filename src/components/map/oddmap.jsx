import React, { useState } from "react";
import styles from "../map/oddmap.module.css";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Oddlist from "../list/oddlist";
import { useStateContext } from "../../context/StateContext";

const { kakao } = window;

function Oddmap({ addressInfo, setSelectAddress, odd_address, DongInfo }) {
  const { state } = useStateContext();
  const { selectAddress } = state;

  const AddressInfo = addressInfo.filter(
    (item) => item.ODD_FULLNAME === selectAddress
  );

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

  return (
    <div className={styles.layout}>
      <Oddlist
        oddaddress={odd_address}
        setSelectAddress={setSelectAddress}
        setIsOpen={setIsOpen}
        DongInfo={DongInfo}
        setSelect={setSelect}
        select={select}
      />
      <div className={styles.box}>
        <Map
          center={{
            lat:
              AddressInfo.length === 0
                ? addressInfo[0].ODD_Y
                : AddressInfo[0].ODD_Y,
            lng:
              AddressInfo.length === 0
                ? addressInfo[0].ODD_X
                : AddressInfo[0].ODD_X,
          }}
          style={{
            width: "auto",
            height: "100%",
          }}
          level={2}>
          {maplist.map((maplist, index) => (
            <MapMarker
              key={index}
              position={maplist.latlng}
              onClick={handleMarkerBtn}
              value={index}
              image={{
                src: "clothafter.png",
                size: {
                  width: 24,
                  height: 35,
                },
              }}
              title={maplist.title}
            />
          ))}
          {isOpen && AddressInfo.length > 0 && (
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
                    <p className={styles.oddTitle}>의류수거함</p>
                  </div>
                  <div className={styles.textbox}>
                    <p>
                      {AddressInfo[0].ODD_CITY}시 {AddressInfo[0].ODD_DISTRICT}{" "}
                      {AddressInfo[0].ODD_DONG}
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
  );
}

export default Oddmap;
