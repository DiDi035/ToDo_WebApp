import React from 'react'

import "./Header.css"

const Header  = (props) => {
  return (
    <div className="header">
      <h1>TODO <span className="italic">app</span></h1>
      <p className="italic quote">Never put off till tomorrow what you can do today...</p>
    </div>
  )
}

export default Header
