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
import { Link } from "react-scroll";
import logo from "../../assets/white logo.png";
import theme from "../../Theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

interface Props {
  window?: () => Window;
}

const drawerWidth = 220;
const navItems = ["Home", "About", "Resume"];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [customBreakpoint, setCustomBreakpoint] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    setCustomBreakpoint(1200);
  }, []);

  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "black", maxWidth: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logo}
            alt="logo"
            width={isMobile ? 50 : 70}
            style={{ marginLeft: isMobile ? 7 : isCustomBreakpoint ? "4vw" : "4.5vw" }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap:"20px", marginRight:"3vw", alignItems:"center"}}>
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
                  style={{width:"100px"}}
                  href="#"
                >
                  <Button
                    sx={{
                      color: "#fff",
                      margin: "auto",
                      "&:hover": { fontSize: "1rem" } ,
                      transition: "font-size 0.3s ease-in-out",
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
          SlideProps={{ unmountOnExit: true }}
          ModalProps={{
            keepMounted: false,
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
                    onSetActive={() => handleSetActive(item.toLowerCase())}
                    href="#"
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
  );
};

export default Navbar;
