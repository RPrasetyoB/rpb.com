import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MovieIcon from '@mui/icons-material/Movie';
import TerminalIcon from '@mui/icons-material/Terminal';
import bg from "../../assets/resume.webp";
import { ExpTimeline, Rating } from "../../component";
import theme from "../../Theme";

const Resume = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: isMobile ? "auto" : "100svh",
        width: "100svw",
        paddingTop: isMobile ? 0 : "64px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: isMobile ? "column" : "flex",
        justifyContent: "space-around",
        overflow:"hidden",
        alignItems: "center",
        paddingBottom: isMobile ? "40px" : 0
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop:"60px",
          gap:"6vh",
          width: isMobile ? "350px" : "auto"
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
          <Typography variant="h4" sx={{ fontSize: "1.8rem", textAlign:"center" }}>
            Software Engineer Skills
          </Typography>
          <Box>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.6)" }}>
              <CardContent>
                <Typography variant="h5">
                  <u style={{ textDecorationColor: "#005BB8" }}>Back-End</u>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Express{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={5} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  PostgreSQL{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={4} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Mongo{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={4} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Docker{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={3} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Rest API
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={5} />
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.6)" }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  <u style={{ textDecorationColor: "#005BB8" }}>Front-End</u>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  React{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={5} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  HTML5{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={5} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  SASS{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={4} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Component Libraries{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={5} />
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2vh",
            }}
            >
          <Typography variant="h4" sx={{ fontSize: "1.8rem", textAlign:"center" }}>
            Languages
          </Typography>
          <Box>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.9)" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Indonesian{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={6} />
                  </div>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  English{" "}
                  <div style={{ display: "flex" }}>
                    :&emsp;
                    <Rating value={4} />
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap:"4vh"
      }}>
        <Box sx={{paddingTop:"60px", display:"flex", flexDirection:"column", gap:"2vh"}}>
          <Typography variant="h4" sx={{ fontSize: "1.8rem", textAlign:"center" }}>
            Experience & Education
          </Typography>
          <Box sx={{maxWidth: isTablet ? "350px" : "500px"}}>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.9)" }}>
                <CardContent>
                    <ExpTimeline />
                </CardContent>
            </Card>
          </Box>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"2vh"}}>
          <Typography variant="h4" sx={{ fontSize: "1.8rem", textAlign:"center" }}>
            Hobbies & Interest
          </Typography>
          <Box sx={{maxWidth:"500px"}}>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.6)" }}>
                <CardContent>
                    <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <SportsEsportsIcon sx={{color:"white", fontSize:"4rem"}}/>
                            <Typography sx={{color:"white"}}>Gaming</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <CameraAltIcon sx={{color:"white", fontSize:"4rem"}}/>
                            <Typography sx={{color:"white"}}>Photography</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <MovieIcon sx={{color:"white", fontSize:"4rem"}}/>
                            <Typography sx={{color:"white"}}>Watch Movie</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <TerminalIcon sx={{color:"white", fontSize:"4rem"}}/>
                            <Typography sx={{color:"white"}}>Tech News</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
