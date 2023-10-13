import React, { useEffect, useState, useRef } from "react";
import api from "../../API/api";
import styles from "./oddmap.module.css";

const { kakao } = window;

function KaKao({ clickdong }) {
  const [datas, setDatas] = useState([]);
  const [maps, setmaps] = useState();

  let selectedMarker = null;

  useEffect(() => {
    async function addresult() {
      let data = await api.dong(clickdong);
      let r = data.data.locList;

      setDatas(r);
    }
    addresult();
  }, [clickdong]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.4978136243083, 126.846725218798),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    setmaps(map);

    // const markerPosition = new kakao.maps.LatLng(location.y, location.x);
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);

    let markers = [];
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    displayPlaces(datas);

    function displayPlaces(places) {
      console.log(places);
      let listEl = document.getElementById("placesList"),
        menuEl = document.getElementById("menu_wrap"),
        fragment = document.createDocumentFragment(),
        listStr = "";

      removeAllChildNods(listEl);
      removeMarker();

      for (let i = 0; i < places.length; i++) {
        let placePosition = new kakao.maps.LatLng(
            places[i].ODD_Y,
            places[i].ODD_X
          ),
          marker = addMarker(placePosition, i),
          itemEl = getListItem(i, places[i]);

        (function (marker, title) {
          selectedMarker = marker;
          kakao.maps.event.addListener(marker, "mouseover", function () {
            if (!selectedMarker || selectedMarker !== marker) {
              displayInfoWindow(marker, title);
            }
          });

          kakao.maps.event.addListener(marker, "mouseout", function () {
            if (!selectedMarker || selectedMarker !== marker) {
              infowindow.close();
            }
          });

          kakao.maps.event.addListener(marker, "click", function () {
            if (!selectedMarker || selectedMarker !== marker) {
              !!selectedMarker && infowindow.close();

              displayInfoWindow(marker, title);
            }
          });

          itemEl.onmouseover = function () {
            if (!selectedMarker || selectedMarker !== marker) {
              displayInfoWindow(marker, title);
            }
          };
          itemEl.onmouseout = function () {
            if (!selectedMarker || selectedMarker !== marker) {
              infowindow.close();
            }
          };
          itemEl.onclick = function () {
            if (!selectedMarker || selectedMarker !== marker) {
              !!selectedMarker && infowindow.close();

              displayInfoWindow(marker, title);
            }
          };
          selectedMarker = marker;
        })(marker, places[i].ODD_FULLNAME);
        fragment.appendChild(itemEl);
      }
      listEl.appendChild(fragment);
      menuEl.scrollTop = 0;
    }

    function getListItem(index, places) {
      let el = document.createElement("li"),
        itemStr =
          "<div className='listbox'> <button style='background-color: inherit; 	border-style: none;' className='lists'><div class='list'>" +
          places.ODD_FULLNAME +
          "</div></div></div>";

      el.style = "margin-bottom:5px; margin-top:5px";
      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    }

    function addMarker(position, idx, title) {
      let marker = new kakao.maps.Marker({
        position: position,
      });

      marker.setMap(map);
      markers.push(marker);

      return marker;
    }

    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function displayInfoWindow(marker, title) {
      let content = "<div class='info'>" + title + "</div>";
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    function removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    }
  }, [datas]);

  return (
    <>
      <div className="absolute z-[100] mt-10">
        <div id="menu_wrap" className={styles.wrap}>
          <ul id="placesList" className={styles.list}></ul>
        </div>
      </div>
      <div id="map" className={styles.map}></div>
    </>
  );
}

export default KaKao;
