import React, { useEffect, useState } from "react";
import "../../css/home.css";
import Msrc from "./Mainscreen/Msrc";
export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <div className="Main_home" style={{ width: width, height: height }}>
      <Msrc />
    </div>
  );
}
