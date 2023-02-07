import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



export default function Home() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <NavLink
        to="people"
        style={({ isActive }) => isActive ? activeStyle : undefined}>People
      </NavLink>
      
    </nav>
  )

}