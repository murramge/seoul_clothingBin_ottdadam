import React from "react";

function Oddlist({ oddaddress, setSelectAddress, setIsOpen }) {
  const handleButton = (e) => {
    setSelectAddress(e.target.innerText);
    setIsOpen(true);
  };

  return oddaddress.map((item, index) => (
    <ul key={index}>
      <button onClick={handleButton}>{item}</button>
    </ul>
  ));
}

export default Oddlist;
