import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MovieIcon from "@mui/icons-material/Movie";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Card, CardContent, Typography } from "@mui/material"
import Box from "@mui/material/Box";
import { useContext } from "react";
import { ModeState } from "../../utils/GlobalState";



const Hobbies = () => {
  const { darkMode } = useContext(ModeState);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: darkMode ? "5px 5px 7px rgba(0, 0, 0, 0.5), -5px -5px 7px rgba(0, 0, 0, 0.5), 5px -5px 7px rgba(0, 0, 0, 0.5), -5px 5px 7px rgba(0, 0, 0, 0.5)" :
            "5px 5px 7px rgba(255, 255, 255, 0.5), -5px -5px 7px rgba(255, 255, 255, 0.5), 5px -5px 7px rgba(255, 255, 255, 0.5), -5px 5px 7px rgba(255, 255, 255, 0.5)" }}
          >
            Hobbies & Interest
          </Typography>
          <Box sx={{ maxWidth: "500px" }}>
            <Card sx={{ bgcolor: darkMode ? "#31313bce" : "rgba(237, 237, 222, 0.8)"}}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <SportsEsportsIcon
                      sx={{ color: darkMode ? "white" : "black", fontSize: "4rem" }}
                    />
                    <Typography sx={{ color: darkMode ? "white" : "black" }}>Gaming</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CameraAltIcon sx={{ color: darkMode ? "white" : "black", fontSize: "4rem" }} />
                    <Typography sx={{ color: darkMode ? "white" : "black" }}>Photography</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <MovieIcon sx={{ color: darkMode ? "white" : "black", fontSize: "4rem" }} />
                    <Typography sx={{ color: darkMode ? "white" : "black" }}>Watch Movie</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TerminalIcon sx={{ color: darkMode ? "white" : "black", fontSize: "4rem" }} />
                    <Typography sx={{ color: darkMode ? "white" : "black" }}>Tech News</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
    )
}

export default Hobbies