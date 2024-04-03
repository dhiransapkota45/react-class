import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        backgroundColor: "cyan",
        justifyContent: "space-between",
      }}
    >
      <div>logo</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/general">general</NavLink>
        <NavLink to="/business">business</NavLink>
        <NavLink to="/entertainment">entertainment</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
