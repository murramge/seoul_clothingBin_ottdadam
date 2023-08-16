import React, { useState } from "react";
import Oddguselect from "../select/oddguselect";
import Odddoungselect from "../select/odddoungselect";

function Oddmain({ handlecontent }) {
  const [oddcity, setOddcity] = useState();

  return (
    <div>
      <div>
        <p>서울특별시 의류수거함 위치정보</p>
        <p>OTTDADAM</p>
        <hr></hr>
      </div>
      <div>
        <Oddguselect oddcity={setOddcity} handlecontent={handlecontent} />
      </div>
      <div>
        <Odddoungselect oddcity={oddcity} />
      </div>
    </div>
  );
}

export default Oddmain;
