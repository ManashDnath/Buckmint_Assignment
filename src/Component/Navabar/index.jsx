import React from "react";
import "./index.css";
import Dashboard from "../Dashboard/index";

function Index() {
  return (
    <div className="navbar">
      <header className="frame-header">
        <div className="frame-wrapper1">
          <div className="search-parent">
            <input className="search" placeholder="Search" type="text" />
            <img className="frame-child1" alt="" src="/frame-9@2x.png" />
          </div>
        </div>
        <div className="icround-notifications-parent">
          <img
            className="icround-notifications-icon"
            loading="lazy"
            alt=""
            src="/icroundnotifications.svg"
          />
          <div className="bichat-left-dots-fill">
            <div className="bichat-left-dots-fill-child" />
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="mask-group-parent">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="admirra-john-parent">
              <div className="admirra-john">Admirra John</div>
              <img className="frame-child2" alt="" src="/frame-10-2.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className="navbar-child" />
      <Dashboard/>
    </div>
  );
}

export default Index;
