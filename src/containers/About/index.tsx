import { Box, Typography, useMediaQuery } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import photo from "../../assets/rpb.webp";
import theme from "../../Theme";

const About = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        paddingTop: isTablet ? 0 :"64px",
        paddingRight: "8vw",
        paddingLeft: "6vw",
        paddingBottom: isMobile ? "40px" : 0,
        width: "100svw",
        height: isMobile  ? "auto" : "100svh",
        gap: isTablet ? "5vw" : 0,
        background: "linear-gradient(to right, #030303, #44495C)",
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
            paddingTop: isMobile ? "64px" : 0
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
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%", gap: isMobile ? "20px": "10px"}}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8vh",
              textAlign: isMobile ? "justify" : "left"
            }}
          >
            <Typography variant="h6">
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
                width: isMobile ? "auto" : "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={photo}
                style={{
                  maxHeight: isMobile ? "40vh" : "80vh",
                  objectFit: "contain",
                  filter: "brightness(0.9)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 50%, transparent 97%)",
                }}
              />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
