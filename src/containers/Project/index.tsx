import { Box } from "@mui/material";
import { useContext } from "react";
import { ModeState } from "../../utils/GlobalState";
import ReactGoogleSlides from "react-google-slides";
import darkBg from "../../assets/project/sky-dark.webp"
import lightBg from "../../assets/project/sunset.webp"
import styles from "./project.module.scss"

const Project = () => {
  const { darkMode } = useContext(ModeState);
  return (
    <Box
        className={styles.container}
      sx={{
        backgroundImage: darkMode ? `url(${darkBg})` : `url(${lightBg})`,
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      <ReactGoogleSlides
        className={styles.frame}        width={"100%"}
        height={"100%"}
        slidesLink= {darkMode ? "https://docs.google.com/presentation/d/1roI6y8Ox4oCc2Vk43uli5yb-jtIuLZjgQ7VcXAYhu8M/edit?usp=sharing" : "https://docs.google.com/presentation/d/1l6ZZxIs1Ffg4XcBfhgkUwWdHX6i89nbSRrG2tNbJpNM/edit?usp=sharing"}
        frameBorder={0}
        slideDuration={5}
        position={1}
        loop
        showControls
      />
    </Box>
  );
};

export default Project;
