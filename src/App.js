import "./App.css";
import Topnav from "./organizer/topnav/topnav";
import Home from "./organizer/home/home";
import Footer from "./organizer/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./organizer/home/search/search";
import { LikedItem } from "./organizer/home/LikedItems/LikedItem";
import Setting from "./organizer/home/setting/setting";
import Doctor from "./organizer/doctor/doctor";
import MyaAccount from "./organizer/myaccount/myaccount";
import { useEffect } from "react";
import { detectmedia } from "./organizer/dark";
import IntitalizeFireBaseMessaging, { messaging } from "./organizer/firebase";

import LoginAndRegister from "./organizer/Lr/login";

function App() {
  function messf() {
    messaging.onMessage(function (payload) {
      console.log(payload);
      const notificationOption = {
        body: payload.notification.body,
        icon: payload.notification.icon,
      };

      if (Notification.permission === "granted") {
        var notification = new Notification(
          payload.notification.title,
          notificationOption
        );
        console.log(messaging.getToken());
        notification.onclick = function (ev) {
          ev.preventDefault();
          window.open(payload.notification.click_action, "_blank");
          notification.close();
        };
      }
    });
    messaging.onTokenRefresh(function () {
      messaging
        .getToken()
        .then(function (newtoken) {
          console.log("New Token : " + newtoken);
        })
        .catch(function (reason) {
          console.log(reason);
        });
    });
  }
  useEffect(() => {
    messf();
    detectmedia();
    IntitalizeFireBaseMessaging();

    
  }, []);
  return (
    <Router>
      <div className="mainapp ">
        <Topnav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/li" component={LikedItem} />
          <Route path="/setting" component={Setting} />
          <Route path="/doc/:DOCID" component={Doctor} />
          <Route path="/ma" component={MyaAccount} />
          <Route path="/" component={LoginAndRegister} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
