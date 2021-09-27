import "./App.css";
import Topnav from "./organizer/topnav/topnav";
import Home from "./organizer/home/home";
import Footer from "./organizer/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./organizer/home/search/search";
import LikedItem from "./organizer/home/LikedItems/LikedItem";
function App() {
  return (
    <Router>
      <div className="mainapp ">
        <Topnav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/li" component={LikedItem} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
