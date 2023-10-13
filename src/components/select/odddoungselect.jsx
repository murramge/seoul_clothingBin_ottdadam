import React, { useEffect, useState } from "react";
import styles from "./odddoungselect.module.css";

function Odddoungselect({ donglist, setDongSelected }) {
  const [select, setSelect] = useState();

  const handleClick = (e) => {
    setDongSelected(e.target.innerText);
    setSelect((prev) => {
      return e.target.value;
    });
  };
  return (
    <div className={styles.bg}>
      <div className={styles.btnlist}>
        {donglist.map((item, index) => (
          <li className={styles.list} key={index}>
            <button
              className={index == select ? styles.active : styles.button}
              value={index}
              onClick={handleClick}>
              {item}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Odddoungselect;
