import React, { useState } from "react";
import styles from "./odddoungselect.module.css";
import { useStateContext } from "../../context/StateContext";

function Odddoungselect({ donglist }) {
  const { dispatch } = useStateContext();
  const [select, setSelect] = useState();

  const handleClick = (e) => {
    const selectedDong = e.target.innerText;
    dispatch({ type: "SET_DONG_SELECTED", payload: selectedDong });
    setSelect(e.target.value);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.btnlist}>
        {donglist.map((item, index) => (
          <li className={styles.list} key={index}>
            <button
              className={index === select ? styles.active : styles.button}
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
