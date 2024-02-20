import bg from "../../assets/resume/resume.webp";
import bgMobile from "../../assets/resume/resume2.webp";
import bgLight from "../../assets/resume/resume-light.webp";
import bgLightMobile from "../../assets/resume/resume-mobile.webp";
import { CarouselBE, CarouselCube, CarouselFE, ExpTimeline, Hobbies } from "../../component";
import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import { ModeState } from "../../utils/GlobalState";

const Resume = () => {
  const [customBreakpoint, setCustomBreakpoint] = useState<number | undefined>(undefined);
  const { darkMode } = useContext(ModeState);

  useEffect(() => {
    setCustomBreakpoint(768);
  }, []);

  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');
  return (
    <Box
      sx={{
        minHeight: isTablet ? "100svh" : "100vh",
        width: "100svw",
        paddingBottom: isTablet ? "40px" : "60px",
        paddingTop: isTablet ? "40px" : "60px",
        backgroundImage: !darkMode && isMobile ? `url(${bgLightMobile})` : !darkMode ? `url(${bgLight})` : isMobile ? `url(${bgMobile})` : `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "2vh" : "",
        justifyContent: "space-around",
        overflow: "hidden",
        alignItems: "center",
        transition: "background-image 0.8s ease-in-out"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
          gap: isTablet ? "2vh" : "6vh",
          width: isMobile ? "350px" : "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: darkMode ? "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)" :
            "5px 5px 7px rgba(255, 255, 255, 0.5), -5px -5px 7px rgba(255, 255, 255, 0.5), 5px -5px 7px rgba(255, 255, 255, 0.5), -5px 5px 7px rgba(255, 255, 255, 0.5)",}}
          >
            Developer tools
          </Typography>
          <Box sx={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <CarouselBE />
            <CarouselFE />
            <CarouselCube />
          </Box>
        </Box>
        {(isTablet && !isCustomBreakpoint) && (<Hobbies />)}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: darkMode ? "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)" :
            "5px 5px 7px rgba(255, 255, 255, 0.5), -5px -5px 7px rgba(255, 255, 255, 0.5), 5px -5px 7px rgba(255, 255, 255, 0.5), -5px 5px 7px rgba(255, 255, 255, 0.5)",}}
          >
            Experience &<br/>Education
          </Typography>
          <Box sx={{ maxWidth: isTablet ? "350px" : "500px" }}>
            <Card sx={{ bgcolor: darkMode ? "#31313bce" : "rgba(237, 237, 222, 0.8)"}}>
              <CardContent>
                <ExpTimeline />
              </CardContent>
            </Card>
          </Box>
        </Box>
        {(!isTablet || isCustomBreakpoint) && (<Hobbies />)}        
      </Box>
    </Box>
  );
};

export default Resume;
