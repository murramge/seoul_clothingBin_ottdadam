import React, { useEffect, useState } from "react";
import styles from "../list/oddlist.module.css";

function Oddlist({
  oddaddress,
  setSelectAddress,
  setIsOpen,
  DongInfo,
  setSelect,
  select,
}) {
  const handleButton = (e) => {
    setSelect((prev) => {
      return e.target.value;
    });
    setSelectAddress(e.target.innerText);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.textbox}>
          <p className={styles.text}>{DongInfo[0].ODD_DONG} 의류수거함</p>
        </div>
        <div className={styles.listbox}>
          {oddaddress.map((item, index) => (
            <div key={index} className={styles.listbox2}>
              <ul className={styles.list} key={index}>
                <button
                  value={index}
                  className={index == select ? styles.active : styles.button}
                  onClick={handleButton}>
                  {item}
                </button>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Oddlist;
