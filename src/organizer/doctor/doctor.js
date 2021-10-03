import { React, useEffect, useState } from "react";
import "../../css/doctor.css";
import { HeadBar } from "../home/LikedItems/LikedItem";
import Backico from "../home/search/ico.js";
import { useHistory, useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { DateData } from "../data";
function CreateRipple(e) {
  const parent = e.target.parentElement;
  const grandparent = e.target.parentElement.parentElement;
  let scrollPercentage =
    grandparent.scrollLeft /
    (grandparent.scrollWidth - grandparent.clientWidth);
  console.log(grandparent.scrollWidth);

  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left =
    e.pageX - parent.offsetLeft + grandparent.scrollLeft + "px";
  ripple.style.top = e.pageY - parent.offsetTop + "px";
  parent.appendChild(ripple);
  setTimeout(() => {
    parent.removeChild(ripple);
  }, 1000);
}

function DocInfoHead(props) {
  const [holder, setHolder] = useState(10);
  useEffect(() => {
    let h = document.getElementById("holderbox").offsetWidth;
    setHolder(h - 0.12 * h);
  }, []);

  return (
    <div className="head" style={{ height: `${holder}px` }}>
      <div className="head-left" id="holderbox">
        <div
          className="holder"
          style={{
            height: `${holder}px`,
            width: `${holder}px`,
            backgroundColor: `#${props.color}`,
          }}
        ></div>
      </div>
      <div className="head-right">
        <span className="dr-name">Dr. Ronn</span>
        <div className="dr-speciality">Dermatoligy ,Virology & Leprosy</div>
        <div className="dr-location">jammu</div>
      </div>
    </div>
  );
}

function Biography() {
  const readmore = () => {
    const rmbdy = document.getElementById("rm-bdy");
    const rm = document.getElementById("rm");
    if (rm.innerHTML == "Read more") {
      rm.innerHTML = "Show less";
      rmbdy.style.overflow = "visible";
      rmbdy.style.whiteSpace = "pre-wrap";
    } else {
      rm.innerHTML = "Read more";
      rmbdy.style.overflow = "hidden";
      rmbdy.style.whiteSpace = "nowrap";
    }
  };
  return (
    <div className="biography">
      <div className="head small-title-font">BIOGRAPHY</div>
      <div
        className="body"
        id="rm-bdy"
        onClick={() => {
          readmore();
        }}
      >
        Dr. Ronn is Professor of Endocrinology and Metabolism at the University
        of Yaoundé 1 and Consultant Endocrinologist at Yaoundé Central Hospital.
        He is a member of the National Endocrine Society (NSE), the National
        Endocrine Society of Nigeria (NSE-Nigeria), the National Endocrine
      </div>
      <div
        className="rm"
        id="rm"
        onClick={() => {
          readmore();
        }}
      >
        Read more
      </div>
    </div>
  );
}

function SearchBoxItem(props) {
  const history = useHistory();
  function SearchTo(e) {
    history.push("/search/" + props.name);
  }
  return (
    <div
      className="sugges-item"
      onClick={() => {
        SearchTo();
      }}
    >
      {props.name}
    </div>
  );
}

function SuggesBox() {
  const data = {
    1: "Doctor",
    2: "Fever",
    3: "Covid",
    4: "Immunologist",
    5: "Family Physician",
    6: "Cardiologist",
    7: "Pediatrician",
  };
  return (
    <div className="sugges-box">
      <div className="head small-title-font">SPECIALITIES</div>
      <div className="body">
        {Object.keys(data).map((key) => {
          return <SearchBoxItem name={data[key]} key={key} />;
        })}
      </div>
    </div>
  );
}
// date item
function DateItem(props) {
  const [aState, setAState] = useState("natural");
  useEffect(() => {
    if (!props.ava) {
      setAState(aState + " disable");
    } else if (props.activeDate) {
      setAState("natural active");
    } else {
      setAState("natural");
    }
  }, [props.UpdateActiveDate]);
  return (
    <div
      style={{ overflow: "hidden" }}
      className={"date-item " + aState}
      onClick={(e) => {
        CreateRipple(e);
        if (props.ava) {
          props.UpdateActiveDate(props.date);
        }
      }}
    >
      <div className="item number">{props.date}</div>
      <div className="item day">{props.day}</div>
    </div>
  );
}
// date
function Date(props) {
  const data = props.data;

  return (
    <div className="date">
      <div className="title small-title-font">Days</div>
      <div className="body">
        {Object.keys(data).map((key) => {
          return (
            <DateItem
              date={key}
              day={data[key]["day"]}
              ava={data[key]["ava"]}
              activeDate={key == props.activeDate ? true : false}
              UpdateActiveDate={props.UpdateActiveDate}
            />
          );
        })}
      </div>
    </div>
  );
}
// time item
const TimeItem = (props) => {
  const [aState, setAState] = useState("natural");
  useEffect(() => {
    if (!props.ava) {
      setAState("natural disable");
    } else if (props.activeTime) {
      setAState("natural active");
    } else {
      setAState("natural");
    }
  }, [props.UpdateActiveTime]);
  return (
    <div
      onClick={(e) => {
        CreateRipple(e);
        if (props.ava) {
          props.UpdateActiveTime(props.data);
        }
      }}
      className={"time-item " + aState}
    >
      <div className="t-item">{props.time}</div>
    </div>
  );
};
//time
function Time(props) {
  return (
    <div className="time">
      <div className="title small-title-font">Time</div>
      <div className="body">
        {Object.keys(props.data).map((key) => {
          return (
            <TimeItem
              key={key}
              data={key}
              time={props.data[key]["time"]}
              ava={props.data[key]["ava"]}
              activeTime={key == props.activeTime ? true : false}
              UpdateActiveTime={props.UpdateActiveTime}
            />
          );
        })}
      </div>
    </div>
  );
}
// schedule
function Schedule() {
  const [activeDate, setActiveDate] = useState(1);
  const [activeTime, setActiveTime] = useState(0);
  const datedata = DateData;
  useEffect(() => {}, [activeDate, activeTime]);
  const UpdateActiveDate = (date) => {
    setActiveDate(date);
    setActiveTime(0);
  };

  const UpdateActiveTime = (time) => {
    setActiveTime(time);
  };
  return (
    <div className="Schedule">
      <div className="head">SCHEDULE</div>
      <Date
        data={datedata}
        UpdateActiveDate={UpdateActiveDate}
        activeDate={activeDate}
      />
      <Time
        data={datedata[activeDate]["avaTime"]}
        activeTime={activeTime}
        UpdateActiveTime={UpdateActiveTime}
      />
    </div>
  );
}

//book now button
function BookNow() {
  const history = useHistory();
  function BookNowTo(e) {
    history.push("/book");
  }
  return (
    <div
      className="book-now"
      onClick={() => {
        BookNowTo();
      }}
    >
      Book Now
    </div>
  );
}

// main body
function Doctor() {
  const { DOCID } = useParams();
  return (
    <div className="main-doc-body">
      <HeadBar name="Doctor" icon={Backico} back={true} />
      <DocInfoHead color={DOCID} />
      <Biography></Biography>
      <SuggesBox></SuggesBox>
      <Schedule />
      <BookNow />
      <div className="footer"></div>
    </div>
  );
}

export default Doctor;
