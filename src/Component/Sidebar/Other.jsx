import React from 'react'
import "./Other.css"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';


function Other() {
  return (
    <div className="frame-parent3">
      <div className="other-wrapper">
        <div className="other1">OTHER</div>
      </div>
      <div className="text-text">
        <SupportAgentIcon
        />
        <div className="support">Support</div>
      </div>
      <div className="text-text1">
        <SettingsIcon
        />
        <div className="settings">Settings</div>
      </div>
    </div>
  )
}

export default Other