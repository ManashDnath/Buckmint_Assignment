import React from "react";
import "./index.css";
import Card from "./Card";
import Card1 from "./Card1";
import Announcement from "./Announcement";

function index() {
  return (
    <div>
      <h3 className="dashboard">Dashboard</h3>
      <Card />
      <Card1 />
      <Announcement />
    </div>
  );
}

export default index;
