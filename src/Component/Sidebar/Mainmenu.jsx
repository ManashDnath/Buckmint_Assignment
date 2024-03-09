import React from "react";
import "./Mainmenu.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

function Mainmenu() {
  return (
    <div className="text-label">
      <div className="main-menu-wrapper">
        <div className="main-menu">MAIN MENU</div>
      </div>
      <div className="frame-submenu">
        <DashboardIcon />
        <div className="dashboard1">Dashboard</div>
      </div>
      <div className="frame-submenu1">
        <PersonAddAlt1Icon
        />
        <div className="recruitment">Recruitment</div>
      </div>
      <div className="frame-submenu2">
        <EventIcon
        />
        <div className="schedule">Schedule</div>
      </div>
      <div className="frame-submenu3">
        <GroupsIcon
        />
        <div className="employee">Employee</div>
      </div>
      <div className="frame-submenu4">
        <WorkspacesIcon
        />
        <div className="department">Department</div>
      </div>
    </div>
  );
}

export default Mainmenu;
