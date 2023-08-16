import React, { useEffect, useState } from "react";
import api from "../../API/api";

function Oddaddress({ odddong }) {
  const [fullname, setFullname] = useState([]);
  const [arran, setarran] = useState({ x: "", y: "" });

  useEffect(() => {
    console.log(odddong);
    async function addresult() {
      let data = await api.dong(odddong);

      let r = data.data.locList;
      const gd = r.map((item, value) => item.ODD_FULLNAME);
      setFullname(gd);
    }
    addresult();
  }, [odddong]);

  return (
    <div>
      <div>
        {fullname.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default Oddaddress;
