import React from "react";
import { useState } from "react/cjs/react.development";
import "../../css/footer.css";
import { useHistory } from "react-router-dom";
import { HomeIco, SearchIco, AddIco, HeartIcon, SettingsIco } from "./ico";
export default function Footer() {
  const history = useHistory();
  const changeRoute = (route) => {
    history.push(route);
  };

  return (
    <div className="Main_footer ">
      <div
        onClick={() => {
          changeRoute("/");
        }}
      >
        <HomeIco />
      </div>
      <div
        onClick={() => {
          changeRoute("search");
        }}
      >
        <SearchIco />
      </div>
      <div
        onClick={() => {
          changeRoute("/");
        }}
      >
        <AddIco />
      </div>
      <div
        onClick={() => {
          changeRoute("li");
        }}
      >
        <HeartIcon />
      </div>
      <div
        onClick={() => {
          changeRoute("/setting");
        }}
      >
        <SettingsIco />
      </div>
    </div>
  );
}
