import React, { useState } from "react";
import api from "../../API/api";

function Oddguselect({ oddcity, handlecontent }) {
  const selectList = ["구로구", "구로구", "구로구", "구로구"];
  const [selected, setSelected] = useState("");

  const handleGuChangeSelect = (e) => {
    setSelected(e.target.value);
    oddcity(e.target.value);
  };
  return (
    <div>
      <div>
        <select onChange={handleGuChangeSelect} value={selected}>
          {selectList.map((item, index) => (
            <option value={item} key={index}>
              {item} 의류수거함 배치 현황
            </option>
          ))}
        </select>
      </div>
      <hr></hr>
    </div>
  );
}

export default Oddguselect;
