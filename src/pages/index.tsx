import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { About, Home, Resume } from "../containers";
import { Link, Element } from "react-scroll";
import logo from "../assets/white logo.png";
import theme from "../Theme";
import gsap from "gsap";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Starfall } from "../component";

interface Props {
  window?: () => Window;
}

const drawerWidth = 220;
const navItems = ["Home", "About", "Resume"];

const MainPage = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const comp = React.useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "0",
        duration: 0.5,
        delay: 1,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 1,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "0",
          opacity: 0,
          duration: 1.5,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

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
    <div style={{background:"black"}}>
      <Box ref={comp}>
        <div
          id="intro-slider"
          style={{
            height: "100vh",
            width: "100vw",
            padding: "10px",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            background: "black",
            justifyContent:"center",
            alignItems:"center"
          }}
        > 
          <h1 id="title-1" style={{fontSize: isMobile ? 25 : isTablet ? 50 : 100}}>
            Welcome to My Website
          </h1>
          <h1 id="title-2" style={{fontSize: isMobile ? 15 : isTablet ? 30 : 60, fontFamily: "Rubik Doodle Shadow, system-ui"}}>
            THANKS FOR VISITING
          </h1>
          <Starfall />
        </div>
        <div id="welcome">
          <Box>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: "black", maxWidth:"100%"}}>
              <Toolbar
                sx={{
                  paddingLeft: "5vw !important",
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img src={logo} alt="logo" width={isMobile ? 50 : 70} />
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
                anchor="right"
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
                          onSetActive={() =>
                            handleSetActive(item.toLowerCase())
                          }
                        >
                          <Button
                            sx={{
                              textAlign: "center",
                              color: "white",
                              position: "relative",
                              paddingLeft: "35px",
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
                                  left: "0",
                                  width: "0",
                                  height: "0",
                                  borderBottom: "8px solid transparent",
                                  borderLeft: "8px solid #fff",
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
        </div>
      </Box>
          <Element name="home" id="welcome">
            <Home />
          </Element>
          <Element name="about" id="welcome">
            <About />
          </Element>
          <Element name="resume" id="welcome">
            <Resume />
          </Element>
    </div>
  );
};

export default MainPage;
