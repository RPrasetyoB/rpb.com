import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import photo from "../../assets/rpb.webp";
import bg from "../../assets/about.webp";
import theme from "../../Theme";
import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const About = () => {
  const [customBreakpoint, setCustomBreakpoint] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCustomBreakpoint(1200);
  }, []);

  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        paddingRight: "8vw",
        paddingLeft: "6vw",
        paddingBottom: isTablet ? "5vh" : isMobile ? 0 :"auto",
        width: "100svw",
        height: "auto",
        minHeight: "100svh",
        gap: isTablet ? "5vw" : "10px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: isTablet ? "center bottom" : "center right",
        display : "flex",
        flexDirection: "column",
        justifyContent:"center",
        overflow:"hidden",
      }}
    >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontFamily: "Rubik, system-ui",
            paddingTop: isTablet ? "64px" : 0,
            marginBottom: isMobile ? "65px" : 0,
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
          sx= {{ display: "flex", flexDirection: isTablet ? "column" : "row", width: "100%", gap: isMobile ? "8vh" : isTablet ? "80px" : "8vw"}} >
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
            <Typography variant="h6" sx={{textShadow: "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)",}}>
              Hello! I'm{" "}
              <span style={{ color: "lightskyblue" }}>
                Renaldi Prasetyo Basuki
              </span>
              a dedicated software & Web Developer driven by a passion for solving problems and continuous learning.
              I specialize in JavaScript and TypeScript, but I'm ready to tackle any tech challenge that comes my way.
              Explore my portfolio for a glimpse of exciting projects, and let's collaborate to craft something awesome together!
            </Typography>

            {!isMobile && (
              <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginLeft: "-3vw",
                textAlign: "center",
                textShadow: "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)"
              }}
            >
              <HorizontalRuleIcon
                sx={{ color: "lightskyblue", alignSelf: "center" }}
              />
              <Typography variant="body1" sx={{ maxWidth: isMobile ? "26vw" : "20vw" }}>
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
                src={photo}
                style={{
                  maxHeight: isTablet ? "40vh" : "70vh",
                  objectFit: "contain",
                }}
              />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;