import { Box, Typography } from "@mui/material";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import photo from "../../assets/rpb.webp";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "64px",
        paddingRight: "5vw",
        paddingLeft: "6vw",
        width: "100svw",
        textAlign: "center",
        height: "100svh",
        display: "flex",
        justifyContent:"center",
        gap:"5vw",
        background: 'linear-gradient(to right, #030303, #44495C)',
        margin: "auto",
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap:"10vh",
          width: "50%",
        }}
      >
        
        <Typography variant="h1" sx={{fontSize: "2.8rem", fontWeight:800, fontFamily:"Rubik, system-ui"}}>ABOUT</Typography>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent: "space-between", height: "60%"}}>
          <Typography variant="h6">
            Hello! I'm <span style={{color: "lightskyblue"}}>Renaldi Prasetyo Basuki</span>, a passionate software engineer
            with a love for creating efficient and innovative solutions. I
            specialize in JavaScript and TypeScript, bringing 1 year of coding
            experience to the table. My journey in the world of technology is
            driven by a curiosity to solve problems and a commitment to continuous
            learning. Explore my portfolio and discover the exciting projects I've
            worked on. Let's build something amazing together!
          </Typography>
          <Box sx={{display: "flex", alignSelf:"center", marginLeft: "-3vw", textAlign: "center"}}>
            <HorizontalRuleIcon sx={{color: "lightskyblue"}} />
            <Typography variant="body1">
              Banyuwangi, East Java, Indonesia 
            </Typography>
            <HorizontalRuleIcon sx={{color: "lightskyblue"}} />
          </Box>        
        </Box>        
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img
          src={photo}
          style={{
            maxHeight: "90vh",
            objectFit: "contain",
            filter: "brightness(1.1)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 50%, transparent 97%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
