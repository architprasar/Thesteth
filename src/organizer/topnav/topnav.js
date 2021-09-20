import React, { useEffect, useState } from "react";
import "../../css/topnav.css";
// function useHair() {
//   const [hairs, useHairs] = useState("cap");

//   function setHair(gender) {
//     if (gender == "male") {
//       useHairs("cap");
//     } else if (gender == "female") {
//       useHairs("long");
//     } else {
//       useHairs("curlyBun");
//     }
//   }
//   return { hairs, setHair };
// }
function Topnav() {
  const [name, setName] = useState("archit");
  const [gender, setGender] = useState("male");
  useEffect(() => {
    
    

  }, []);

  // hair
  const avatar =
    "https://avatars.dicebear.com/api/" +
    gender +
    "/" +
    name +
    ".svg?mood[]=happy&hair[]=cap";
  return (
    <div className="TopNav">
      <div className="M_m d_T">
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
      </div>
      <div className="N_T">Hi, {name}</div>
      <div
        className="M_m"
        style={{ backgroundImage: "url(" + avatar + ")" }}
      ></div>
    </div>
  );
}
export default Topnav;
