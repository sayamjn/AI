import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../../Assests/Images/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo-removebg-preview.png';
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
    { text: 'AI Tools & Products', icon: <AssignmentIcon />, path: '/' },
  ];

  return (
    <Box marginBottom={5} sx={{ flexGrow: 1 }}>
      <Drawer anchor='left' open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={RouterLink} to={item.path} onClick={toggleDrawer}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position='fixed' sx={{ backgroundColor: '#212121', boxShadow: 'none', height: '64px' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt='logo' style={{ width: '150px' }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Nav;
