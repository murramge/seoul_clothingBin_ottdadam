import React, { useEffect, useState } from "react";
import api from "../../API/api";
import KaKao from "./oddmap";

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
      const dd = r.map((item, value) => item.ODD_X);
      const df = r.map((item, value) => item.ODD_Y);

      setarran({ x: dd, y: df });
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
      <div>
        <KaKao arran={arran} />
      </div>
    </div>
  );
}

export default Oddaddress;
