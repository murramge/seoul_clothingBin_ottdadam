import React from "react";

function Oddlist({ oddaddress }) {
  return oddaddress.map((item, index) => (
    <ul key={index}>
      <p>{item}</p>
    </ul>
  ));
}

export default Oddlist;
