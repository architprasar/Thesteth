import { React, useState } from "react";
import "../../../css/setting.css";
import { turnDarkOn } from "../../dark";
import "../../../css/LikedItems.css";
import { useHistory } from "react-router-dom";
import { SettingsIco } from "../../footer/ico";
import Backico from "./ico";

function HeadBar(props) {
  // back button

  return (
    <div className="header">
      <div className="small-part head-display-svg ">
        <SettingsIco />
      </div>
      <div className="big-part">
        <div className="head-wrapper">
          <div className="head-input">Settings</div>
        </div>
      </div>
      <div className="small-part-2"></div>
    </div>
  );
}

function ToogleButton(props) {
  return (
    <div class="list-item">
      <input
        type="checkbox"
        id={props.id}
        checked={props.isToggleOn ? "checked" : ""}
        onChange={() => {
          props.handleClick();
        }}
      />
      <label for={props.id}></label>
    </div>
  );
}
function SettingBody() {
  const history = useHistory();
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true" ? true : false
  );
  const [notification, setNotification] = useState(false);

  const updateDark = () => {
    setDark(!dark);
    localStorage.setItem("dark", !dark);
    turnDarkOn(!dark);
  };
  const updateNotification = () => {
    setNotification(!notification);
  };
  return (
    <div className="body">
      <div
        className="item"
        onClick={() => {
          history.push("/ma");
        }}
      >
        <div className="content">My account</div>
        <div className="icon">
          <Backico />
        </div>
      </div>
      <div className="item">
        <div className="content">Dark Mode</div>
        <div className="icon">
          <ToogleButton id="dark" isToggleOn={dark} handleClick={updateDark} />
        </div>
      </div>
      <div className="item">
        <div className="content">Notification</div>
        <div className="icon">
          <ToogleButton
            id="notification"
            isToggleOn={notification}
            handleClick={updateNotification}
          />
        </div>
      </div>
      <div className="item">
        <div className="content">Feedback</div>
        <div className="icon">
          <Backico />
        </div>
      </div>
      <div className="item">
        <div className="content">Support</div>
        <div className="icon">
          <Backico />
        </div>
      </div>
      <div className="item">
        <div className="content">Logout</div>
        <div className="icon">
          <Backico />
        </div>
      </div>
    </div>
  );
}

function Setting() {
  return (
    <div className="Setting-Main">
      <HeadBar />

      <SettingBody />
    </div>
  );
}
export default Setting;
