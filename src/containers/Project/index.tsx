import { Box, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ModeState } from "../../utils/GlobalState";
import ReactGoogleSlides from "react-google-slides";
import darkBg from "../../assets/project/sky-dark.webp";
import lightBg from "../../assets/project/sunset.webp";
import styles from "./project.module.scss";

const Project = () => {
  const { darkMode } = useContext(ModeState);
  const [customBreakpoint, setCustomBreakpoint] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setCustomBreakpoint(700);
  }, []);
  const isCustomBreakpoint = useMediaQuery(`(max-width:${customBreakpoint}px)`);

  return (
    <Box className={styles.project} sx={{
      backgroundImage: darkMode ? `url(${darkBg})` : `url(${lightBg})`,
      transition: "background-image 0.8s ease-in-out",
    }}>
      {isCustomBreakpoint && (
        <Box className={styles.container}>
        <ReactGoogleSlides
          className={styles.frame}
          slidesLink={
            darkMode
              ? "https://docs.google.com/presentation/d/1y4t3xNWpR3yZVvBM8-V-mw83W_lQq-wQ1q81S1SEEAQ/edit?usp=sharing"
              : "https://docs.google.com/presentation/d/1-LPaV0vspws839rp1u-5zk_c_Z3vdb_ISEcWwFOKiRk/edit?usp=sharing"
          }
          frameBorder={0}
          slideDuration={5}
          position={1}
          loop
          showControls
        />
      </Box>
      )}
      {!isCustomBreakpoint && (
        <Box
        className={styles.container}
        sx={{
          backgroundImage: darkMode ? `url(${darkBg})` : `url(${lightBg})`,
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <ReactGoogleSlides
          className={styles.frame}
          width={"100%"}
          height={"100%"}
          slidesLink={
            darkMode
              ? "https://docs.google.com/presentation/d/1roI6y8Ox4oCc2Vk43uli5yb-jtIuLZjgQ7VcXAYhu8M/edit?usp=sharing"
              : "https://docs.google.com/presentation/d/1l6ZZxIs1Ffg4XcBfhgkUwWdHX6i89nbSRrG2tNbJpNM/edit?usp=sharing"
          }
          frameBorder={0}
          slideDuration={5}
          position={1}
          loop
          showControls
        />
      </Box>
      )}
    </Box>
  );
};

export default Project;
