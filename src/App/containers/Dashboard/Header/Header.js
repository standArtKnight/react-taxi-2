import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return <div>
      <NavLink to="/dashboard/map">Map</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </div>;
  }
}

export default Header;
