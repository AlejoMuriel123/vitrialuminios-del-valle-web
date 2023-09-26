import "./styles/Navbar.css";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import "./styles/NavBarCellPhone.css";

function NavBarCellPhone({ open, toggleDrawer }) {
  const styles = {
    paper: {
      background: "blue",
    },
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer} className="drawer">
      <nav className="cellphone-navbar" onClick={toggleDrawer}>
        <Link to="/">
          <button className="nav-buttons">
            <b>INICIO</b>
          </button>
        </Link>
        <Link to="/products">
          <button className="nav-buttons">
            <b>PRODUCTOS</b>
          </button>
        </Link>
        <Link to="/contactus">
          <button className="nav-buttons">
            <b>CONTACTENOS</b>
          </button>
        </Link>
      </nav>
    </Drawer>
  );
}

export default NavBarCellPhone;
