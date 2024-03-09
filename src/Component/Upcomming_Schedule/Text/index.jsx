import React from 'react'

const index = ({ thisIsTitle, today1130AM }) => {
    return (
      <div className="text1">
        <div className="frame-parent1">
          <div className="this-is-title-parent">
            <div className="this-is-title">{thisIsTitle}</div>
            <div className="today-1130">{today1130AM}</div>
          </div>
          <div className="frame-with-icons-wrapper">
            <div className="frame-with-icons">
              <img
                className="ic-notifications-icon"
                loading="lazy"
                alt=""
                src="/icnotifications.svg"
              />
              <img
                className="ic-horizontal-menu-icon"
                loading="lazy"
                alt=""
                src="/carbonoverflowmenuhorizontal.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default index