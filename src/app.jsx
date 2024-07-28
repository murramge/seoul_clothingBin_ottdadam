import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Oddguselect from "./components/select/oddguselect";
import Odddoungselect from "./components/select/odddoungselect";
import Oddmap from "./components/map/oddmap";
import { useStateContext } from "./context/StateContext";
import { Search } from "./API/api.js";
import { useQuery } from "react-query";

function App() {
  const [district, setDistrict] = useState([]);
  const [addressInfo, setAddressInfo] = useState([]);
  const [uniqueDong, setUniqueDong] = useState([]);
  const [oddAddress, setOddAddress] = useState([]);
  const [dongInfo, setDongInfo] = useState([]);

  const { state, dispatch } = useStateContext();
  const { location, GuSelected, DongSelected, selectAddress } = state;

  const { data, isLoading, error } = useQuery(
    "locationData",
    () => Search("서울"),
    {
      refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터를 다시 불러오지 않음
    }
  );

  useEffect(() => {
    if (data) {
      dispatch({ type: "LOCATION", payload: data.locList });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (location.length > 0) {
      let oddDistricts = Array.from(
        new Set(location.map((item) => item.ODD_DISTRICT))
      );
      oddDistricts = oddDistricts.filter((item) => item.trim() !== "");
      setDistrict(oddDistricts);

      if (oddDistricts.length > 0) {
        dispatch({ type: "SET_GU_SELECTED", payload: oddDistricts[0] });
      }
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (GuSelected) {
      const guInfo = location.filter(
        (item) => item.ODD_DISTRICT === GuSelected
      );
      let oddDongs = Array.from(
        new Set(guInfo.map((item) => item.ODD_DONG))
      ).filter((item) => item.trim() !== "");
      setUniqueDong(oddDongs);

      if (oddDongs.length > 0) {
        dispatch({ type: "SET_DONG_SELECTED", payload: oddDongs[0] });
      }
    }
  }, [GuSelected, location, dispatch]);

  useEffect(() => {
    if (selectAddress) {
      const addressInfo = location.filter(
        (item) => item.ODD_FULLNAME === selectAddress
      );
      setAddressInfo(addressInfo);
    }

    if (GuSelected) {
      const guInfo = location.filter(
        (item) => item.ODD_DISTRICT === GuSelected
      );
      const oddDongs = Array.from(new Set(guInfo.map((item) => item.ODD_DONG)));
      setUniqueDong(oddDongs);
    }

    if (DongSelected) {
      const dongInfo = location.filter(
        (item) => item.ODD_DONG === DongSelected
      );

      setDongInfo(dongInfo);
      const oddAddress = dongInfo.map((item) => item.ODD_FULLNAME);
      setOddAddress(oddAddress);
    }
  }, [selectAddress, GuSelected, DongSelected, location]);

  return (
    <div>
      <div className={styles.textwrap}>
        <p>서울특별시 의류수거함 위치정보</p>
        <p className={styles.oddTitle}>OTTDADAM</p>
      </div>

      {district.length > 0 && (
        <Oddguselect
          selectList={district}
          setGuSelected={(value) =>
            dispatch({ type: "SET_GU_SELECTED", payload: value })
          }
        />
      )}

      {uniqueDong.length > 0 && (
        <Odddoungselect
          donglist={uniqueDong}
          setDongSelected={(value) =>
            dispatch({ type: "SET_DONG_SELECTED", payload: value })
          }
        />
      )}

      <div className={styles.layout}>
        {dongInfo && addressInfo && oddAddress.length > 0 && (
          <Oddmap
            addressInfo={dongInfo}
            setSelectAddress={(value) =>
              dispatch({ type: "SET_SELECT_ADDRESS", payload: value })
            }
            AddressInfo={addressInfo}
            odd_address={oddAddress}
            DongInfo={dongInfo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
