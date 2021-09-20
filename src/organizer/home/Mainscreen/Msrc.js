import React, { useEffect } from "react";
import "../../../css/mainsrc.css";
import { SearchIco } from "../../footer/ico";
const TopBox = () => {
  return (
    <div className="message_Box">
     
      <div className="ques">How are you feeling today?</div>
      <div className="greet">Good morning</div>
    </div>
  );
};

const Search = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);
  return (
    <div className="search_box_container">
      <div className="search_box">
        <div
          href=""
          class="typewrite"
          data-period="2000"
          data-type='[ "Search Doctors and Symptoms...", "Gynecologist", "Dermatologist", "Orthopedist" ,"Family Physician","Pediatrician","Cardiologist","Immunologist"]'
        >
          <span class="wrap"></span>
        </div>
      </div>
      <button className="search_button">
        <SearchIco />
      </button>
    </div>
  );
};

const MainCard = () => {
  return (
    <div className="card_container">
      <div className="card"></div>
    </div>
  );
};
const Suggestions = () => {
  return (
    <div className="suggestions_container">
      <div className="head">
        <div>Suggestions</div>
        <div></div>
        <div>more</div>
      </div>
      <div className="body">
        <div className="suggestions"></div>
        <div className="suggestions"></div>
        <div className="suggestions"></div>
        <div className="suggestions"></div>
        <div className="suggestions"></div>
        <div className="suggestions"></div>
      </div>
    </div>
  );
};

function Msrc() {
  return (
    <div className="mnsrc">
      <TopBox />
      <Search />
      <MainCard />
      <Suggestions />
    </div>
  );
}

export default Msrc;
