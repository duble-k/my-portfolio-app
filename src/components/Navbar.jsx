// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Home, Work, Devices, Book } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        {/* Home Link */}
        <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ marginX: 2 }}>
          <Home sx={{ marginRight: 2 }} />
          Home
        </Typography>

        {/* Work Link */}
        <Typography variant="h6" component={Link} to="/projects" color="inherit" sx={{ marginX: 2 }}>
          <Devices sx={{ marginRight: 2 }} />
          Personal Projects
        </Typography>

        {/* Work Link */}
        <Typography variant="h6" component={Link} to="/work" color="inherit" sx={{ marginX: 2 }}>
          <Work sx={{ marginRight: 2 }} />
          Work Experince
        </Typography>

        {/* Contact Link */}
        <Typography variant="h6" component={Link} to="/guestbook" color="inherit" sx={{ marginX: 2 }}>
          <Book sx={{ marginRight: 2 }} />
          Guestbook
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
