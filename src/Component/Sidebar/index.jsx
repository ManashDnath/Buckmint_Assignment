import React from 'react'
import "./index.css"
import Mainmenu from './Mainmenu'
import Other from './Other'

function index() {
  return (
  
    
    <div className="sidebar">
    <div className="rectangle-button">
      <h1 className="wehr">WeHR</h1>
    </div>
    <Mainmenu/>
    <Other />
    </div>
  )
}

export default index