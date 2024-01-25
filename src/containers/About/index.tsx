import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import photo from "../../assets/rpb.webp";
import bg from "../../assets/about.webp";
import bgCustom from "../../assets/about1.webp";
import bgMobile from "../../assets/about2.webp";
import bgTablet from "../../assets/about3.webp";
import theme from "../../Theme";
import { Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

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
        height: "100svh",
        minHeight: "90svh",
        gap: isTablet ? "5vw" : "10px",
        backgroundImage: isTablet ? `url(${bgTablet})` : isMobile ? `url(${bgMobile})` : isCustomBreakpoint ? `url(${bgCustom})` : `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: isTablet ? "center bottom" : "center right",
        display : "flex",
        flexDirection: "column",
        justifyContent:"center",
        overflow:"hidden"
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
          sx= {{ display: "flex", flexDirection: isTablet ? "column" : "row", width: "100%", gap: isMobile ? "15vh" : isTablet ? "80px" : "8vw"}} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8vh",
              textAlign: isTablet ? "justify" : "left",
            }}
          >
            <Typography variant="h6" sx={{textShadow: "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)",}}>
              Hello! I'm{" "}
              <span style={{ color: "lightskyblue" }}>
                Renaldi Prasetyo Basuki
              </span>
              , a passionate software engineer with a love for creating
              efficient and innovative solutions. I specialize in JavaScript and
              TypeScript. My journey in the world of technology is driven by a
              curiosity to solve problems and a commitment to continuous
              learning. Explore my portfolio and discover the exciting projects
              I've worked on. Let's build something amazing together!
            </Typography>

            {!isMobile && (
              <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginLeft: "-3vw",
                textAlign: "center",
                textShadow: "6px 6px 8px rgba(0, 0, 0, 1)"
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
