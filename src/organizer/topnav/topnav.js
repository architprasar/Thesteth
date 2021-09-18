import React,{ useEffect,useState }  from "react";
import "../../css/topnav.css";

export default function Topnav() {
    const [avatar,setAavatar] = useState('n');
    useEffect(() => {
        setAavatar('https://avatars.dicebear.com/api/female/pola.svg?mood[]=happy');
    },[])
  return (
    <div className="TopNav">
      <div className="M_m d_T">
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
      </div>
      <div className="N_T">Hi, Archit</div>
      <div className="M_m" style={{backgroundImage:'url('+{avatar}+')'}}>
          <img src={avatar} alt='avatar'/>
      </div>
    </div>
  );
}
