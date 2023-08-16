import React from "react";
import oddlocations from "./oddlocation.json";
import api from "../../API/api";
import axios from "axios";

function Odddoungselect({ oddcity }) {
  const dong = ["공덕동", "아현동", "도화동", "대흥동", "염리동"];

  let data = JSON.stringify({
    district: oddcity,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://192.168.0.179:8080/odds/search",
    headers: {
      "X-Api-Key": "<API Key>",
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
  });
  return (
    <div>
      <div>
        {dong.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default Odddoungselect;
