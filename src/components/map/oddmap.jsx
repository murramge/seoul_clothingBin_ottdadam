import React, { useEffect, useRef, useState } from "react";
import styles from "../map/oddmap.module.css";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Oddlist from "../list/oddlist";

const { kakao } = window;

function Oddmap({ addressInfo, setSelectAddress, AddressInfo, odd_address }) {
  const [isOpen, setIsOpen] = useState(false);

  let maplist = [];

  addressInfo.map((item) => {
    const mapPositions = {
      title: item.ODD_FULLNAME,
      latlng: { lat: item.ODD_Y, lng: item.ODD_X },
    };
    maplist.push(mapPositions);
  });

  const handleMarkerBtn = (e) => {
    setSelectAddress(e.Gb);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.layout}>
        <div>
          <Oddlist
            oddaddress={odd_address}
            setSelectAddress={setSelectAddress}
            setIsOpen={setIsOpen}></Oddlist>
        </div>

        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: addressInfo[0].ODD_Y,
            lng: addressInfo[0].ODD_X,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={3} // 지도의 확대 레벨
        >
          {maplist.map((maplist, index) => (
            <MapMarker
              key={index}
              position={maplist.latlng} // 마커를 표시할 위치
              onClick={handleMarkerBtn}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
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
              yAnchor="1.4">
              <div className={styles.infobox}>
                <div onClick={() => setIsOpen(false)}>X</div>
                <p> {AddressInfo[0].ODD_FULLNAME}</p>
                <button
                  onClick={() =>
                    window.open(
                      `https://map.kakao.com/link/map/${AddressInfo[0].ODD_FULLNAME},${AddressInfo[0].ODD_Y},${AddressInfo[0].ODD_X}`
                    )
                  }>
                  큰화면보기
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://map.kakao.com/link/to/${AddressInfo[0].ODD_FULLNAME},${AddressInfo[0].ODD_Y},${AddressInfo[0].ODD_X}`
                    )
                  }>
                  길찾기
                </button>
              </div>
            </CustomOverlayMap>
          )}
        </Map>
      </div>
    </>
  );
}

export default Oddmap;
