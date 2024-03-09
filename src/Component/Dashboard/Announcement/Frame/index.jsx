import React from 'react'
import { useMemo } from 'react';
import "./index.css"

const index = ({
    outingScheduleForEveryDep,
    minutesAgo,
    bipinAngleFill,
    propAlignSelf,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propPadding,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf,
        position: propPosition,
        top: propTop,
        left: propLeft,
        width: propWidth,
      };
    }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);
  
    const frameDiv1Style = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);
  
    return (
      <div className="frame-department-parent" style={frameDivStyle}>
        <div className="frame-department1">
          <div className="outing-schedule-for">{outingScheduleForEveryDep}</div>
          <div className="minutes-ago">{minutesAgo}</div>
        </div>
        <div className="frame-frame-wrapper" style={frameDiv1Style}>
          <div className="frame-frame">
            <img
              className="bipin-angle-fill-icon"
              loading="lazy"
              alt=""
              src={bipinAngleFill}
            />
            <img
              className="carbonoverflow-menu-horizonta-icon"
              loading="lazy"
              alt=""
              src="/carbonoverflowmenuhorizontal.svg"
            />
          </div>
        </div>
      </div>
    );
  };

export default index