import bg from "../../assets/resume.webp";
import bgMobile from "../../assets/resume2.webp";
import { CarouselBE, CarouselCube, CarouselFE, ExpTimeline, Hobbies } from "../../component";
import theme from "../../Theme";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";

const Resume = () => {
  const [customBreakpoint, setCustomBreakpoint] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCustomBreakpoint(768);
  }, []);

  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: isTablet ? "auto" : "100svh",
        minHeight: isTablet ? "100svh" : "105svh",
        width: "100svw",
        paddingBottom: isTablet ? "40px" : 0,
        backgroundImage: isMobile ? `url(${bgMobile})` : `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "2vh" : "",
        justifyContent: "space-around",
        overflow: "hidden",
        alignItems: "center",
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
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)",}}
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
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)",}}
          >
            Experience &<br/>Education
          </Typography>
          <Box sx={{ maxWidth: isTablet ? "350px" : "500px" }}>
            <Card sx={{ bgcolor: "#31313bce" }}>
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
