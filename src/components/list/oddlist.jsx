import React, { useEffect, useState } from "react";
import styles from "../list/oddlist.module.css";

function Oddlist({ oddaddress, setSelectAddress, setIsOpen, DongInfo }) {
  const [select, setSelect] = useState();
  const handleButton = (e) => {
    setSelect((prev) => {
      return e.target.value;
    });
    setSelectAddress(e.target.innerText);
    setIsOpen(true);
  };

  console.log(DongInfo);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.textbox}>
          <p className={styles.text}>{DongInfo[0].ODD_DONG} 의류수거함</p>
        </div>
        <div className={styles.listbox}>
          {oddaddress.map((item, index) => (
            <ul className={styles.list} key={index}>
              <button
                value={index}
                className={index == select ? styles.active : styles.button}
                onClick={handleButton}>
                {item}
              </button>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Oddlist;
