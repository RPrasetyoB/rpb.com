import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, CssBaseline, Drawer, IconButton, List, ListItem, Toolbar } from '@mui/material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Resume', 'Projects'];

const Navbar =(props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{bgcolor:"black", height: "100vh"}}>
      <Divider />
      <List>        
        <ListItem disablePadding sx={{ textAlign: 'center', bgcolor:"black", display:"flex", flexDirection:"column" }}>
          <Button sx={{ textAlign: 'center', color:"white" }}>
            About
          </Button>
          <Button sx={{ textAlign: 'center', color:"white" }}>
            Resume
          </Button>
          <Button sx={{ textAlign: 'center', color:"white" }}>
            Projects
          </Button>
          <Button sx={{ textAlign: 'center', color:"white" }}>
            Contact
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <CssBaseline />
        <AppBar component="nav" sx={{bgcolor:"black"}}>
          <Toolbar sx={{paddingLeft: "5vw !important"}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Button key={index} sx={{ color: '#fff', marginRight:"3vw" }}>
                    {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
    </>
  );
}

export default Navbar