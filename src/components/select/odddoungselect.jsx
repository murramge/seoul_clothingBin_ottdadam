import React, { useEffect, useState } from "react";
import styles from "./odddoungselect.module.css";

function Odddoungselect({ donglist, setDongSelected }) {
  return (
    <div className={styles.bg}>
      <div className={styles.btnlist}>
        {donglist.map((item, index) => (
          <li className={styles.list} key={index}>
            <button
              className={styles.button}
              onClick={(e) => setDongSelected(e.target.innerText)}>
              {item}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Odddoungselect;
