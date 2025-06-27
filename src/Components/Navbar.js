/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
/*import logop from "../Assets/logop.png";*/
/* import { BsCart2 } from "react-icons/bs"; */
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-scroll";
/* import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"; */

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  
  const menuOptions = [
  {
    text: "Home",
    icon: <HomeIcon />,
    to: "Home",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    to: "About",
  },
  {
    text: "Testimonial",
    icon: <CommentRoundedIcon />,
    to: "Testimonial",
  },
  {
    text: "Contact",
    icon: <PhoneRoundedIcon />,
    to: "Contact",
  },
];

  return (
    <nav>
      
      
  
<div className="nav-logo-container brand-logo">
  <div className="brand-name">LEARNINGWAVE</div>
  <div className="brand-tagline">Where learning meets impact</div>
</div>



      <div className="navbar-links-container">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Testimonial">Testimonials</a>
        <a href="#Contact">Contact</a>
        {/**
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        */}
        <a
          href="https://docs.google.com/forms/d/1_e-vhBhLIERDgFU6BCgBarIncixx_irAakeqoXaW5Fs/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="primary-button" id="Book">Book Now</button>
        </a>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                
                <Link
  to={item.to}
  smooth={true}
  duration={500}
  offset={-70} // adjusts scroll position for sticky navbar
  onClick={() => setOpenMenu(false)} // closes the menu
  style={{
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    display: "block",
  }}
>
  <ListItemButton>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.text} />
  </ListItemButton>
</Link>


              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
