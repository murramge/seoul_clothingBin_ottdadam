import React, { useEffect, useState } from "react";

import api from "../../API/api";

function Odddoungselect({ oddcity, odddong }) {
  const [dong, setDong] = useState([]);
  const [clickdong, setClickdong] = useState("오류2동");
  useEffect(() => {
    console.log(oddcity);
    async function dongresult() {
      let data = await api.search(oddcity);
      let dd = data.data.locList.filter(
        (value, index, self) =>
          index === self.findIndex((e) => value.ODD_DONG == e.ODD_DONG)
      );
      const dgd = dd.map((item, value) => item.ODD_DONG);
      setDong(dgd);
    }
    dongresult();
  }, [oddcity]);

  const handleaddress = (e) => {
    setClickdong(e.target.innerText);
  };
  useEffect(() => {
    odddong(clickdong);
  });

  return (
    <div>
      <div>
        {dong.map((item, index) => (
          <li key={index}>
            <button onClick={handleaddress}>{item}</button>
          </li>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default Odddoungselect;
