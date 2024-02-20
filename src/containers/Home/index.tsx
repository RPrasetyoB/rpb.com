import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import bg from "../../assets/home/home-light2.webp";
import bg2 from "../../assets/home/home-image.webp";
import homeLight from "../../assets/home/home-light.jpg";
import homeDark from "../../assets/home/transparent.png";
import { Leaf, Occupations } from "../../component";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Tsparticle from "../../component/Tsparticle";
import React, { useEffect, useRef, useState } from "react";
import { ModeState } from "../../utils/GlobalState";
import style from "./home.module.scss";

const Home = () => {
  const [customBreakpoint, setCustomBreakpoint] = React.useState<number | undefined>(undefined);
  const { darkMode } = React.useContext(ModeState);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  const imagesLoaded = useRef(0);
  const imagesToLoad = [bg, bg2, homeLight, homeDark];
  const handleImageLoad = () => {
    imagesLoaded.current +=   1;
    if (imagesLoaded.current === imagesToLoad.length) {
      setImagesPreloaded(true);
    }
  };

  // Preload images
  useEffect(() => {
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  React.useEffect(() => {
    setCustomBreakpoint(768);
  }, []);
  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  
  const contact = {
    name: "Renaldi P. Basuki",
    linkedIn: "https://www.linkedin.com/in/renaldi-prasetyo-basuki/",
    github: "https://github.com/RPrasetyoB",
    email: "rpbasuki.dev@gmail.com",
    no: "https://wa.me/6285236891709",
  };

  const backgroundImage = darkMode ? bg2 : bg;

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
    <>
      {imagesPreloaded && (
        <Box
        className= {style.container}
        sx={{
          height: "100svh",
          minHeight: "800px",
          width: "100svw",
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          background: darkMode ? "#030303" : "transparent",
          backgroundImage: !darkMode ? `url(${homeLight})` : `url(${homeDark})`,
          transition: " background-image  0.8s ease-in-out, background  0.8s ease-in-out",
          "-moz-transition" : "background-image  0.8s ease-in-out, background  0.8s ease-in-out",   
          backgroundSize: "cover",
        }}
      >
        {darkMode ? (<Tsparticle />) : (<Leaf />)}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: isMobile ? 6 : isTablet? "8vw" : "6vw",
            gap: "5vh",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{ fontFamily: "Rubik Doodle Shadow, system-ui" }}
            >
              RENALDI
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontFamily: "Rubik Doodle Shadow, system-ui" }}
            >
              PRASETYO
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
          <Box
            className="background-image"
            sx={{
              display: isMobile ? "none" : "flex",
              width: isTablet ? "200%" : "auto",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={backgroundImage}
              style={{
                height: "100%",
                objectFit: "cover",
                maskImage: isTablet ? "linear-gradient(to right, transparent 30% black 90%)" : "linear-gradient(to right, transparent 5%, black 50%)",
              }}
              alt="background image"
            />
          </Box>
      </Box>
      )}
    </>    
  );
};

export default Home;
