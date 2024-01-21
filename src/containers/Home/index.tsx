import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import bg from "../../assets/table.webp";
import bgMobile from "../../assets/table2.webp"
import theme from "../../Theme";

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
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
  const redirectToWA = () => {
    window.open(contact.no, "_blank");
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "4vw",
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
            Software Engineer
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="h6">Lets get in touch :</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton
              sx={{ color: "#ffff", padding: "0", marginRight: "5px" }}
              onClick={() => redirectToLinkedIn()}
            >
              <LinkedInIcon sx={{ fontSize: "28px", padding: "0" }} />
            </IconButton>
            <IconButton
              sx={{ color: "#ffff", padding: "0", marginRight: "5px" }}
              onClick={() => redirectToEmail()}
            >
              <EmailIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton
              sx={{ color: "#ffff", padding: "0", marginRight: "6px" }}
              onClick={() => redirectToGitHub()}
            >
              <GitHubIcon sx={{ fontSize: "24px" }} />
            </IconButton>
            <IconButton
              sx={{ color: "#ffff", padding: "0", marginRight: "6px" }}
              onClick={() => redirectToWA()}
            >
              <WhatsAppIcon sx={{ fontSize: "24px" }} />
            </IconButton>
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
