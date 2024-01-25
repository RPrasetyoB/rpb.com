import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MovieIcon from "@mui/icons-material/Movie";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Card, CardContent, Typography } from "@mui/material"
import Box from "@mui/material/Box";



const Hobbies = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.8rem", textAlign: "center", textShadow: "8px 8px 10px rgba(0, 0, 0, 1)" }}
          >
            Hobbies & Interest
          </Typography>
          <Box sx={{ maxWidth: "500px" }}>
            <Card sx={{ bgcolor: "rgba(0, 0, 0, 0.6)" }}>
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
                      sx={{ color: "white", fontSize: "4rem" }}
                    />
                    <Typography sx={{ color: "white" }}>Gaming</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CameraAltIcon sx={{ color: "white", fontSize: "4rem" }} />
                    <Typography sx={{ color: "white" }}>Photography</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <MovieIcon sx={{ color: "white", fontSize: "4rem" }} />
                    <Typography sx={{ color: "white" }}>Watch Movie</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TerminalIcon sx={{ color: "white", fontSize: "4rem" }} />
                    <Typography sx={{ color: "white" }}>Tech News</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
    )
}

export default Hobbies