import React from "react";

function HomeIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </div>
  );
}

function SearchIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  );
}
function AddIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--BoxMajor)"
        version="1.1"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        
      >
        
        <g transform="translate(128 128) scale(0.54 0.54)" >
          <g
            transform="translate(-233.54999999999998 -233.55000000000004) scale(5.19 5.19)"
          >
            <path
              d="M 45 3 c 7.785 0 14.118 6.333 14.118 14.118 v 6.139 c 0 7.785 -6.333 14.118 -14.118 14.118 c -7.785 0 -14.118 -6.333 -14.118 -14.118 v -6.139 C 30.882 9.333 37.215 3 45 3 M 45 0 L 45 0 c -9.415 0 -17.118 7.703 -17.118 17.118 v 6.139 c 0 9.415 7.703 17.118 17.118 17.118 h 0 c 9.415 0 17.118 -7.703 17.118 -17.118 v -6.139 C 62.118 7.703 54.415 0 45 0 L 45 0 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 56.2 46.09 c 10.592 2.542 18.391 12.261 18.391 23.257 V 87 H 15.409 V 69.346 c 0 -10.996 7.799 -20.714 18.391 -23.257 l 8.932 10.314 L 45 59.022 l 2.268 -2.619 L 56.2 46.09 M 55.078 42.803 L 45 54.44 L 34.922 42.803 c -12.728 2.118 -22.513 13.239 -22.513 26.544 v 17.707 c 0 1.621 1.326 2.946 2.946 2.946 h 59.29 c 1.621 0 2.946 -1.326 2.946 -2.946 V 69.346 C 77.591 56.042 67.805 44.921 55.078 42.803 L 55.078 42.803 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 60.118 82.338 c -0.828 0 -1.5 -0.672 -1.5 -1.5 V 66.782 c 0 -0.828 0.672 -1.5 1.5 -1.5 s 1.5 0.672 1.5 1.5 v 14.056 C 61.618 81.666 60.946 82.338 60.118 82.338 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 67.146 75.311 H 53.091 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 14.055 c 0.828 0 1.5 0.672 1.5 1.5 S 67.974 75.311 67.146 75.311 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  );
}

function SettingsIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-settings"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    </div>
  );
}
export { HomeIco, SearchIco, AddIco, HeartIcon, SettingsIco };
