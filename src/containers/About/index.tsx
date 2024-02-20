import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import realPhoto from "../../assets/profile/real.webp";
import animatedPhoto from "../../assets/profile/anime.webp";
import bgLight from "../../assets/about/about-light.webp";
import bgDark from "../../assets/about/about-dark.jpg";
import { Typography, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ModeState } from "../../utils/GlobalState";
const About = () => {
  const [customBreakpoint, setCustomBreakpoint] = useState<number | undefined>(undefined);
  const { darkMode } = useContext(ModeState);

  useEffect(() => {
    setCustomBreakpoint(1200);
  }, []);

  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  return (
    <Box
      sx={{
        paddingTop: isMobile ? 0 : "60px",
        paddingRight: "8vw",
        paddingLeft: "6vw",
        paddingBottom: isTablet ? "5vh" : isMobile ? 0 : "40px",
        width: "100svw",
        height: "auto",
        minHeight: "100svh",
        gap: isTablet ? "5vw" : "10px",
        backgroundImage: darkMode ? `url(${bgDark})` : `url(${bgLight})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        display : "flex",
        flexDirection: "column",
        justifyContent:"center",
        overflow:"hidden",
        transition: "background-image 0.8s ease-in-out"
      }}
    >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontFamily: "Rubik, system-ui",
            paddingTop: isTablet ? "80px" : 0,
            marginBottom: isMobile ? "65px" : 0,
            transition: "text-shadow 0.8s ease-in-out",
            textShadow: darkMode ? "none" : "5px 5px 7px rgba(255,255,255, 0.5), -5px -5px 7px rgba(255,255,255, 0.5), 5px -5px 7px rgba(255,255,255, 0.5), -5px 5px 7px rgba(255,255,255, 0.5)"
          }}
        >
          ABOUT
        </Typography>
      <Box
        sx={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4vh",
          width: "100%",
          maxHeight: "100%"
        }}
      >        
        <Box
          sx= {{ display: "flex", flexDirection: isTablet ? "column" : "row", width: "100%", gap: isMobile ? "8vh" : isTablet ? "30px" : "8vw"}} >
          <Box
            sx={{
              width: isTablet ? "100%" : "75%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: isCustomBreakpoint ? "5vh" : "25vh",
              textAlign: "justify",
            }}
          >
            <Typography variant="h6" sx={{textShadow: darkMode ? "none" :  "5px 5px 7px rgba(255,255,255, 0.5), -5px -5px 7px rgba(255,255,255, 0.5), 5px -5px 7px rgba(255,255,255, 0.5), -5px 5px 7px rgba(255,255,255, 0.5)", fontWeight: darkMode ? "auto" : 500, transition: "text-shadow 0.8s ease-in-out",}}>
              <span style={{ color: darkMode ? "lightskyblue" : "blue" }}>
                Renaldi Prasetyo Basuki
              </span>
              &nbsp;is a proficient web developer and software engineer specializing in React JS, Next JS, Express JS, MySQL, PostgreSQL, and MongoDB.
              His extensive background in service engineering has finely tuned his efficient problem-solving skills, significantly influencing his approach to web and 
              software development. Committed to delivering both creative and efficient solutions, Renaldi aims to be a valuable asset in contributing to innovative projects
               as a flexible developer that can focus on Back-end or Front-end, while remaining adaptable to the ever-changing landscape of the field.
            </Typography>

            {!isMobile && (
              <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginLeft: "-3vw",
                textAlign: "center",
                textShadow: darkMode ? "none" : "5px 5px 7px rgba(255,255,255, 0.5), -5px -5px 7px rgba(255,255,255, 0.5), 5px -5px 7px rgba(255,255,255, 0.5), -5px 5px 7px rgba(255,255,255, 0.5)"
              }}
            >
              <HorizontalRuleIcon
                sx={{ color: "lightskyblue", alignSelf: "center" }}
              />
              <Typography variant="h6" sx={{ maxWidth: isMobile ? "26vw" : "20vw", fontWeight: darkMode ? "auto" : 500 }}>
                Banyuwangi, East-Java, Indonesia
              </Typography>
              <HorizontalRuleIcon
                sx={{ color: "lightskyblue", alignSelf: "center" }}
              />
            </Box>
            )}
            
          </Box>
          <Box
              sx={{
                width: isTablet ? "auto" : "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                className="about-photo"
                src={darkMode ? realPhoto : animatedPhoto}
                style={{
                  maxHeight: isTablet ? "40vh" : "70vh",
                  objectFit: "contain",
                  paddingTop: "-60px",
                }}
                alt="renaldi photo"
              />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;