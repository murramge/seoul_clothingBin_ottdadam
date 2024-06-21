import React from "react";
import styles from "./oddguselect.module.css";
import { useStateContext } from "../../context/StateContext";

function Oddguselect({ selectList }) {
  const { dispatch } = useStateContext();

  const handleGuSelect = (e) => {
    dispatch({ type: "SET_GU_SELECTED", payload: e.target.value });
  };

  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <div className={styles.wrap}>
          <select className={styles.select} onChange={handleGuSelect}>
            {selectList.map((item, index) => (
              <option className={styles.text} value={item} key={index}>
                {item} 의류수거함 배치 현황
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Oddguselect;
