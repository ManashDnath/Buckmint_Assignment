import React from 'react'
import "./index.css"

function index() {
  return (
    <div className="recently-activity">
    <div className="recently-activity-child" />
    <div className="recent-activities-scroll-conta">
      <div className="recently-activity1">Recently Activity</div>
    </div>
    <div className="recently-activity-inner">
      <div className="am-fri-10-sept-2021-parent">
        <div className="am-fri-10">10.40 AM, Fri 10 Sept 2021</div>
        <div className="you-posted-a">You Posted a New Job</div>
        <div className="kindly-check-the">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </div>
      </div>
    </div>
    <div className="priority-frame-set-wrapper">
      <div className="priority-frame-set">
        <div className="text">
          <div className="schedule-a-call">{`Schedule a call `}</div>
        </div>
        <div className="priority-frame-set-child" />
        <button className="button">
          <div className="primary-button">Schedule</div>
        </button>
      </div>
    </div>
  </div>
  )
}

export default index