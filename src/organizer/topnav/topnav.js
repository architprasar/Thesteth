import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory()
  const [name, setName] = useState("archit");
  const [gender, setGender] = useState("male");
  useEffect(() => {
    
    

  }, []);
  const open = () => {
    history.push("/ma");
  }
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
        onClick={() => {
          history.push("/ma");
        }}
        className="M_m"
        style={{ backgroundImage: "url(" + avatar + ")" }}
      ></div>
    </div>
  );
}
export default Topnav;
