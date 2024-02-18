import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import bg from "../../assets/home/home-image.webp";
import bg2 from "../../assets/home/home-image - BW.webp"
import { Leaf, Occupations } from "../../component";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Tsparticle from "../../component/Tsparticle";
import React from "react";
import { ModeState } from "../../utils/GlobalState";

const Home = () => {
  const [customBreakpoint, setCustomBreakpoint] = React.useState<number | undefined>(undefined);
  const { darkMode } = React.useContext(ModeState);

  React.useEffect(() => {
    setCustomBreakpoint(768);
  }, []);
  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');
  
  const contact = {
    name: "Renaldi P. Basuki",
    linkedIn: "https://www.linkedin.com/in/renaldi-prasetyo-basuki/",
    github: "https://github.com/RPrasetyoB",
    email: "rpbasuki.dev@gmail.com",
    no: "https://wa.me/6285236891709",
  };

  const redirectToLinkedIn = () => {
    window.open(contact.linkedIn, "_blank");
  };

  const redirectToGitHub = () => {
    window.open(contact.github, "_blank");
  };

  const redirectToEmail = () => {
    window.location.href = `mailto:${contact.email}`;
  };
  return (
    <Box
      sx={{
        height: "100svh",
        width: "100svw",
        paddingTop: "40px",
        background: darkMode ? "#030303" : "#EEF5FF",
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        transition: "background 0.8s ease-in-out"
      }}
    >
      {darkMode ? (<Tsparticle />) : (<Leaf />)}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: isMobile ? 3 : isTablet? "8vw" : "6vw",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Rubik Doodle Shadow, system-ui" }}
          >
            RENALDI PRASETYO
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Rubik Doodle Shadow, system-ui" }}
          >
            BASUKI
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Roboto Mono, monospace" }}
          >
            <Occupations />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="h6">Lets get in touch :</Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", width: isCustomBreakpoint ? "70%" : "60%" }}>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: darkMode ? "#ffff" : "black", padding: "0", margin: "auto"  }}
                onClick={() => redirectToLinkedIn()}
                aria-label="linkedin button"
              >
                <LinkedInIcon sx={{ fontSize: "28px", padding: "0", "&:hover":{fontSize: "38px"}, transition: "font-size 0.3s ease-in-out"}} />
              </IconButton>
            </span>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: darkMode ? "#ffff" : "black", padding: "0", margin: "auto" }}
                onClick={() => redirectToEmail()}
                aria-label="email button"
              >
                <EmailIcon sx={{ fontSize: "30px", "&:hover":{fontSize: "40px"}, transition: "font-size 0.3s ease-in-out" }} />
              </IconButton>
            </span>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: darkMode ? "#ffff" : "black", padding: "0", margin: "auto"  }}
                onClick={() => redirectToGitHub()}
                aria-label="github button"
              >
                <GitHubIcon sx={{ fontSize: "26px", "&:hover":{fontSize: "36px"}, transition: "font-size 0.3s ease-in-out" }}/>
              </IconButton>
            </span>            
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "102%", width: isMobile ? "50%" : "auto"}}>
        <img
          src={darkMode ? bg : bg2 }
          style={{
            objectFit: isMobile ? "none" : "cover",
            objectPosition: isMobile ? "right" : "center",
            height: "100%",
            filter: "brightness(1.1)",
            maskImage:
              isMobile ? "linear-gradient(to right, transparent 0%, black 20%, transparent 97%)" : "linear-gradient(to right, transparent 10%, black 50%)",
          }}
          alt="background image"
        />
      </Box>
    </Box>
  );
};

export default Home;
