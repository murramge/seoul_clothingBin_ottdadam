import React from "react";
import styles from "./oddguselect.module.css";

function Oddguselect({ selectList, setGuSelected }) {
  const handleGuSelect = (e) => {
    setGuSelected(e.target.value);
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
