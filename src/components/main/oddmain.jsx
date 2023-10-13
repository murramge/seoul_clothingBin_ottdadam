import React, { useEffect, useState } from "react";
import Oddguselect from "../select/oddguselect";
import Odddoungselect from "../select/odddoungselect";
import api from "../../API/api";
import styles from "./oddmain.module.css";
import KaKao from "../list/oddmap";

function Oddmain() {
  const selectList = [
    "구로구",
    "마포구",
    "광진구",
    "동작구",
    "영등포구",
    "양천구",
    "종로구",
    "관악구",
  ];
  const [selected, setSelected] = useState(selectList[0]);
  const handleGuChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  const [odddong, setOdddong] = useState([]);
  const [clickdong, setClickdong] = useState("구로2동");

  // useEffect(() => {
  //   async function dongresult() {
  //     let data = await api.search(selected);
  //     let dd = data.data.locList.filter(
  //       (value, index, self) =>
  //         index === self.findIndex((e) => value.ODD_DONG === e.ODD_DONG)
  //     );
  //     let dgd = dd.map((item, value) => item.ODD_DONG);
  //     setOdddong(dgd);
  //   }
  //   dongresult();
  // }, [selected]);

  // const [datas, setDatas] = useState([]);

  // // useEffect(() => {
  // //   async function addresult() {
  // //     let data = await api.dong(clickdong);
  // //     let r = data.data.locList;

  // //     setDatas(r);
  // //   }
  // //   addresult();
  // // }, [clickdong]);

  const handleaddress = (e) => {
    let btns = document.querySelectorAll(".button");
    btns.forEach((btn, i) => {
      if (e.currentTarget == btn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    setClickdong(e.target.innerText);
  };

  return (
    <div>
      <div className={styles.textwrap}>
        <p>서울특별시 의류수거함 위치정보</p>
        <p>OTTDADAM</p>
      </div>
      <div>
        <Oddguselect
          handleGuChangeSelect={handleGuChangeSelect}
          selectList={selectList}
          selected={selected}
        />
      </div>
      <div>
        <Odddoungselect handleaddress={handleaddress} odddong={odddong} />
      </div>
    </div>
  );
}

export default Oddmain;
