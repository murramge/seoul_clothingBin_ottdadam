import React, { useState } from "react";
import Oddguselect from "../select/oddguselect";
import Odddoungselect from "../select/odddoungselect";
import Oddaddress from "../list/oddaddress";

function Oddmain() {
  const [oddcity, setOddcity] = useState("구로구");
  const [odddong, setOddDong] = useState("오류2동");
  const [oddaddress, setOddAddress] = useState();

  return (
    <div>
      <div>
        <p>서울특별시 의류수거함 위치정보</p>
        <p>OTTDADAM</p>
        <hr></hr>
      </div>
      <div>
        <Oddguselect oddcity={setOddcity} />
      </div>
      <div>
        <Odddoungselect oddcity={oddcity} odddong={setOddDong} />
      </div>
      <div>
        <Oddaddress odddong={odddong} />
      </div>
    </div>
  );
}

export default Oddmain;
