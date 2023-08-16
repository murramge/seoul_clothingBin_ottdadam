import React, { useState } from "react";
import api from "../../API/api";

function Oddguselect({ oddcity }) {
  const selectList = ["구로구", "마포구", "광진구", "동작구"];
  const [selected, setSelected] = useState("구로구");

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
