import "./App.css";
import Topnav from "./organizer/topnav/topnav";
import Home from "./organizer/home/home";
import Footer from "./organizer/footer/footer";
function App() {
  return (
    <div className="mainapp">
      <Topnav />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
