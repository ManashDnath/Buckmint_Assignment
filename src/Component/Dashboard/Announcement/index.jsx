import React from "react";
import "./index.css";
import Frame from "./Frame";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";


function index() {
  return (
    <div className="announcement">
      <div className="announcement-child" />
      <div className="announcement-inner">
        <div className="frame-container">
          <div className="announcement-parent">
            <div className="announcement1">Announcement</div>
            <div className="frame-div">
              <div className="today-13-sep-2021-wrapper">
                <div className="today-13-sep">Today, 13 Sep 2021</div>
              </div>
              <KeyboardArrowDownSharpIcon />
            </div>
          </div>
          <div className="instance-parent">
            <Frame
              outingScheduleForEveryDep="Outing schedule for every departement"
              minutesAgo="5 Minutes ago"
              bipinAngleFill="/bipinanglefill.svg"
            />
            <Frame
              outingScheduleForEveryDep="Meeting HR Department"
              minutesAgo="Yesterday, 12:30 PM"
              bipinAngleFill="/bipinanglefill-1.svg"
              propAlignSelf="stretch"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propPadding="var(--padding-3xs) 0px 0px"
            />
          </div>
        </div>
      </div>
      <div className="instance-group">
        <div className="frame-priority-frame-frame">
          <div className="see-all-announcement">See All Announcement</div>
        </div>
      </div>
    </div>
  );
}

export default index;
