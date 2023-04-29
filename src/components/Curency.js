import React from "react";
import { useState } from "react";
function Curency() {
  const [data, setData] = useState();
  fetch(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=27bdb1fe4071f56de731760787b2d82f"
  )
    .then((res) => res.json())
    .then((json) => setData());
  return <></>;
}
export default Curency;
