import React from 'react'
import Text from "./Text"
import "./index.css"


function index() {
  return (
    <div className="upcoming-schedule1">
      <div className="upcoming-schedule-child" />
      <div className="frame-with-upcoming-schedule-a-wrapper">
        <div className="frame-with-upcoming-schedule-a">
          <div className="upcoming-schedule2">Upcoming Schedule</div>
          <div className="upcoming-schedule-text">
            <div className="n-a">
              <div className="today-13-sep1">Today, 13 Sep 2021</div>
            </div>
            <img className="n-a-icon" alt="" src="/frame-10.svg" />
          </div>
        </div>
      </div>
      <div className="text2">
        <div className="priority">Priority</div>
      </div>
      <Text
        thisIsTitle="Review candidate applications"
        today1130AM="Today - 11.30 AM"
      />
      <div className="text3">
        <div className="other">Other</div>
      </div>
      <Text
        thisIsTitle="Interview with candidates"
        today1130AM="Today - 10.30 AM"
      />
      <div className="text4">
        <div className="frame-parent2">
          <div className="this-is-title-group">
            <div className="this-is-title1">
              Short meeting with product designer from IT Departement
            </div>
            <div className="today-11301">Today - 09.15 AM</div>
          </div>
          <div className="frame-wrapper">
            <div className="ic-notifications-parent">
              <img
                className="ic-notifications-icon1"
                alt=""
                src="/icnotifications.svg"
              />
              <img
                className="ic-horizontal-menu-icon1"
                alt=""
                src="/carbonoverflowmenuhorizontal.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="instance-container">
        <div className="notification-frame-parent">
          <div className="notification-frame">
            <div className="this-is-title2">
              Sort Front-end developer candidates
            </div>
            <div className="today-11302">Today - 11.30 AM</div>
          </div>
          <div className="call-button-wrapper">
            <div className="call-button">
              <img
                className="ic-notifications-icon2"
                alt=""
                src="/icnotifications.svg"
              />
              <img
                className="ic-horizontal-menu-icon2"
                alt=""
                src="/carbonoverflowmenuhorizontal.svg"
              />
            </div>
          </div>
        </div>
        <button className="create-new-schedule">
          <div className="creat-a-new">Creat a New Schedule</div>
        </button>
      </div>
    </div>
  )
}

export default index