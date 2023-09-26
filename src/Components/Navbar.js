import './styles/Navbar.css';
import React from 'react';
import { Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import NavBarCellPhone from './NavBarCellPhone';

function Navbar() {
  const [openNavBarCellPhone, setopenNavBarCellPhone] = useState(false);

  const toggleDrawerNavBarCellPhone = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setopenNavBarCellPhone(!openNavBarCellPhone);
  };

   return (
    <div className="App">
      <Hidden mdDown>
        <nav className='navegation-bar'>
          <Link to="/"><button className='nav-buttons'><b>INICIO</b></button></Link>
          <Link to="/products"><button className='nav-buttons'><b>PRODUCTOS</b></button></Link>
          <Link to="/contactus"><button className='nav-buttons'><b>CONTACTENOS</b></button></Link>
        </nav>
      </Hidden>
      <Hidden mdUp>
        <NavBarCellPhone 
        open={openNavBarCellPhone}
        toggleDrawer={toggleDrawerNavBarCellPhone}
        />
        <nav className='navegation-bar'>
          <Button onClick={toggleDrawerNavBarCellPhone}>
            MENU
            <MenuIcon style={{ fontSize: 30, color: '#fff' }}/>
          </Button>
        </nav>
      </Hidden>
     
    </div>
  );
}

export default Navbar;