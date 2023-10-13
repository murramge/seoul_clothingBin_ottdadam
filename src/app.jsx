import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Oddguselect from "./components/select/oddguselect";
import json2 from "./oddlocation.json";
import Odddoungselect from "./components/select/odddoungselect";
import apis from "./API/api.js";
import Oddmap from "./components/map/oddmap";

function App({}) {
  const json = json2.ODD_LOCATION;
  const odd_district = json.map((item) => item.ODD_DISTRICT);
  const set = new Set(odd_district);
  const unique_district = [...set];
  const [GuSelected, setGuSelected] = useState(unique_district[0]);
  const [selectAddress, setSelectAddress] = useState("");

  const AddressInfo = json.filter((item) => {
    return item.ODD_FULLNAME == selectAddress;
  });

  const GuInfo = json.filter((item) => {
    return item.ODD_DISTRICT == GuSelected;
  });

  // (async function () {
  //   const result = await apis.search(GuSelected);
  // })();

  useEffect(() => {
    setDongSelected(unique_dong[0]);
  }, [GuSelected]);

  const odd_dong = GuInfo.map((item) => item.ODD_DONG);
  const dongset = new Set(odd_dong);
  const unique_dong = [...dongset];

  const [DongSelected, setDongSelected] = useState(unique_dong[0]);

  const DongInfo = json.filter((item) => {
    return item.ODD_DONG == DongSelected;
  });
  const odd_address = DongInfo.map((item) => item.ODD_FULLNAME);

  console.log(AddressInfo);

  return (
    <>
      <div>
        <div className={styles.textwrap}>
          <p>서울특별시 의류수거함 위치정보</p>
          <p className={styles.oddTitle}>OTTDADAM</p>
        </div>
        <Oddguselect
          selectList={unique_district}
          setGuSelected={setGuSelected}></Oddguselect>
        <Odddoungselect
          donglist={unique_dong}
          setDongSelected={setDongSelected}></Odddoungselect>
        <div className={styles.layout}>
          <Oddmap
            addressInfo={DongInfo}
            setSelectAddress={setSelectAddress}
            AddressInfo={AddressInfo}
            odd_address={odd_address}
            DongInfo={DongInfo}></Oddmap>
        </div>
      </div>
    </>
  );
}

export default App;
