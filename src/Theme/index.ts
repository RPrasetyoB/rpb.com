import { createTheme } from "@mui/material/styles";

declare module "@mui/material" {
  interface TypographyVariants {
    logotype?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logotype?: React.CSSProperties;
  }
}
const theme = createTheme({
  typography: {
    logotype: {
      fontFamily: "eixample-dip, serif",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "1.8rem",
    },
    h1: {
      fontFamily: "Rubik, system-ui",
      fontWeight: 700,
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      }
    },

    h2: {
      fontFamily: "Rubik, system-ui",
      fontWeight: 700,
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '2.4rem',
      }
    },

    h3: {
      fontFamily: "Rubik, system-ui",
      fontWeight: 700,
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '1.6rem',
      }
    },


    h4: {
      fontFamily: "Rubik, system-ui",
      fontWeight: 400,
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '1.2rem',
      }
    },

    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 800,
      fontSize: "1.4rem",
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '1.3rem',
      }
    },

    h6: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "1.1rem",
      color: "white",
      '@media (max-width:768px)': {
        fontSize: '0.9rem',
      }
    },

    body1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 300,
      color: "white",
      fontSize: '1rem',
      '@media (max-width:768px)': {
        fontSize: '0.6rem',
      }
    },
  },
});

export default theme;
