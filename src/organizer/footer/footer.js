import React from "react";
import { useState } from "react/cjs/react.development";
import "../../css/footer.css";
import { HomeIco, SearchIco, AddIco, HeartIcon, SettingsIco } from "./ico";
export default function Footer() {

  return (
    <div className="Main_footer ">
      <div>
        <HomeIco />
      </div>
      <div>
        <SearchIco />
      </div>
      <div>
        <AddIco />
      </div>
      <div>
        <HeartIcon />
      </div>
      <div>
        <SettingsIco />
      </div>
    </div>
  );
}
