import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import { About, Home, Resume } from "../containers";
import { Link, Element } from "react-scroll";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Resume", "Projects"];

const MainPage = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const delayDrawerToggle = () => {
    setTimeout(() => {
      handleDrawerToggle();
    }, 850);
  };

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: "black", maxWidth: "100%" }}>
          <Toolbar sx={{ paddingLeft: "5vw !important", maxWidth: "100%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-5}
                  activeClass="active"
                  onSetActive={() => handleSetActive(item.toLowerCase())}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      marginRight: "3vw",
                      ...(activeSection === item.toLowerCase() && {
                        borderBottom: "2px solid #fff",
                        borderRadius: 0,
                      }),
                    }}
                  >
                    {item}
                  </Button>
                </Link>
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
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box
              onClick={handleDrawerToggle}
              sx={{ bgcolor: "black", height: "100vh" }}
            >
              <Divider />
              <List sx={{ paddingTop: "80px" }}>
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: "center",
                    bgcolor: "black",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-5}
                      activeClass="active"
                      onSetActive={() => handleSetActive(item.toLowerCase())}
                    >
                      <Button
                        sx={{
                          textAlign: "center",
                          color: "white",
                          position: "relative",
                          paddingRight: "25px",
                          ...(activeSection === item.toLowerCase() && {
                            borderRadius: 0,
                          }),
                        }}
                        onClick={delayDrawerToggle}
                      >
                        {item}
                        {activeSection === item.toLowerCase() && (
                          <span
                            style={{
                              content: '""',
                              position: "absolute",
                              top: "25%",
                              right: "0",
                              width: "0",
                              height: "0",
                              borderBottom: "8px solid transparent",
                              borderRight: "8px solid #fff",
                              borderTop: "8px solid transparent",
                              transform: "translateY(-50)",
                            }}
                          />
                        )}
                      </Button>
                    </Link>
                  ))}
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </nav>
      </Box>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
    </>
  );
};

export default MainPage;
