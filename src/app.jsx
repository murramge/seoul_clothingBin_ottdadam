import React, { useEffect } from "react";
import styles from "./app.module.css";
import Oddguselect from "./components/select/oddguselect";
import json2 from "./oddlocation.json";
import Odddoungselect from "./components/select/odddoungselect";
import Oddmap from "./components/map/oddmap";
import { useStateContext } from "./context/StateContext";

function App() {
  const json = json2.ODD_LOCATION;
  const odd_district = json.map((item) => item.ODD_DISTRICT);
  const set = new Set(odd_district);
  const unique_district = [...set];

  const { state, dispatch } = useStateContext();
  const { GuSelected, DongSelected, selectAddress } = state;

  useEffect(() => {
    if (unique_district.length > 0) {
      dispatch({ type: "SET_GU_SELECTED", payload: unique_district[0] });
    }
  }, []);

  useEffect(() => {
    if (GuSelected) {
      const GuInfo = json.filter((item) => item.ODD_DISTRICT === GuSelected);
      const odd_dong = GuInfo.map((item) => item.ODD_DONG);
      const dongset = new Set(odd_dong);
      const unique_dong = [...dongset];
      if (unique_dong.length > 0) {
        dispatch({ type: "SET_DONG_SELECTED", payload: unique_dong[0] });
      }
    }
  }, [GuSelected]);

  const AddressInfo = json.filter((item) => {
    return item.ODD_FULLNAME === selectAddress;
  });

  const GuInfo = json.filter((item) => {
    return item.ODD_DISTRICT === GuSelected;
  });

  const odd_dong = GuInfo.map((item) => item.ODD_DONG);
  const dongset = new Set(odd_dong);
  const unique_dong = [...dongset];

  const DongInfo = json.filter((item) => {
    return item.ODD_DONG === DongSelected;
  });
  const odd_address = DongInfo.map((item) => item.ODD_FULLNAME);

  return (
    <div>
      <div className={styles.textwrap}>
        <p>서울특별시 의류수거함 위치정보</p>
        <p className={styles.oddTitle}>OTTDADAM</p>
      </div>
      <Oddguselect
        selectList={unique_district}
        setGuSelected={(value) =>
          dispatch({ type: "SET_GU_SELECTED", payload: value })
        }
      />
      <Odddoungselect
        donglist={unique_dong}
        setDongSelected={(value) =>
          dispatch({ type: "SET_DONG_SELECTED", payload: value })
        }
      />
      <div className={styles.layout}>
        <Oddmap
          addressInfo={DongInfo}
          setSelectAddress={(value) =>
            dispatch({ type: "SET_SELECT_ADDRESS", payload: value })
          }
          AddressInfo={AddressInfo}
          odd_address={odd_address}
          DongInfo={DongInfo}
        />
      </div>
    </div>
  );
}

export default App;
