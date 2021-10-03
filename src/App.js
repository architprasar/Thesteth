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
import { turnDarkOn } from "./organizer/dark";
import IntitalizeFireBaseMessaging from "./organizer/firebase";

function App() {
  useEffect(() => {
    const dark = localStorage.getItem("dark");
    console.log(dark);
    if (dark === "true") {
      console.log("dark");
      turnDarkOn(true);
    }
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
