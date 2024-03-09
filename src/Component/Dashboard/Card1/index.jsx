import React from "react";
import "./index.css";

function index() {
  return (
    <div className="text-search">
      <div>
        <div className="talent-request">
          <div className="schedule-list">
            <div className="frame-department">
              <div className="total-employees">Total Employees</div>
              <div className="text-minutes-ago">216</div>
            </div>
            <div className="frame-recurring">
              <div className="men">120 Men</div>
              <div className="women">96 Women</div>
            </div>
          </div>
          <div className="frame-upcoming-schedule">
            <div className="frame-announcement">
              <div className="text-thisis-title-parent">
                <div className="text-thisis-title">
                  <div className="frame-a-m-parent">
                    <img className="frame-a-m" alt="" src="/frame-a-m.svg" />
                    <div className="icnotifications">+2%</div>
                  </div>
                  <img
                    className="createnew-schedule-icon"
                    loading="lazy"
                    alt=""
                    src="/frame-20.svg"
                  />
                </div>
                <div className="groupichorizontalmenu">
                  <img
                    className="frame-today-sep"
                    alt=""
                    src="/frame-today-sep.svg"
                  />
                </div>
              </div>
              <div className="priority-frame">
                <div className="past-month">+2% Past month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="totala-employees">
          <div className="frame-parent">
            <div className="total-employees-parent">
              <div className="total-employees1">Talent Request</div>
              <div className="div2">16</div>
            </div>
            <div className="men-parent">
              <div className="men1">6 Men</div>
              <div className="women1">10 Women</div>
            </div>
          </div>
          <div className="totala-employees-inner">
            <div className="frame-group">
              <div className="vector-parent">
                <img
                  className="frame-child"
                  alt=""
                  src="/frame-today-sep.svg"
                />
                <img className="frame-item" alt="" src="/vector-3-1.svg" />
                <div className="div3">+5%</div>
                <img className="frame-inner" alt="" src="/frame-20.svg" />
              </div>
              <div className="past-month-wrapper">
                <div className="past-month1">+5% Past month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
