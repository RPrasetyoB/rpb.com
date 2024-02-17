import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import bg from "../../assets/table.webp";
import bgMobile from "../../assets/table2.webp"
import theme from "../../Theme";
import { Occupations } from "../../component";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Tsparticle from "../../component/Tsparticle";

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
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
        paddingTop: "64px",
        bgcolor: "#030303",
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Tsparticle />
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
            variant="h5"
            sx={{ fontFamily: "Rubik Doodle Shadow, system-ui" }}
          >
            RENALDI PRASETYO
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Rubik, system-ui", marginLeft: "-4px" }}
          >
            BASUKI
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto Mono, monospace" }}
          >
            <Occupations />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="h6">Lets get in touch :</Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", width: "75%" }}>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: "#ffff", padding: "0", margin: "auto"  }}
                onClick={() => redirectToLinkedIn()}
              >
                <LinkedInIcon sx={{ fontSize: "28px", padding: "0", "&:hover":{fontSize: "38px"}, transition: "font-size 0.3s ease-in-out"}} />
              </IconButton>
            </span>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: "#ffff", padding: "0", margin: "auto" }}
                onClick={() => redirectToEmail()}
              >
                <EmailIcon sx={{ fontSize: "30px", "&:hover":{fontSize: "40px"}, transition: "font-size 0.3s ease-in-out" }} />
              </IconButton>
            </span>
            <span style={{width:"45px"}}>
              <IconButton
                sx={{ color: "#ffff", padding: "0", margin: "auto"  }}
                onClick={() => redirectToGitHub()}
              >
                <GitHubIcon sx={{ fontSize: "24px", "&:hover":{fontSize: "34px"}, transition: "font-size 0.3s ease-in-out" }} />
              </IconButton>
            </span>            
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "100%" }}>
        <img
          src={isMobile ? bgMobile : bg }
          style={{
            objectFit: "cover",
            height: "100%",
            filter: "brightness(1.1)",
            maskImage:
              isMobile ? "linear-gradient(to right, transparent 0%, black 20%, transparent 97%)" : "linear-gradient(to right, transparent 0%, black 5%, transparent 97%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
