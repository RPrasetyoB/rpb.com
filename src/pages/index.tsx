import * as React from "react";
import { useMediaQuery} from "@mui/material";
import { About, Home, Navbar, Project, Resume } from "../containers";
import { Element } from "react-scroll";
import gsap from "gsap";
import Box from "@mui/material/Box";
import { Starfall } from "../component";

interface Props {
  window?: () => Window;
}

const MainPage = (props: Props) => {
  const { window } = props;
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  const comp = React.useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "0",
        duration: 0.5,
        delay: 1,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 1,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "0",
          opacity: 0,
          duration: 1.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          opacity: 0,
          duration: 0.1,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{background:"black", width:"100vw"}}>
      <Box ref={comp} sx={{maxWidth:"100%", overflowX:"hidden"}}>
        <div
          id="intro-slider"
          style={{
            height: "100vh",
            width: "100vw",
            padding: "10px",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            background: "black",
            justifyContent:"center",
            alignItems:"center"
          }}
        > 
          <h1 id="title-1" style={{fontSize: isMobile ? 25 : isTablet ? 40 : 60}}>
            Welcome to My Website
          </h1>
          <h1 id="title-2" style={{fontSize: isMobile ? 15 : isTablet ? 30 : 40, fontFamily: "Rubik Doodle Shadow, system-ui"}}>
            THANKS FOR VISITING
          </h1>
          <Starfall />
        </div>
        <div id="welcome">
          <Navbar />
        </div>
      </Box>
          <Element name="home" id="welcome">
            <Home />
          </Element>
          <Element name="about" id="welcome">
            <About />
          </Element>
          <Element name="resume" id="welcome">
            <Resume />
          </Element>
          <Element name="project" id="welcome">
            <Project />
          </Element>
    </div>
  );
};

export default MainPage;
